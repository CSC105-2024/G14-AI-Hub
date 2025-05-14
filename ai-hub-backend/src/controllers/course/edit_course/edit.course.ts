import type { Context } from "hono";
import * as courseModel from "../../../models/course.model.ts";

const editCourse = async (c: Context) => {
  try {
    const {
      title,
      content,
      note,
      img1,
      img1_id,
      img2,
      img2_id,
      img3,
      img3_id,
      img4,
      img4_id,
    } = await c.req.json();

    const id = await c.req.param();
    const user_id = Number(c.get("id"));
    const courseId = Number(id);

    const course = await courseModel.getCourse(courseId, user_id);

    if (!course) throw new Error("Course does not exist!!!");

    const updatedCourse = await courseModel.editCourse(
      title,
      content,
      note,
      img1,
      img1_id,
      img2,
      img2_id,
      img3,
      img3_id,
      img4,
      img4_id,
      courseId
    );
    return c.json(updatedCourse);
  } catch (error) {
    console.error("Error editing course:", error);
    return c.json({
      success: false,
      message: "Failed to edit course",
    });
  }
};
export { editCourse };
