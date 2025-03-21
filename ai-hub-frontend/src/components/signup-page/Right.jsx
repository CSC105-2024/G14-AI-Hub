import React from "react";
import hiBot from "../../assets/hiBot.png";

const Right = () => {
  return (
    <div className="flex justify-center items-center h-full order-1 md:order-2">
      <div className="flex justify-center items-center md:border-l md:border-black md:h-180 w-full sm:w-auto">
        <img src={hiBot} alt="img error" className="md:w-90 w-45" />
      </div>
    </div>
  );
};

export default Right;
