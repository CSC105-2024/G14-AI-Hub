import React, { useEffect, useState } from "react";
import CourseForm from "@/components/course-form/CourseForm";
import { useParams } from "react-router-dom";
import { useDataContext } from "@/hooks/useDataContext";
import Loading from "@/components/loading/Loading";

const EditPage = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const { data } = useDataContext();

  useEffect(() => {
    setForm(data?.find((d) => d.id === Number(id)));
  }, [data]);

  if (!data) return <Loading />;

  return (
    <div className="bg-black md:h-270 ">
      <CourseForm mode={"edit"} oldForm={form} />
    </div>
  );
};

export default EditPage;
