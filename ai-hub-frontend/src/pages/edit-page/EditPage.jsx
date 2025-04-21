import React, { useEffect, useState } from "react";
import CourseForm from "@/components/course-form/CourseForm";
import { courses } from "@/services/data";

const EditPage = () => {
  const [form, setForm] = useState();

  console.log(form);

  useEffect(() => {
    //TODO: not static
    setForm(courses[0]);
  }, []);

  return (
    <div className="bg-black md:h-270 ">
      <CourseForm mode={"edit"} oldForm={form} />
    </div>
  );
};

export default EditPage;
