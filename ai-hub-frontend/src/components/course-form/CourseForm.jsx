import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import TextEditor from "./TextEditor";
import UploadImage from "./UploadImage";
import { Button } from "../ui/button";
import ErrorBox from "../error-box/ErrorBox";
import { useCreate } from "@/hooks/useCreate";
import { useEdit } from "@/hooks/useEdit";

const CourseForm = ({ mode, oldForm }) => {
  //main data
  //TODO: need to do imgs and content
  const [form, setForm] = useState({
    title: oldForm?.title || "",
    imgs: "",
    content: "",
    note: oldForm?.note || "",
  });

  const { create, formError, setFormError } = useCreate();
  const { edit, editError, setEditError } = useEdit();

  console.log(form);

  const onSubmit = async () => {
    //create
    if (oldForm) {
      await edit(form, oldForm);
    } else {
      await create(form);
    }
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
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            value={form.title}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-7 md:h-[560px] 2xl:h-[650px] bg-black">
          <div className=" p-10 bg-white rounded-2xl overflow-y-auto">
            <UploadImage setForm={setForm} length={4} />
          </div>
          <div className=" p-10 bg-white rounded-2xl overflow-y-auto">
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
            className={"bg-[var(--primary-color)] hover:bg-violet-800 p-6 mb-5"}
            onClick={onSubmit}
          >
            {mode === "create" ? "Create Course" : "Save Changes"}
          </Button>
        </div>
      </div>
      {formError && (
        <ErrorBox
          setError={formError ? setFormError : setEditError}
          description={formError ? formError : editError}
          title={mode === "create" ? "Create a New Course" : "Edit a Course"}
        />
      )}
    </>
  );
};

export default CourseForm;
