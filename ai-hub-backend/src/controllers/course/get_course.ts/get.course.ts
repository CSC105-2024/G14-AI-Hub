import type {Context} from "hono";
import { PrismaClient } from '@prisma/client';
import type { Request, Response } from "express";

const prisma = new PrismaClient();


// Get all courses
export const getCourses = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id; // Assuming you have user auth middleware
    
    const courses = await prisma.course.findMany({
      where: {
        user_id: userId
      },
      orderBy: {
        created_at: 'desc'
      }
    });
    
    return res.status(200).json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return res.status(500).json({ message: 'Failed to fetch courses' });
  }
};

// Extend the Request type to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: { id: number };
    }
  }
}


const getCourse = async (c: Context) => {
  const courseId = c.req.param("courseId");   
  console.log(courseId);
  return c.text("success");
};
export {getCourse};

export const getCourseById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const userId = req.user?.id;
      
      const course = await prisma.course.findUnique({
        where: {
          id: parseInt(id),
          user_id: userId
        }
      });
      
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      
      return res.status(200).json(course);
    } catch (error) {
      console.error('Error fetching course:', error);
      return res.status(500).json({ message: 'Failed to fetch course' });
    }
  };

