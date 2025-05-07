import { Hono } from "hono";
import {
  registerUser,
  verifyUser,
} from "../controllers/user/register/register.user.ts";
import { loginUser } from "../controllers/user/login/login.user.ts";
import { editUser } from "../controllers/user/edit/edit.user.ts";

const userRouter = new Hono();

userRouter.post("/register", registerUser);
userRouter.get("/verify/:token", verifyUser);
userRouter.post("/login", loginUser);
userRouter.post("/edit", editUser); //TODO: need to add middleware

export { userRouter };
