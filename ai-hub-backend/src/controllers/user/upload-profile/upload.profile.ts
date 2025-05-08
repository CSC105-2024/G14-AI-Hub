import type { Context } from "hono";
import { cloudinary } from "../../../cloudinary/cloudinary.ts";
import { findImgId, uploadProfileAndId } from "../../../models/user.model.ts";
import type { ImgId } from "../../../types/todo.types.ts";

const uploadProfile = async (c: Context) => {
  const formData = await c.req.formData();

  const id = c.get("id");

  try {
    const img = formData.get("img");

    //to avoid redundancy
    const { img_id } = (await findImgId(id)) as ImgId;
    console.log(img_id);
    if (img_id) {
      await cloudinary.uploader.destroy(img_id);
      console.log("deleted");
    }

    const buffer = Buffer.from(await img?.arrayBuffer());
    const base64 = `data:${img?.type};base64,${buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64, {
      folder: "AI-Hub/Profile",
    });

    const info = await uploadProfileAndId(
      id,
      result.secure_url,
      result.public_id
    );

    return c.json(
      {
        success: true,
        data: info,
        msg: `successful`,
      },
      200
    );
  } catch (error) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${error}`,
      },
      400
    );
  }
};

export { uploadProfile };
