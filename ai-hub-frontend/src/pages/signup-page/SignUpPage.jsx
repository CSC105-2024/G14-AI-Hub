import React from "react";
import Left from "@/components/signup-page/Left";
import Right from "@/components/signup-page/Right";
import { Toaster } from "sonner";

const SignUpPage = () => {
  return (
    <>
      <div className="grid  md:grid-cols-3 grid-cols-1">
        <Left />
        <Right />
      </div>
      <Toaster richColors />
    </>
  );
};

export default SignUpPage;
