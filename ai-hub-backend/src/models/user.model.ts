import { db } from "../index.js";

//Register
const registerUser = async (name: string, email: string, role: string) => {
  const user = await db.user.create({
    data: {
      name: name,
      email: email,
      role: role,
    },
  });

  return user;
};

//password
const registerPassword = async (hash: string, userId: number) => {
  const user = await db.password.create({
    data: {
      hash: hash,
      user_id: userId,
    },
  });

  return user;
};

//find email
const findEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email: email },
  });

  return user;
};

export { registerUser, registerPassword, findEmail };
