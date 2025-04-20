import React from "react";
import { GiCancel } from "react-icons/gi";

const ImgLists = ({ data }) => {
  console.log(data.name);
  return (
    <div className="border p-2 rounded-2xl border-gray-100 mb-3 flex gap-3 items-center">
      <div>
        <img src={data.url} alt="no img" className="text-black h-10" />
      </div>
      <div>
        <div>{data.name}</div>
        <div className="text-gray-500">{data.size}KB</div>
      </div>
      <div>
        <button>
          <GiCancel />
        </button>
      </div>
    </div>
  );
};

export default ImgLists;
