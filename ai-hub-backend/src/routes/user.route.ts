import { Hono } from "hono";
import * as userController from "../controllers/user/user.contoller.ts";

const userRouter = new Hono();

userRouter.post("/register", userController.registerUser);

export { userRouter };
