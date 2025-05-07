import { Hono } from "hono";
import { userRouter } from "./user.route.ts";
import { courseRouter } from "./course.route.ts";

const mainRouter = new Hono();

mainRouter.route("/user", userRouter);
mainRouter.route("/course", courseRouter);

export { mainRouter };
