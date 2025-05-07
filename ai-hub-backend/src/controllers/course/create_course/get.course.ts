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
// Create a new course
export const createCourse = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      const { title, note, content, img1, img1_id, img2, img2_id, img3, img3_id, img4, img4_id } = req.body;
      
      // Validate required fields
      if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
      }
      
      const newCourse = await prisma.course.create({
        data: {
          title,
          note: note || '',
          content,
          img1: img1 || '',
          img1_id: img1_id || '',
          img2: img2 || '',
          img2_id: img2_id || '',
          img3: img3 || '',
          img3_id: img3_id || '',
          img4: img4 || '',
          img4_id: img4_id || '',
          user: {
            connect: {
              id: userId
            }
          }
        }
      });
      
      return res.status(201).json(newCourse);
    } catch (error) {
      console.error('Error creating course:', error);
      return res.status(500).json({ message: 'Failed to create course' });
    }
  };
  