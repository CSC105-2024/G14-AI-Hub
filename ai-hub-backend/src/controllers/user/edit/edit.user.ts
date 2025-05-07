import type { Context } from "hono";
import type { EditUser } from "../../../types/todo.types.ts";
import { updateInfo } from "../../../models/user.model.ts";
import { compareHash, generateHash } from "../../../utils/hash.ts";

const editUser = async (c: Context) => {
  const { name, email, password, newPassword }: EditUser = await c.req.json();

  //TODO: hard coded
  const id = 2;

  try {
    //if user does not change password
    const data = await updateInfo(id, name, email);

    //if user changes password
    if (password && newPassword) {
      const valid = await compareHash(password, id);
      console.log(valid);

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
