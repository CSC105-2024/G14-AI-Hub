import type { Context } from "hono";
import * as courseModel from "../../../models/course.model.ts";

const fetchCourses = async (c: Context) => {
  try {
    const courses = await courseModel.getCourses();

    return c.json(
      {
        success: true,
        data: courses,
        msg: `successful`,
      },
      200
    );
  } catch (error) {
    console.error("Error fetching courses:", error);
    return c.json({
      success: false,
      message: "Failed to fetch courses",
    });
  }
};

export { fetchCourses };
