import type { Context } from "hono";
import type { Login, Hash } from "../../../types/todo.types.ts";
import * as userModel from "../../../models/user.model.js";
import bcrypt from "bcrypt";
import {
  accessTokenGenerator,
  refreshTokenGenerator,
} from "../../../utils/tokenGenerator.ts";
import { setSignedCookie } from "hono/cookie";

const loginUser = async (c: Context) => {
  const { email, password }: Login = await c.req.json();

  try {
    const info = await userModel.findInfo(email);

    if (!info) throw new Error("Invalid email");

    const { hash } = (await userModel.findPassword(info.id)) as Hash;

    const valid = await bcrypt.compare(password, hash);

    if (!valid) throw new Error("Password is Incorrect");

    //tokens
    const accessToken = accessTokenGenerator({ id: info.id });
    const refreshToken = refreshTokenGenerator(info.id);

    console.log(refreshToken);

    //TODO:
    await setSignedCookie(
      c,
      "jwt",
      refreshToken,
      process.env.COOKIE_SECRET_KEY!,
      {
        secure: false, //Still using localhost which doesn't use HTTPS
        httpOnly: true,
        maxAge: 700000,
      }
    );

    const data = { ...info, accessToken };

    return c.json(
      {
        success: true,
        data: data,
        msg: `successful`,
      },
      200
    );
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

export { loginUser };
