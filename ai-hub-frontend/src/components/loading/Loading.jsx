import React from "react";
import { FourSquare } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <FourSquare
        color={[
          "var(--primary-color)",
          "black",
          "var(--primary-color)",
          "black",
        ]}
      />
    </div>
  );
};

export default Loading;
