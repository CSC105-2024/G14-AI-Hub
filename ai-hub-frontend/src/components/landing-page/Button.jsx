import React from "react";

const Button = ({ btn, onClick, variant = "primary" }) => {
  const variants = {
    primary: "bg-[var(--primary-color)] text-white hover:bg-violet-900",
    secondary:
      "border-[var(--primary-color)] text-black hover:bg-gray-200 hover:text-[var(--primary-color)]",
  };

  return (
    <button
      onClick={onClick}
      className={`font-bold border-1 rounded-lg min-w-30 py-2 ${variants[variant]} cursor-pointer transition-all duration-200 `}
    >
      {btn}
    </button>
  );
};

export default Button;
