import React from "react";
import { MdOutlineCloudUpload } from "react-icons/md";

const UploadImage = () => {
  return (
    <div className="text-black">
      <div className="text-gray-400 ">
        Add your documents here, and you have to upload 3 files
      </div>
      <div className=" border-[var(--primary-color)] border-2 border-dashed mt-5 rounded-xl">
        <label className="cursor-pointer text-center text-gray-700 p-10">
          {/* Custom placeholder text */}
          <MdOutlineCloudUpload className="text-4xl text-[var(--primary-color)] mx-auto" />
          <div className="text-sm">
            {"Drag your file(s) or"}{" "}
            <span className="text-[var(--primary-color)] font-bold">
              browse
            </span>
            <input type="file" className="hidden" />
            <div className="text-gray-700 mt-3">
              Max 10 MB files are allowed
            </div>
          </div>
        </label>
      </div>
      <div>Only support .jpg</div>
    </div>
  );
};

export default UploadImage;
