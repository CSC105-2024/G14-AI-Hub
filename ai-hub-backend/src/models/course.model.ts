import type { InputJsonValue } from "@prisma/client/runtime/library";
import { db } from "../index.ts";

const createCouse = async (
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

) => {
    const course = await db.course.create({
        data: {
            title: title,
            content: content,
            note: note,
            img1: "imageurl",
            img1_id: "imageid",
            img2: "imageurl",
            img2_id: "imageid",
            img3: "imageurl",
            img3_id: "imageid",
            img4: "imageurl",
            img4_id: "imageid",
            user_id: 2,
        }
    })
    return course;
}

export { createCouse }