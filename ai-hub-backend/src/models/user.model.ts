import { db } from "../index.js";

//Register
const registerUser = async (
  name: string,
  email: string,
  role: string,
  trx: any
) => {
  const user = await trx.user.create({
    data: {
      name: name,
      email: email,
      role: role,
    },
  });

  return user;
};

//Password
const registerPassword = async (user_id: number, hash: string, trx: any) => {
  const password = await trx.password.create({
    data: {
      user_id: user_id,
      hash: hash,
    },
  });
};

// TempPassword
const registerTempPassword = async (hash: string, email: string) => {
  const user = await db.tempPassword.create({
    data: {
      email: email,
      hash: hash,
    },
  });
};

//FindTempPassword
const findTempPassword = async (email: string, trx: any) => {
  const hash = await trx.tempPassword.findUnique({
    where: { email: email },
    select: {
      hash: true,
    },
  });

  return hash;
};

///DeleteTempPassword
const deleteTempPassword = async (email: string, trx: any) => {
  const hash = await trx.tempPassword.delete({
    where: {
      email: email,
    },
  });

  return hash;
};

//findinfo
const findInfo = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email: email },
  });

  return user;
};

const findPassword = async (user_id: number) => {
  const hash = await db.password.findUnique({
    where: { user_id: user_id },
  });
  return hash;
};

export {
  registerUser,
  registerTempPassword,
  findInfo,
  registerPassword,
  findTempPassword,
  deleteTempPassword,
  findPassword,
};
