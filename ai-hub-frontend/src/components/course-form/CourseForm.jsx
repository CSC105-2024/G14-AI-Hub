import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import TextEditor from "./TextEditor";
import UploadImage from "./UploadImage";
import { Button } from "../ui/button";
import ErrorBox from "../error-box/ErrorBox";
import { useCreate } from "@/hooks/useCreate";

const CourseForm = ({ mode }) => {
  //main data
  const [form, setForm] = useState({
    name: "",
    imgs: "",
    content: "",
    note: "",
  });

  const { create, formError, setFormError } = useCreate();

  const onSubmit = async () => {
    await create(form);
  };

  return (
    <>
      <div className="text-white w-[90%] mx-auto">
        <div className="font-bold flex justify-end text-xl">
          <Link
            to={"/courses"}
            className="mt-10 hover:text-[var(--primary-color)]"
          >
            To Course Overview
          </Link>
        </div>
        <div className="flex items-center flex-col mb-7">
          <h1 className="font-bold text-xl">Course Name</h1>
          <Input
            type="text"
            placeholder="Course"
            className={"bg-white text-black w-90"}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            value={form.name}
          />
        </div>
        <div className="flex flex-row gap-7 h-[550px] bg-black">
          <div className="w-1/2 p-10 bg-white rounded-2xl overflow-y-auto">
            <h1 className="font-bold text-xl text-black">Upload Images</h1>
            <UploadImage setForm={setForm} />
          </div>
          <div className="w-1/2 p-10 bg-white rounded-2xl overflow-y-auto">
            <h1 className="font-bold text-xl text-black">Content</h1>
            <TextEditor setForm={setForm} />
          </div>
        </div>
        <div>
          <h1 className="font-bold mt-3 mb-1">Note</h1>
          <textarea
            placeholder="Note"
            className="bg-white text-black h-25 w-full resize-none p-2 rounded-2xl p-5"
            value={form.note}
            onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
          />
        </div>
        <div className="flex justify-center mt-5">
          <Button
            className={"bg-[var(--primary-color)] hover:bg-violet-800 p-6"}
            onClick={onSubmit}
          >
            {mode === "create" ? "Create Course" : "Save Changes"}
          </Button>
        </div>
      </div>
      {formError && (
        <ErrorBox
          setError={setFormError}
          description={formError}
          title={"Create a New Course"}
        />
      )}
    </>
  );
};

export default CourseForm;
