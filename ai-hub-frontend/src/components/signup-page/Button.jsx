import React from "react";

const Button = ({ btn, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <button
        onClick={onClick}
        className="border-1 sm:w-48 w-44 rounded-2xl p-2  border-gray-300 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white font-bold cursor-pointer transition-all duration-200 "
      >
        {btn}
      </button>
    </div>
  );
};

export default Button;
