import { Hono } from "hono";
import { createCourse } from "../controllers/course/create_course/create.course.ts";

const courseRouter = new Hono();

courseRouter.post("/create", createCourse);

export { courseRouter };
