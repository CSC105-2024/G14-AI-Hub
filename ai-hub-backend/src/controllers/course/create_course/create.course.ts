import type { Context } from "hono";
import * as courseModel from "../../../models/course.model.ts"

// const createCourse = async (c: Context) => {
//   const formData = await c.req.formData();

//   //example
//   const name = formData.get("name");
//   console.log(name);

//   const files = formData.getAll("file");

//   console.log(files);
//   return c.text("success");
// };

// export { createCourse };

const createCourse = async (c: Context) => {
  try {
    const formData = await c.req.formData();

    const title = formData.get("title");
    const content = formData.get("content");
    const note = formData.get("note");

    if (typeof title !== "string" || typeof note !== "string" || typeof content !== "string" ) {
      return c.json(
        {
            success: false,
            data: null,
            msg: "Missing required field and must be a string",
        },
        400
      )
    }
    
    let parsedContent;
    try {
      parsedContent = JSON.parse(content);
    } catch (error) {
      return c.json(
        {
            success: false,
            data: null,
            msg: "Must be a valid JSON string",
        },
        400
      )
    }

    const newCourse = await courseModel.createCouse(title,content,note);

    return c.json ({
      message: "course created",
      course: newCourse,
    })
  } catch (e) {
    return c.json(
      {
          success: false,
          data: null,
          msg: `${e}`,
      },
      500
  );
  }
}

export { createCourse };