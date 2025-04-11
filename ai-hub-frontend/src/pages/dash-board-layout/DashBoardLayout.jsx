import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { WindowWidthContext } from "@/context/WindowWidthContext";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  const { width } = useContext(WindowWidthContext);
  console.log(width);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashBoardLayout;
