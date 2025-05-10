import type { Context } from "hono";
import { deleteCookie } from "hono/cookie";

const logout = async (c: Context) => {
  deleteCookie(c, "jwt");
};

export { logout };
