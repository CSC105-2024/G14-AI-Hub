import { Prisma } from "@prisma/client/extension";
import { db } from "../index.ts";

const createCourse = async (
  title: string,
  content: any,
  note: string,
  img1: string,
  img1_id: string | null,
  img2: string,
  img2_id: string | null,
  img3: string,
  img3_id: string | null,
  img4: string,
  img4_id: string | null,
  user_id: number,
  created_by: string
) => {
  const course = await db.course.create({
    data: {
      title: title,
      content: content,
      note: note,
      img1: img1,
      img1_id: img1_id,
      img2: img2,
      img2_id: img2_id,
      img3: img3,
      img3_id: img3_id,
      img4: img4,
      img4_id: img4_id,
      user_id: user_id,
      created_by: created_by,
    },
  });
  return course;
};

const getCourses = async () => {
  return db.course.findMany();
};

const deleteAnExistingCourse = async (id: number) => {
  return db.course.delete({
    where: {
      id: id,
    },
  });
};

const editCourse = async (
  title: string,
  content: any,
  note: string,
  img1: string,
  img1_id: string,
  img2: string,
  img2_id: string,
  img3: string,
  img3_id: string,
  img4: string,
  img4_id: string,
  id: number
) => {
  const course = await db.course.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      content: content,
      note: note,
      img1: img1,
      img1_id: img1_id,
      img2: img2,
      img2_id: img2_id,
      img3: img3,
      img3_id: img3_id,
      img4: img4,
      img4_id: img4_id,
    },
  });
  return course;
};

const getCourse = async (id: number, user_id: number) => {
  const course = await db.course.findUnique({
    where: {
      id: id,
      user_id: user_id,
    },
  });

  return course;
};

export {
  createCourse,
  getCourses,
  deleteAnExistingCourse,
  editCourse,
  getCourse,
};
