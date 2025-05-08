import type { Context } from "hono";
import * as courseModel from "../../../models/course.model.ts"
import { cloudinary } from "../../../cloudinary/cloudinary.ts";

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

    const images = ["img1", "img2", "img3", "img4"];
    const uploadedImages: {url: string, id: string}[] = [];

    for (const field of images) {
      const imageFile = formData.get(field);

      if (!(imageFile instanceof File)) {
        throw new Error(`Expected a ${field} File, but got something else`);
      }

      const buffer = Buffer.from(await imageFile?.arrayBuffer());
      const base64 = `data:${imageFile?.type};base64,${buffer.toString("base64")}`;

      const result = await cloudinary.uploader.upload(base64, {
        folder: "AI-Hub/Course",
      });

      uploadedImages.push({
        url: result.secure_url,
        id: result.public_id,
      })
    }

    const newCourse = await courseModel.createCourse(title,content,note,uploadedImages[0].url,uploadedImages[0].id, uploadedImages[1].url,uploadedImages[1].id, uploadedImages[2].url,uploadedImages[2].id, uploadedImages[3].url,uploadedImages[3].id)

    return c.json ({
      message: "course created",
      course: newCourse,
    })
  } catch (e) {
    return c.json(
      {
          success: false,
          data: null,
          msg: e instanceof Error ? e.message : "An unexpected error occurred",
      },
      500
  );
  }
}

export { createCourse };