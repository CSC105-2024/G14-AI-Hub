import type { Context } from "hono";
import { getSignedCookie } from "hono/cookie";
import jwt from "jsonwebtoken";
import type { Id } from "../../../types/todo.types.ts";
import { findInfo } from "../../../models/user.model.ts";
import { accessTokenGenerator } from "../../../utils/tokenGenerator.ts";

const refreshToken = async (c: Context) => {
  const cookie = await getSignedCookie(
    c,
    process.env.COOKIE_SECRET_KEY!,
    "jwt"
  );

  if (typeof cookie !== "string") throw new Error("Invalid or missing token");

  try {
    const { id } = jwt.verify(
      cookie,
      process.env.REFRESH_TOKEN_SECRET_KEY!
    ) as Id;

    const info = await findInfo(id);

    if (!info) throw new Error("User not found");

    const accessToken = accessTokenGenerator({ id });

    return c.json(
      {
        success: true,
        data: { accessToken },
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
      401
    );
  }
};

export { refreshToken };
