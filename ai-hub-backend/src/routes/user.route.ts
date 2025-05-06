import { Hono } from "hono";
import {
  registerUser,
  verifyUser,
} from "../controllers/user/register/register.ts";
import { loginUser } from "../controllers/user/login/login.ts";

const userRouter = new Hono();

userRouter.post("/register", registerUser);
userRouter.get("/verify/:token", verifyUser);
userRouter.post("/login", loginUser);

export { userRouter };
