import type {Context} from "hono";
import { PrismaClient } from '@prisma/client';
import type { Request, Response } from "express";

const prisma = new PrismaClient();
// Delete a course
export const deleteCourse = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const userId = req.user?.id;
      
      // Check if course exists and belongs to user
      const existingCourse = await prisma.course.findUnique({
        where: {
          id: parseInt(id),
          user_id: userId
        }
      });
      
      if (!existingCourse) {
        return res.status(404).json({ message: 'Course not found or unauthorized' });
      }
      
      await prisma.course.delete({
        where: {
          id: parseInt(id)
        }
      });
      
      return res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
      console.error('Error deleting course:', error);
      return res.status(500).json({ message: 'Failed to delete course' });
    }
  };