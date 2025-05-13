import type { Context } from "hono";

async  function deleteCourse(c: Context) {
    try {
      const id = parseInt(c.req.param('id'));
      const userId = c.get('id');
      
      if (isNaN(id)) {
        return c.json({
            success: false,
             message: 'Invalid course ID' 
        });
      }
    }
   
    catch (error) {
        console.error('Error deleting course:', error);
        return c.json({ 
            success: false,
            message: 'Failed to delete course' 
        });
        }
}
export { deleteCourse } 
