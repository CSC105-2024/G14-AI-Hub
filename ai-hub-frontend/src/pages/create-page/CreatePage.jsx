import CourseForm from "@/components/course-form/CourseForm";
import React from "react";
import { Toaster } from "sonner";

const CreatePage = () => {
  return (
    <div className="bg-black md:h-270">
      <CourseForm mode={"create"} />
      <Toaster richColors />
    </div>
  );
};

export default CreatePage;
