import type { Context } from "hono";
import * as userModel from "../../models/user.model.js";
import * as token from "../../utils/tokenGenerator.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

type createUser = {
  name: string;
  email: string;
  role: string;
};

const registerUser = async (c: Context) => {
  try {
    const { name, email, role }: createUser = await c.req.json();

    const user: createUser = { name, email, role };

    const info = await userModel.findEmail(email);

    if (info) throw new Error("Email already existed!!!");

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
             http://localhost:3000/user/verify/${jwtToken} 
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

const verifyUser = async (c: Context) => {
  try {
    const token = c.req.param("token");

    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_KEY);
    if (!decoded) throw new Error("Email verification failed");

    const { name, email, role } = decoded.data;
    console.log(name);

    return c.text("Email verified successfully");
  } catch (error) {
    return c.text(error);
  }
};

export { registerUser, verifyUser };
