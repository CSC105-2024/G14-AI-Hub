import { Hono } from "hono";
import { createCourse } from "../controllers/course/create_course/create.course.ts";
<<<<<<< HEAD
import { getCourses, getCourseById } from "../controllers/course/get_course.ts/get.course.ts";
import { deleteCourse } from "../controllers/course/delete_course/delete.course.ts";

const courseRouter = new Hono();

courseRouter.post("/create", createCourse);
courseRouter.get("/get", getCourses);
courseRouter.get('/:id', getCourseById);
courseRouter.delete("/:id", deleteCourse);
=======
import { verify } from "../middlewares/verify.ts";

const courseRouter = new Hono();

courseRouter.post("/create", verify, createCourse);
>>>>>>> f7827061003fcea12dbd3e828a9664c49d7b1dc4

export { courseRouter };









