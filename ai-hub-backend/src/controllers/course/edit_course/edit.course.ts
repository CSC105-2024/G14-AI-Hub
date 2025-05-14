import type { Context } from 'hono';
import * as courseModel from "../../../models/course.model.ts"
 
async function editCourse(c: Context) {
    try {
        const { id, title, content, note, img1, img1_id, img2, img2_id, img3, img3_id, img4, img4_id } = await c.req.json();
        const userId = c.get('id');
        const updatedCourse = await courseModel.editCourse(id, title, content, note, img1, img1_id, img2, img2_id, img3, img3_id, img4, img4_id);
        return c.json(updatedCourse);
    } 
    catch (error) {
        console.error('Error editing course:', error);
        return c.json({ 
            success: false,
            message: 'Failed to edit course' 
        });
    }
}
export { editCourse };

