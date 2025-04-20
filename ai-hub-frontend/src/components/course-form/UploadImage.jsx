import React, { useRef, useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { Button } from "../ui/button";
import ImgLists from "./ImgLists";
import { size } from "@floating-ui/react";

const UploadImage = () => {
  const [files, setFile] = useState([]);
  const [url, setUrl] = useState(null);

  console.log(files);

  const ref = useRef(null);

  const focus = () => {
    ref.current.focus();
  };

  const handleFileChange = (e) => {
    //Change array
    const files = Array.from(e.target.files);

    const datas = files.map((f) => ({
      url: URL.createObjectURL(f), //temp url
      name: f.name.split(" ")[0],
      size: (f.size / 1024).toFixed(0), //KB
      originalURL: f.name,
    }));

    setFile(datas);
  };
  return (
    <div className="text-black">
      <div className="text-gray-400 ">
        Add your documents here, and you have to upload 3 files
      </div>
      <div className=" border-[var(--primary-color)] border-2 border-dashed mt-5 rounded-xl p-10">
        <label className="cursor-pointer text-center text-gray-700 ">
          {/* Custom placeholder text */}
          <MdOutlineCloudUpload className="text-4xl text-[var(--primary-color)] mx-auto" />
          <div className="text-sm">
            {"Drag your file(s) or"}{" "}
            <span className="text-[var(--primary-color)] font-bold">
              browse
            </span>
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                //files
                if (files.length < 3) {
                  handleFileChange(e);
                }
              }}
            />
            <div className="text-gray-500 mt-3">
              Max 10 MB files are allowed
            </div>
          </div>
        </label>
      </div>
      <div className="mt-3 mb-3 text-gray-500">Only support .jpg</div>
      <div className="flex items-center gap-2 text-gray-500">
        <hr className="w-[47%]" />
        <span className="item-center">OR</span>
        <hr className="w-[47%]" />
      </div>
      <h1 className="font-bold text-xl mb-4 ">Upload From URL</h1>
      <div className="border p-3 bg-gray-100 rounded-2xl border-white mb-5">
        <input
          type="text"
          className="w-[80%] focus:ring-0 focus:outline-none ml-4"
          onChange={(e) => setUrl(e.target.value)}
          ref={ref}
          placeholder="URL"
        />
        <Button
          className={"bg-[var(--primary-color)] hover:bg-violet-800"}
          onClick={!url ? focus : ""}
        >
          Upload
        </Button>
      </div>

      {files.map((d) => (
        <>
          <ImgLists data={d} />
        </>
      ))}
    </div>
  );
};

export default UploadImage;
