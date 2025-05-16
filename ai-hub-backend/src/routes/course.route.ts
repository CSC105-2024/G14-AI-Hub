import { Hono } from "hono";
import { createCourse } from "../controllers/course/create_course/create.course.ts";
import { fetchCourses } from "../controllers/course/get_course.ts/get.course.ts";
import { deleteCourse } from "../controllers/course/delete_course/delete.course.ts";
import { editCourse } from "../controllers/course/edit_course/edit.course.ts";
import { verify } from "../middlewares/verify.ts";

const courseRouter = new Hono();

courseRouter.use(verify);

courseRouter.post("/create", createCourse);
courseRouter.get("/get", fetchCourses);
courseRouter.delete("/delete/:id", deleteCourse);
courseRouter.patch("/edit", editCourse);

export { courseRouter };
