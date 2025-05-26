import { Hono } from "hono";
import { createCourse } from "../controllers/course/create_course/create.course.ts";
import { fetchCourses } from "../controllers/course/get_course.ts/get.course.ts";
import { deleteCourse } from "../controllers/course/delete_course/delete.course.ts";
import { editCourse } from "../controllers/course/edit_course/edit.course.ts";
import { verify } from "../middlewares/verify.ts";
import { role } from "../middlewares/role.ts";

const courseRouter = new Hono();

courseRouter.use(verify);

courseRouter.post("/create", role, createCourse);
courseRouter.get("/get", fetchCourses);
courseRouter.delete("/delete/:id", role, deleteCourse);
courseRouter.patch("/edit/:id", role, editCourse);

export { courseRouter };
