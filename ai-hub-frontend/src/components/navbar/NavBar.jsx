import React from "react";
import logo from "../../assets/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from "@/hooks/useAuthContext";

const NavBar = ({ activePage }) => {
  const { user } = useAuthContext();

  return (
    <nav
      className={`flex flex-row justify-between px-2 ${
        activePage !== "setting" ? "py-3" : ""
      }`}
    >
      <div>
        <img src={logo} alt="Error" className="w-20" />
      </div>
      <div className="font-bold text-md flex items-center">
        Contribute the AI knowledge with AI Hub!
      </div>
      <div
        className={`mr-2 flex items-center text-center ${
          activePage !== "setting" ? "flex-col" : ""
        }`}
      >
        {activePage !== "setting" && (
          <Avatar className={"h-auto w-13"}>
            <AvatarImage src={user.img_url} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
        <div className="font-bold">{user.role}</div>
      </div>
    </nav>
  );
};

export default NavBar;
