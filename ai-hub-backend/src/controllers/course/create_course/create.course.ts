import type { Context } from "hono";
import * as courseModel from "../../../models/course.model.ts";
import { cloudinary } from "../../../cloudinary/cloudinary.ts";
import { findInfo } from "../../../models/user.model.ts";

const createCourse = async (c: Context) => {
  try {
    const formData = await c.req.formData();

    const title = formData.get("title");
    const content = formData.get("content");
    const note = formData.get("note");
    const id = c.get("id");
    const user = await findInfo(id);
    const userName = user?.name;

    if (
      typeof title !== "string" ||
      typeof content !== "string" ||
      typeof userName !== "string" ||
      typeof note !== "string"
    ) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required field and must be a string",
        },
        400
      );
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
      );
    }

    const images = ["img1", "img2", "img3", "img4"];
    const uploadedImages: { url: string; id: string }[] = [];

    for (const field of images) {
      const imageFile = formData.get(field);

      if (!(imageFile instanceof File)) {
        return c.json(
          {
            success: false,
            msg: `Missing or invalid image for ${field}`,
            data: null,
          },
          400
        );
      }

      const buffer = Buffer.from(await imageFile?.arrayBuffer());
      const base64 = `data:${imageFile?.type};base64,${buffer.toString(
        "base64"
      )}`;

      const result = await cloudinary.uploader.upload(base64, {
        folder: "AI-Hub/Course",
      });

      uploadedImages.push({
        url: result.secure_url,
        id: result.public_id,
      });
    }

    const newCourse = await courseModel.createCourse(
      title,
      parsedContent,
      note,
      uploadedImages[0].url,
      uploadedImages[0].id,
      uploadedImages[1].url,
      uploadedImages[1].id,
      uploadedImages[2].url,
      uploadedImages[2].id,
      uploadedImages[3].url,
      uploadedImages[3].id,
      id,
      userName
    );

    return c.json(
      {
        success: true,
        message: "course created",
        course: newCourse,
      },
      200
    );
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
};

export { createCourse };
