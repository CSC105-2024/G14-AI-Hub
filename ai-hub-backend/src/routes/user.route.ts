import { Hono } from "hono";
import * as userController from "../controllers/user/user.contoller.ts";

const userRouter = new Hono();

userRouter.post("/register", userController.registerUser);
userRouter.get("/verify/:token", userController.verifyUser);

export { userRouter };
