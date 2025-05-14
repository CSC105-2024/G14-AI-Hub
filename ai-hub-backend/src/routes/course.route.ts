import { Hono } from "hono";
import { createCourse } from "../controllers/course/create_course/create.course.ts";
import { verify } from "../middlewares/verify.ts";

const courseRouter = new Hono();

courseRouter.post("/create", verify, createCourse);

export { courseRouter };
