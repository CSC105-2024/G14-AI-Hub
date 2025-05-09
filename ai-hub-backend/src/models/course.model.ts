import type { InputJsonValue } from "@prisma/client/runtime/library";
import { db } from "../index.ts";

const createCourse = async (
    title: string,
    content: InputJsonValue,
    note: string,
    img1: string,
    img1_id: string,
    img2: string,
    img2_id: string,
    img3: string,
    img3_id: string,
    img4: string,
    img4_id: string,
    user_id: number,

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
        }
    })
    return course;
}

export { createCourse }