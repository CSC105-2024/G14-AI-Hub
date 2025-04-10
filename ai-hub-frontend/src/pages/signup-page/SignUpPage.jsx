import React from "react";
import Left from "@/components/signup-page/Left";
import Right from "@/components/signup-page/Right";

const SignUpPage = () => {
  return (
    <div className="grid  md:grid-cols-3 grid-cols-1">
      <Left />
      <Right />
    </div>
  );
};

export default SignUpPage;
