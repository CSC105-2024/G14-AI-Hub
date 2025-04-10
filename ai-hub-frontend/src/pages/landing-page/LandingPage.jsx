import Left from "@/components/landing-page/Left";
import Right from "@/components/landing-page/Right";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen grid md:grid-cols-2 lg:grid-cols-3">
        <Left />
        <Right />
      </div>
    </>
  );
};

export default LandingPage;
