import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";
import { useWidth } from "@/hooks/useWidth";
import Sidebar from "@/components/sidebar/Sidebar";

const items = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "Inbox",
    url: "#",
  },
  {
    title: "Calendar",
    url: "#",
  },
  {
    title: "Search",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
];

const DashBoardLayout = () => {
  const { width } = useWidth();
  console.log(width);

  return (
    <>
      {width > 768 ? (
        <>
          <NavBar />
        </>
      ) : (
        <Sidebar />
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default DashBoardLayout;
