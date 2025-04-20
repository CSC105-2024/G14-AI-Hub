import React from "react";
import { GiCancel } from "react-icons/gi";

const ImgLists = ({ data, index, setFile }) => {
  const handleDelete = (index) => {
    setFile((files) => files.filter((f, i) => i !== index));
  };

  return (
    <div
      className="border p-2 rounded-2xl gap-50 border-gray-100 mb-3 flex items-center justify-around"
      id={index}
    >
      <div className="flex gap-3 items-center w-60">
        <img src={data.url} alt="no img" className="text-black h-10" />
        <div>
          <div>{data.name}</div>
          <div className="text-gray-500">{data.size}KB</div>
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
