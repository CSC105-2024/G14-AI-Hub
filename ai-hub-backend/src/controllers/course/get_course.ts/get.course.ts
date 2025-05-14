import type { Context } from "hono";
import * as courseModel from "../../../models/course.model.ts";

async function fetchCourses(c: Context) {
  try {
    const userId = c.get("id");
    const courses = await courseModel.getCourses(userId);

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
}

export { fetchCourses };
