import type { Context } from "hono";
import type { EditUser, Hash } from "../../../types/todo.types.ts";
import { findPassword, updateInfo } from "../../../models/user.model.ts";
import { generateHash } from "../../../utils/hash.ts";

const editUser = async (c: Context) => {
  const { name, email, password, newPassword }: EditUser = await c.req.json();

  const id = 1;

  try {
    //if user does not change password
    const data = await updateInfo(id, name, email);

    //if user changes password
    if (password && newPassword) {
      const { hash } = (await findPassword(id)) as Hash;

      //salt
      const newHash = await generateHash(newPassword);
      console.log(newHash);
    }

    return c.json(data);
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

export { editUser };
