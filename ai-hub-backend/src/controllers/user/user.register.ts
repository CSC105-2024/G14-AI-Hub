import type { Context } from "hono";
import * as userModel from "../../models/user.model.js";

type createUser = {
  name: string;
  email: string;
  role: string;
  imgUrl: string;
};

const registerUser = async (c: Context) => {
  try {
    const { name, email, role, imgUrl }: createUser = await c.req.json();

    const newUser = await userModel.registerUser(name, email, role, imgUrl);

    return c.json(
      {
        success: true,
        data: null,
        msg: "successfully created",
      },
      201
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
