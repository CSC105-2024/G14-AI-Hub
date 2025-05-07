import type { Context } from "hono";
import type { EditUser } from "../../../types/todo.types.ts";
import { updateInfo, updatePassword } from "../../../models/user.model.ts";
import { compareHash, generateHash } from "../../../utils/hash.ts";
import { accessTokenGenerator } from "../../../utils/tokenGenerator.ts";

const editUser = async (c: Context) => {
  const { name, email, password, newPassword }: EditUser = await c.req.json();

  //TODO: hard coded
  const id = 2;

  try {
    //if user does not change password
    const info = await updateInfo(id, name, email);

    //if user changes password
    if (password && newPassword) {
      const valid = await compareHash(password, id);

      if (!valid) throw new Error("Password is incorrect!!!");

      //salt
      const newHash = await generateHash(newPassword);

      await updatePassword(id, newHash);
    }

    //gen new Token
    const accessToken = accessTokenGenerator({ id: info.id });

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

export { editUser };
