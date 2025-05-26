import React from "react";
import { GiCancel } from "react-icons/gi";

const ImgLists = ({ data, index, setFile, mode }) => {
  const handleDelete = (index) => {
    setFile((files) => files.filter((f, i) => i !== index));
  };

  return (
    <div
      className="border rounded-2xl gap-50 border-gray-100 mb-3 flex items-center justify-between h-15 px-4 2xl:px-6"
      id={index}
    >
      <div className="flex gap-3 items-center w-60">
        <img src={data.url} alt="no img" className="text-black h-10 w-16" />
        <div>
          <div>{data.name}</div>
          {data.size !== 0 && mode !== "edit" ? (
            <div className="text-gray-500">{data.size}KB</div>
          ) : (
            <div className="text-gray-500">.....</div>
          )}
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            handleDelete(index);
          }}
        >
          <GiCancel className="text-gray-600 text-xl hover:text-[var(--primary-color)]" />
        </button>
      </div>
    </div>
  );
};

export default ImgLists;
