import React from "react";
import hiBot from "../../assets/hiBot.png";

const Right = () => {
  return (
    <div className="flex justify-center items-center md:h-full h-0">
      <div className="md:border-l md:border-black md:h-180 flex flex-col justify-center w-auto">
        <img src={hiBot} alt="img error" className="w-90" />
      </div>
    </div>
  );
};

export default Right;
