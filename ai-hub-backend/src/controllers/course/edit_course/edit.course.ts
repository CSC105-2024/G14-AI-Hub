import type { Context } from 'hono';
import { CourseModel } from '../models/course.model';
import { ValidationError } from '../utils/errors.ts';
 
 const editCourse = async (c: Context): Promise<void> => {
    try {
      const id = parseInt(c.req.param('id'));
      const userId = c.get('userId');
      const body = await c.req.json();
      
      if (isNaN(id)) {
        return c.json({ message: 'Invalid course ID' }, 400);
      }
      
      
      if (body.title !== undefined && !body.title.trim()) {
        throw new ValidationError('Title cannot be empty');
      }
      
      
      if (body.content !== undefined && typeof body.content !== 'object') {
        throw new ValidationError('Content must be a valid JSON object');
      }
      
      
      const courseExists = await CourseModel.belongsToUser(id, userId);
      
      if (!courseExists) {
        return c.json({ message: 'Course not found or unauthorized' }, 404);
      }
      
      const updatedCourse = await CourseModel.update(id, body);
      
      return c.json({
        message: 'Course updated successfully',
        course: updatedCourse
      }, 200);
    } catch (error) {
      console.error('Error updating course:', error);
      
      if (error instanceof ValidationError) {
        return c.json({ message: error.message }, 400);
      }
      
      
      if (error.code === 'P2025') {
        return c.json({ message: 'Course not found' }, 404);
      }
      
      return c.json({ 
        message: 'Failed to update course',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      }, 500);
    }
  }