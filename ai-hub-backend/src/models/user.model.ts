import type { $Enums } from "../generated/prisma/index.js";
import { db } from "../index.js";

//Register
const registerUser = async (
  name: string,
  email: string,
  role: $Enums.Role,
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

//findInfo
const findInfo = async (identifier: string | number) => {
  const user = await db.user.findUnique({
    where:
      typeof identifier === "string"
        ? { email: identifier }
        : { id: identifier },
  });

  return user;
};

//findPass
const findPassword = async (user_id: number) => {
  const hash = await db.password.findUnique({
    where: { user_id: user_id },
  });
  return hash;
};

//Update Info
const updateInfo = async (user_id: number, name: string, email: string) => {
  const info = await db.user.update({
    where: { id: user_id },
    data: {
      email: email,
      name: name,
    },
    select: {
      email: true,
      name: true,
    },
  });
  return info;
};

//Update Pass
const updatePassword = async (user_id: number, hash: string) => {
  await db.password.update({
    where: { user_id: user_id },
    data: {
      hash: hash,
    },
  });
};

//Insert url link and id
const uploadProfileAndId = async (
  id: number,
  img_url: string,
  img_id: string
) => {
  const info = await db.user.update({
    where: { id },
    data: {
      img_url,
      img_id,
    },
    select: {
      img_url: true,
      img_id: true,
    },
  });

  return info;
};

//Find Img id
const findImgId = async (id: number) => {
  const info = await db.user.findUnique({
    where: { id },
    select: {
      img_id: true,
    },
  });

  return info;
};

//Insert AccessToken
const insertAccessToken = async (user_id: number, token: string) => {
  await db.token.upsert({
    where: { user_id: user_id },
    update: {
      token: token,
    },
    create: {
      token: token,
      user_id: user_id,
    },
  });
};

//delete AccessToken
const deleteAccessToken = async (user_id: number) => {
  const token = await db.token.delete({
    where: {
      user_id: user_id,
    },
  });

  return token;
};

//find AccessToken
const findAccessToken = async (user_id: number) => {
  const token = await db.token.findUnique({
    where: {
      user_id: user_id,
    },
  });

  return token;
};

export {
  registerUser,
  registerTempPassword,
  findInfo,
  registerPassword,
  findTempPassword,
  deleteTempPassword,
  findPassword,
  updateInfo,
  updatePassword,
  uploadProfileAndId,
  findImgId,
  insertAccessToken,
  deleteAccessToken,
  findAccessToken,
};
