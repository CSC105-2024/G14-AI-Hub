import type { Context } from "hono";

const createCourse = async (c: Context) => {
  const formData = await c.req.formData();

  //example
  const name = formData.get("name");
  console.log(name);

  const files = formData.getAll("file");

  console.log(files);
  return c.text("success");
};

export { createCourse };
