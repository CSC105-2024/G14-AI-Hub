import CourseForm from "@/components/course-form/CourseForm";
import React from "react";

const CreatePage = () => {
  return (
    <div className="bg-black h-270">
      <CourseForm mode={"create"} />
    </div>
  );
};

export default CreatePage;
