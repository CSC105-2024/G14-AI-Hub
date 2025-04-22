import React, { useEffect, useRef, useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { Button } from "../ui/button";
import ImgLists from "./ImgLists";
import { RxCross2 } from "react-icons/rx";

const UploadImage = ({ setForm, length }) => {
  const [files, setFile] = useState([]);
  const [url, setUrl] = useState(null);

  const ref = useRef(null);

  //will update everytime uploads an img
  useEffect(() => {
    setForm((f) => ({ ...f, imgs: files }));
  }, [files]);

  const focus = () => {
    ref.current.focus();
  };

  const handleFileChange = (e, type) => {
    let file;
    if (type !== "url") {
      file = e.target.files[0];
    } else {
      file = e;
    }

    let datas;

    if (type !== "url") {
      datas = {
        url: URL.createObjectURL(file), //temp url
        name: file.name.split(" ")[0],
        size: (file.size / 1024).toFixed(0), //KB
        originalURL: file.name,
        local: true,
      };
    } else {
      datas = {
        url: file,
        name: "Img Url",
        size: 0, //KB
        originalURL: file,
        local: false,
      };
    }

    setFile((f) => [...f, datas]);
  };
  return (
    <div className="text-black">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl text-black">Upload Images</h1>
        {/* TODO: need to add onClick */}
        {length === 1 && (
          <button>
            <RxCross2 className="text-xl" />
          </button>
        )}
      </div>
      <div className="text-gray-400 ">
        Add your documents here, and you have to upload 3 files
      </div>
      <div className=" border-[var(--primary-color)] border-2 border-dashed mt-5 rounded-xl p-10 2xl:p-20">
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
                if (files.length < length) {
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
      <div className="border p-3 bg-gray-100 rounded-2xl border-white mb-5 flex justify-between 2xl:px-10 px-5">
        <input
          type="text"
          value={url}
          className="w-[80%] focus:ring-0 focus:outline-none "
          onChange={(e) => setUrl(e.target.value)}
          ref={ref}
          placeholder="URL"
        />
        <Button
          className={"bg-[var(--primary-color)] hover:bg-violet-900"}
          onClick={
            !url
              ? focus
              : () => {
                  if (files.length < length) {
                    handleFileChange(url, "url");
                    setUrl("");
                  }
                }
          }
        >
          Upload
        </Button>
      </div>

      {files.map((d, i) => (
        <ImgLists key={i} data={d} index={i} setFile={setFile} />
      ))}
    </div>
  );
};

export default UploadImage;
