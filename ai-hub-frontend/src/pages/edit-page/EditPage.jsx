import React, { useEffect, useState } from "react";
import CourseForm from "@/components/course-form/CourseForm";
import { courses } from "@/services/data";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const id = useParams();
  const [form, setForm] = useState(courses[0]);

  return (
    <div className="bg-black md:h-270 ">
      <CourseForm mode={"edit"} oldForm={form} />
    </div>
  );
};

export default EditPage;
