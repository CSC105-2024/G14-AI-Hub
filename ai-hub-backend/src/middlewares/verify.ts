import type { Context, Next } from "hono";
import jwt from "jsonwebtoken";
import type { Id, Token } from "../types/types.ts";
import * as userModel from "../models/user.model.ts";
import { getSignedCookie } from "hono/cookie";
import { accessTokenGenerator } from "../utils/tokenGenerator.ts";

const verify = async (c: Context, next: Next) => {
  let info: Id | null = null;

  try {
    const cookie = await getSignedCookie(
      c,
      process.env.COOKIE_SECRET_KEY!,
      "jwt"
    );

    if (typeof cookie !== "string") throw new Error("Invalid or missing token");

    //verify that jwt is valid or not
    const refreshToken = jwt.verify(
      cookie,
      process.env.REFRESH_TOKEN_SECRET_KEY!
    ) as Id;

    info = await userModel.findInfo(refreshToken.id);

    if (!info) throw new Error("User not found");

    const { token } = (await userModel.findAccessToken(
      refreshToken.id
    )) as Token;
    if (!token) throw new Error("Token is required");

    const accessToken = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET_KEY!
    ) as Id;

    c.set("id", accessToken.id);

    await next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      if (!info)
        return c.json(
          {
            success: false,
            data: null,
            msg: `Refresh token expired. Please log in again.`,
          },
          401
        );

      //gen  new accessToken
      const accessToken = accessTokenGenerator({ id: info!.id });
      await userModel.insertAccessToken(info.id, accessToken);

      c.set("id", info!.id);

      await next();
    } else {
      console.error(error);

      return c.json(
        {
          success: false,
          data: null,
          msg: `${(error as Error).message}. Please log in again.`,
        },
        401
      );
    }
  }
};

export { verify };
