import type { Context, Next } from "hono";
import { findInfo } from "../models/user.model.ts";

const role = async (c: Context, next: Next) => {
  const id = c.get("id");

  try {
    const { role } = (await findInfo(id)) as any;

    if (role !== "Teacher") throw new Error("Role is not authorized");

    await next();
  } catch (error) {
    console.error(error);
    return c.json(
      {
        success: false,
        data: null,
        msg: `${(error as Error).message}`,
      },
      403
    );
  }
};

export { role };
