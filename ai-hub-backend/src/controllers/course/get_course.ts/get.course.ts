import { PrismaClient } from '@prisma/client';
import type { Context } from 'hono';

const prisma = new PrismaClient();

// Get all courses
export const getCourses = async (c: Context) => {
  try {
    const userId = c.get('userId'); // Assuming you set userId in auth middleware
    
    const courses = await prisma.course.findMany({
      where: {
        user_id: userId
      },
      orderBy: {
        created_at: 'desc'
      }
    });
    
    return c.json(courses, 200);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return c.json({ message: 'Failed to fetch courses' }, 500);
  }
};

// Get a single course by ID
export const getCourseById = async (c: Context) => {
  try {
    const id = c.req.param('id');
    const userId = c.get('userId');
    
    const course = await prisma.course.findUnique({
      where: {
        id: parseInt(id),
        user_id: userId
      }
    });
    
    if (!course) {
      return c.json({ message: 'Course not found' }, 404);
    }
    
    return c.json(course, 200);
  } catch (error) {
    console.error('Error fetching course:', error);
    return c.json({ message: 'Failed to fetch course' }, 500);
  }
};