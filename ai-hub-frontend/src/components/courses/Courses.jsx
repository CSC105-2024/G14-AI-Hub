import React from "react";
import { useNavigate } from "react-router-dom";

const Courses = ({ course, index }) => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/dashboard/course/1"); //TODO: not static
  };

  return (
    <div
      className="bg-white max-w-80 md:w-auto rounded-2xl flex item-center md:flex-col border-2 border-black overflow-hidden hover:border-[var(--primary-color)] md:p-0 h-30 md:h-75 "
      id={index}
      onClick={redirect}
    >
      <img src={course.imgUrl} className="md:h-50 md:w-full h-full w-[35%]" />
      <h2 className="text-center text-xl md:w-auto md:h-full w-[80%] p-3 font-bold  flex justify-center items-center ">
        {course.title}
      </h2>
    </div>
  );
};

export default Courses;
