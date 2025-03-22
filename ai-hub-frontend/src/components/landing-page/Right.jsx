import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Right = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white lg:col-span-2 flex flex-col justify-around sm:justify-between">
      <div className="flex justify-end">
        <img
          className="hidden md:block mr-10 mt-7 mb-35 w-24"
          src="/Logo.png"
        />
      </div>
      <div className="flex justify-center flex-col items-center text-center text-lg p-4">
        <p>Please log in or sign up to get access to the course.</p>
        <div className="flex gap-4 mt-4">
          <Button
            btn={"Login"}
            variant={"secondary"}
            onClick={() => {
              navigate("/login");
            }}
          />
          <Button
            btn={"Sign up"}
            onClick={() => {
              navigate("/signup");
            }}
          />
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <img className="w-2xs" src=".\src\assets\robot.png" />
      </div>
    </div>
  );
};

export default Right;
