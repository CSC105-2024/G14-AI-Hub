import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import TextEditor from "./TextEditor";

const CourseForm = () => {
  return (
    <div className="text-white w-[90%] mx-auto">
      <div className="font-bold flex justify-end text-xl">
        <Link to={"/courses"} className="mt-10">
          To Course Overview
        </Link>
      </div>
      <div className="flex items-center flex-col">
        <h1>Course Name</h1>
        <Input
          type="text"
          placeholder="Course"
          className={"bg-white text-black w-90"}
        />
      </div>
      <div className="flex flex-row gap-7 h-[521px] bg-black">
        <div className=" w-1/2 bg-red-500 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          eaque iste optio odit eos. Quis optio numquam natus dolor iusto nobis,
          culpa doloribus modi sapiente voluptatibus amet dolores labore
          perferendis.
        </div>
        <div className="w-1/2 p-10 bg-white  overflow-y-auto">
          <h1 className="font-bold text-xl text-black">Content</h1>
          <TextEditor />
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
