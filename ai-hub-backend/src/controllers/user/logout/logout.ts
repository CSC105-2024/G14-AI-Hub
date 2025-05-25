import type { Context } from "hono";
import { deleteCookie, getSignedCookie } from "hono/cookie";
import jwt from "jsonwebtoken";
import type { Id } from "../../../types/types.ts";
import { deleteAccessToken } from "../../../models/user.model.ts";

const logout = async (c: Context) => {
  try {
    const cookie = await getSignedCookie(
      c,
      process.env.COOKIE_SECRET_KEY!,
      "jwt"
    );

    if (typeof cookie !== "string") throw new Error("Invalid or missing token");

    //verify that jwt is valid or not
    const { id } = jwt.verify(
      cookie,
      process.env.REFRESH_TOKEN_SECRET_KEY!
    ) as Id;

    await deleteAccessToken(id);

    deleteCookie(c, "jwt");
    return c.json(
      {
        success: true,
        data: "cookie removed",
        msg: `successful`,
      },
      201
    );
  } catch (error) {
    console.log(error);
    deleteCookie(c, "jwt");
    return c.json(
      {
        success: true,
        data: "cookie removed",
        msg: `Logout encountered an issue, but token was cleared.`,
      },
      201
    );
  }
};

export { logout };
