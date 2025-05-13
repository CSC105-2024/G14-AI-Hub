import { PrismaClient } from '@prisma/client';
import type { Context } from 'hono';

const prisma = new PrismaClient();

// Delete a course
const deleteCourse = async (c: Context) => {
  try {
    const id = c.req.param('id');
    const userId = c.get('userId');
    
    // Check if course exists and belongs to user
    const existingCourse = await prisma.course.findUnique({     
      where: {
        id: parseInt(id),
        user_id: userId
      }
    });
    
    if (!existingCourse) {
      return c.json({ message: 'Course not found or unauthorized' }, 404);
    }
    
    await prisma.course.delete({
      where: {
        id: parseInt(id)
      }
    });
    
    return c.json({ message: 'Course deleted successfully' }, 200);   
  } catch (error) {
    console.error('Error deleting course:', error);
    return c.json({ message: 'Failed to delete course' }, 500);
  }
};

export { deleteCourse };