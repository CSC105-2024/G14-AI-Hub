import React from "react";
import Left from "../../components/login-page/Left";
import Right from "../../components/login-page/Right";

const LoginPage = () => {
  return (
    <>
      <div className="min-h-screen grid lg:grid-cols-2">
        <Left />
        <Right />
      </div>
    </>
  );
};

export default LoginPage;
