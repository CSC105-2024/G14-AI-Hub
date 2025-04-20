import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import TextEditor from "./TextEditor";
import UploadImage from "./UploadImage";

const CourseForm = () => {
  return (
    <div className="text-white w-[90%] mx-auto">
      <div className="font-bold flex justify-end text-xl">
        <Link to={"/courses"} className="mt-10">
          To Course Overview
        </Link>
      </div>
      <div className="flex items-center flex-col mb-7">
        <h1>Course Name</h1>
        <Input
          type="text"
          placeholder="Course"
          className={"bg-white text-black w-90"}
        />
      </div>
      <div className="flex flex-row gap-7 h-[521px] bg-black">
        <div className="w-1/2 p-10 bg-white rounded-3xl overflow-y-auto">
          <h1 className="font-bold text-xl text-black">Upload Images</h1>
          <UploadImage />
        </div>
        <div className="w-1/2 p-10 bg-white rounded-3xl overflow-y-auto">
          <h1 className="font-bold text-xl text-black">Content</h1>
          <TextEditor />
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
