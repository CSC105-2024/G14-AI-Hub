import bcrypt from "bcrypt";

const generateHash = async (password: string) => {
  const salt = await bcrypt.genSalt();
  const newHash = await bcrypt.hash(password, salt);

  return newHash;
};

const compareHash = async (password: string, hash: string) => {};

export { generateHash };
