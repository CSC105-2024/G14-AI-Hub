import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="w-1/5 h-screen flex flex-col items-center justify-center text-center gap-3">
        <h1 className="text-6xl font-bold text-gray-500">404</h1>
        <h2 className="text-2xl font-semibold">Page not found!</h2>
        <p className="text-base">
          Sorry, the page you're looking for doesn't exist or has been removed.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="w-35 bg-[var(--primary-color)] text-white text-lg hover:bg-[#4D179A] p-5"
        >
          Go back home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
