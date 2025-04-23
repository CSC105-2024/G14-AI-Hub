import React from "react";

const Courses = ({ course, index }) => {
  return (
    <div
      className="bg-white  rounded-2xl flex  md:flex-col border-2 border-black overflow-hidden hover:border-[var(--primary-color)]"
      id={index}
    >
      <img src={course.imgUrl} className="md:h-50" />
      <hr className="border-1 border-black" />
      <h2 className="text-center text-xl p-3 font-bold h-20 flex justify-center items-center">
        {course.title}
      </h2>
    </div>
  );
};

export default Courses;
