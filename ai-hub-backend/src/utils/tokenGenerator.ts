import jwt from "jsonwebtoken";

type userData = {
  name: string;
  email: string;
  role: string;
};

const accessToken = (data: userData) => {
  return jwt.sign({ data }, process.env.REFRESH_TOKEN_SECRET_KEY, {
    expiresIn: "15m",
  });
};

export { accessToken };
