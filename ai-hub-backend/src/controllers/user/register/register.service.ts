import { db } from "../../../index.ts";
import * as userModel from "../../../models/user.model.ts";

const migrateTempPassword = async (email: string) => {
  const hash = await db.$transaction(async (trx) => {
    const user = await userModel.findTempPassword(email, trx);

    if (user) {
      await userModel.deleteTempPassword(email, trx);
      return user;
    }
  });
  return hash;
};

const register = async (
  email: string,
  name: string,
  role: string,
  hash: string
) => {
  const info = await db.$transaction(async (trx) => {
    const user = await userModel.registerUser(email, name, role, trx);
    const user_id = Number(user.id);

    await userModel.registerPassword(user_id, hash, trx);
  });
};

export { migrateTempPassword, register };
