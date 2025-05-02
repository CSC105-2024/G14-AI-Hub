import type { Context } from "hono";
import * as userModel from "../../models/user.model.js";
import * as token from "../../utils/tokenGenerator.js";
import nodemailer from "nodemailer";

type createUser = {
  name: string;
  email: string;
  role: string;
};

const registerUser = async (c: Context) => {
  try {
    const { name, email, role }: createUser = await c.req.json();

    const user: createUser = { name, email, role };

    const jwtToken = token.accessToken(user);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "aihub6676@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailConfig = {
      // It should be a string of sender/server email
      from: "aihub6676@gmail.com",

      to: email,

      // Subject of Email
      subject: "Email Verification",

      // This would be the text of email body
      text: `Hi! There, You have recently visited 
             our website and entered your email.
             Please follow the given link to verify your email
             http://localhost:3000/verify/${jwtToken} 
             Thanks`,
    };

    transporter.sendMail(mailConfig, function (error, info) {
      // if (error) throw Error(error);
      console.log("Email Sent Successfully");
      console.log(info);
    });
  } catch (error) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${error}`,
      },
      400
    );
  }
};

export { registerUser };
