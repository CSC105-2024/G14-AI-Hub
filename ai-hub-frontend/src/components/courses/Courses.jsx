import React from "react";
import { useNavigate } from "react-router-dom";

const Courses = ({ course, index }) => {
  const navigate = useNavigate();

  const redirect = (id) => {
    navigate(`/dashboard/course/${id}`); //TODO: not static
  };

  return (
    <div
      className="bg-white max-w-80 md:w-auto rounded-2xl flex item-center md:flex-col border-2 border-black overflow-hidden hover:border-[var(--primary-color)] md:p-0 h-30 md:h-75 cursor-pointer"
      id={index}
      onClick={() => redirect(course.id)}
    >
      <img src={course.img1} className="md:w-full h-full w-[35%]" />

      <h2 className="text-center text-xl md:w-auto md:h-20 w-[80%] p-3 font-bold  flex justify-center items-center border-t-1 border-black">
        {course.title}
      </h2>
    </div>
  );
};

export default Courses;
