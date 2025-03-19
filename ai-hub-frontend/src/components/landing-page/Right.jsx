import React from "react";
import { useNavigate } from "react-router-dom";

const Right = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white lg:col-span-2 flex flex-col justify-between">
      <div className="flex justify-end">
        <img className="mr-10 mt-7 mb-35 w-24" src="/Logo.png" />
      </div>
      <div className="flex justify-center flex-col items-center text-center text-lg p-2">
        <p>Please log in or sign up to get access to the course.</p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-white py-1 px-6 rounded-sm border-2 border-solid border-[var(--primary-color)]"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-[var(--primary-color)] text-white py-1 px-6 rounded-sm"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <img className="w-2xs" src=".\src\assets\robot.png" />
      </div>
    </div>
  );
};

export default Right;
