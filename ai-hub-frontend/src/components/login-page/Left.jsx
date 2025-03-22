import React from "react";

const Left = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="md:h-70 md:w-70 w-45 object-contain"
        src="https://www.shutterstock.com/image-vector/chat-bot-icon-design-robot-600nw-2476207303.jpg"
      />
      <div className="md:border-t md:pt-10 ">
        <div className="bg-[var(--primary-color)] flex flex-col justify-center text-white rounded-2xl md:w-120 w-85 p-8 md:mb-10">
          <h1 className="font-bold text-2xl ">Welcome to AI Hub!</h1>
          <hr className="bold w-60 " />
          <p className="font-bold">Sign in to explore more.</p>
        </div>
      </div>
    </div>
  );
};
export default Left;
