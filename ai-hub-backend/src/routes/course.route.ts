import { Hono } from "hono";
import { createCourse } from "../controllers/course/create_course/create.course.ts";
import { getCourses } from "../controllers/course/get_course.ts/get.course.ts";
import { deleteCourse } from "../controllers/course/delete_course.ts/delete.course.ts";

const courseRouter = new Hono();

courseRouter.post("/create", createCourse);
courseRouter.get("/get", getCourses);
courseRouter.get('/:id', getCourseById);
courseRouter.delete('/:id', deleteCourse);

export { courseRouter };









