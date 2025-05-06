import { Hono } from "hono";
import {
  registerUser,
  verifyUser,
} from "../controllers/user/register/register.ts";

const userRouter = new Hono();

userRouter.post("/register", registerUser);
userRouter.get("/verify/:token", verifyUser);

export { userRouter };
