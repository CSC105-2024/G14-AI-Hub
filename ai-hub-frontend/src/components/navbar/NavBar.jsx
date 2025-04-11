import React from "react";
import logo from "../../assets/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between mb-5">
      <div>
        <img src={logo} alt="Error" className="w-20" />
      </div>
      <div className="font-bold text-md flex items-center">
        Contribute the AI knowledge with AI Hub!
      </div>
      <div className="mr-2">
        {/* will also implement conditional rendering */}
        <Avatar className={"h-auto w-13"}>
          <AvatarImage src={logo} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>Teacher</div>
      </div>
    </nav>
  );
};

export default NavBar;
