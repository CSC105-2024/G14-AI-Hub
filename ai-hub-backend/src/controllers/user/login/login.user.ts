import type { Context } from "hono";
import type { Login } from "../../../types/types.ts";
import * as userModel from "../../../models/user.model.js";
import {
  accessTokenGenerator,
  refreshTokenGenerator,
} from "../../../utils/tokenGenerator.ts";
import { setSignedCookie } from "hono/cookie";
import { compareHash } from "../../../utils/hash.ts";
import dotenv from "dotenv";

dotenv.config();

const loginUser = async (c: Context) => {
  const { newEmail, password }: Login = await c.req.json();

  try {
    const info = await userModel.findInfo(newEmail);

    if (!info) throw new Error("Invalid email");

    const valid = await compareHash(password, info.id);

    if (!valid) throw new Error("Password is Incorrect");

    //tokens
    const accessToken = accessTokenGenerator({ id: info.id });
    const refreshToken = refreshTokenGenerator(info.id);

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

    const { id, ...rest } = info;
    await userModel.insertAccessToken(id, accessToken);

    return c.json(
      {
        success: true,
        data: { ...rest },
        msg: `successful`,
      },
      200
    );
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

export { loginUser };
