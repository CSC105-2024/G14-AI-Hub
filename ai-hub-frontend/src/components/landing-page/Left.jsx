import React from "react";

const Left = () => {
  return (
    <div className="bg-[var(--primary-color)] flex flex-col justify-start items-center p-4 text-white">
      <h2 className="mb-20 md:mb-40 mt-20 font-bold  text-3xl">
        Welcome to AI Hub!
      </h2>
      <div className="p-3">
        <p className="text-center text-lg">
          AI Hub is an e-learning website designed to provide users with
          accessible learning experiences. This website will offer courses that
          are based on the basic concepts of AI.
        </p>
      </div>
    </div>
  );
};

export default Left;
