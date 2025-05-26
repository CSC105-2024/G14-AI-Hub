import type { Context } from "hono";
import * as courseModel from "../../../models/course.model.ts";
import { cloudinary } from "../../../cloudinary/cloudinary.ts";

const editCourse = async (c: Context) => {
  try {
    const param = c.req.param('id');
    const courseId = parseInt(param);

    if (isNaN(courseId)) {
      return c.json(
            {
                success: false,
                data: null,
                msg: "Invalid course ID",
            },
            400
        );
    }

    const formData = await c.req.formData();
    const editedFields: any = {};

    const title = formData.get("title");
    if (typeof title === "string") {
      editedFields.title = title;
    }

    const content = formData.get("content");
    if (typeof content === "string") {
        try {
        editedFields.content = JSON.parse(content);
        } catch (error) {
        return c.json(
          {
            success: false,
            data: null,
            msg: "Must be a valid JSON string",
          },
          400
        );
      }
    }

    const note = formData.get("note");
    if (typeof note === "string") {
      editedFields.note = note;
    }

    const images = ["img1", "img2", "img3", "img4"];
    for (const field of images) {
          const imageFile = formData.get(field);
    
          if (typeof imageFile === "string") {
            editedFields[field] = imageFile as string;
            editedFields[`${field}_id`] = null;
          } else if (imageFile instanceof File) {
            const buffer = Buffer.from(await imageFile?.arrayBuffer());
            const base64 = `data:${imageFile?.type};base64,${buffer.toString("base64")}`;

            const result = await cloudinary.uploader.upload(base64, {
              folder: "AI-Hub/Course",
            })
            editedFields[field] = result.secure_url;
            editedFields[`${field}_id`] = result.public_id;
          }
    }

    const editedCourse = await courseModel.editCourse(courseId, editedFields);

    return c.json(
      {
        success: true,
        message: "course edited",
        course: editedCourse,
      },
      200
    );
  }
  catch (e) {
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

export { editCourse };