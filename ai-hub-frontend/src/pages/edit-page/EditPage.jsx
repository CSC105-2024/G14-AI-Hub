import React, { useEffect, useState } from "react";
import CourseForm from "@/components/course-form/CourseForm";
import { useParams } from "react-router-dom";
import { useDataContext } from "@/hooks/useDataContext";

const EditPage = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const { data } = useDataContext();

  useEffect(() => {
    setForm(data?.find((d) => d.id === Number(id)));
  }, [data]);

  return (
    <div className="bg-black md:h-270 ">
      <CourseForm mode={"edit"} oldForm={form} />
    </div>
  );
};

export default EditPage;
