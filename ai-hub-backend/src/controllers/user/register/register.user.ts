import type { Context } from "hono";
import * as userModel from "../../../models/user.model.js";
import { accessTokenGenerator } from "../../../utils/tokenGenerator.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import * as userService from "./register.service.ts";
import { error } from "console";
import { generateHash } from "../../../utils/hash.ts";

type createUser = {
  name: string;
  email: string;
  role: string;
  password: string;
};

//register
const registerUser = async (c: Context) => {
  try {
    const { name, email, role, password }: createUser = await c.req.json();

    const user = { name, email, role };

    const info = await userModel.findInfo(email);
    if (info) throw new Error("Email already existed!!!");

    const jwtToken = accessTokenGenerator(user);

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
      text: `Hi There! You have recently visited 
             our website and entered your email.
             Please follow the given link to verify your email
             http://localhost:${process.env.PORT!}/user/verify/${jwtToken} 
             Thanks`,
    };

    //salt
    const hash = await generateHash(password);

    //store pass tempor
    await userModel.registerTempPassword(hash, email);

    transporter.sendMail(mailConfig, function (error, info) {
      // if (error) throw Error(error);
      console.log("Email Sent Successfully");
      console.log(info);
    });

    //auto delete
    setTimeout(async () => {
      await userService.migrateTempPassword(email);
    }, 15 * 60 * 1000); //15min

    return c.json("Email Sent Successfully");
  } catch (error) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${(error as Error).message}`,
      },
      400
    );
  }
};

//verify
const verifyUser = async (c: Context) => {
  try {
    const token = c.req.param("token");

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY!);

    //should be an obj
    if (typeof decoded === "string") {
      throw new Error("Invalid token payload");
    }

    const { name, email, role } = decoded;

    //migrate password
    const data = await userService.migrateTempPassword(email);

    if (!data) throw error("operation failed");

    //register
    await userService.register(name, email, role, data.hash);

    return c.text("Email verified successfully");
  } catch (error) {
    console.log(error);
    return c.text("Email verification failed");
  }
};

export { registerUser, verifyUser };
