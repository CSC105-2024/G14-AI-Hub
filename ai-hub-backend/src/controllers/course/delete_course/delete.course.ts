import type { Context } from "hono";
import {
  deleteAnExistingCourse,
  getCourse,
} from "../../../models/course.model.ts";
import type { Course } from "../../../types/types.ts";
import { cloudinary } from "../../../cloudinary/cloudinary.ts";

const deleteCourse = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    const userId = c.get("id");

    if (isNaN(id)) {
      return c.json({
        success: false,
        message: "Invalid course ID",
      });
    }

    const { img1_id, img2_id, img3_id, img4_id } = (await getCourse(
      id,
      userId
    )) as Course;

    if (img1_id) {
      await cloudinary.api.delete_resources([
        img1_id,
        img2_id,
        img3_id,
        img4_id,
      ]);
      console.log("deleted");
    }

    const deletedCourse = await deleteAnExistingCourse(id);

    return c.json(
      {
        success: true,
        course: deletedCourse,
        msg: `successful`,
      },
      200
    );
  } catch (error) {
    console.error("Error deleting course:", error);
    return c.json(
      {
        success: false,
        message: "Failed to delete course",
      },
      400
    );
  }
};
export { deleteCourse };
