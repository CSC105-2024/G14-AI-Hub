import jwt from "jsonwebtoken";
import type { UserData } from "../types/todo.types.ts";

const accessTokenGenerator = (data: UserData) => {
  const payload = "id" in data ? { id: data.id } : data;
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY!, {
    expiresIn: "15m",
  });
};

const refreshTokenGenerator = (id: number) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET_KEY!, {
    expiresIn: "7d",
  });
};

export { accessTokenGenerator, refreshTokenGenerator };
