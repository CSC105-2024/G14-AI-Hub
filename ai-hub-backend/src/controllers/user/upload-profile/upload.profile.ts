import type { Context } from "hono";
import { cloudinary } from "../../../cloudinary/cloudinary.ts";

const uploadProfile = async (c: Context) => {
  const formData = await c.req.formData();

  try {
    const img = formData.get("img");

    const buffer = Buffer.from(await img?.arrayBuffer());
    const base64 = `data:${img?.type};base64,${buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64, {
      folder: "AI-Hub/Profile",
    });

    console.log(result.public_id);
    console.log(result.secure_url);

    return c.text("ok");
  } catch (error) {}
};

export { uploadProfile };
