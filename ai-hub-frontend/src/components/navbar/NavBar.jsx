import React from "react";
import logo from "../../assets/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useWidth } from "@/hooks/useWidth";

const NavBar = ({ activePage }) => {
  const { user } = useAuthContext();
  const { width } = useWidth();

  return (
    <nav className={`flex flex-row justify-between px-2 py-3`}>
      <div>
        <img src={logo} alt="Error" className="md:w-20 w-10" />
      </div>

      {width > 768 ? (
        <>
          <div className="font-bold text-md flex items-center">
            Contribute the AI knowledge with AI Hub!
          </div>
          <div
            className={`mr-2 flex items-center text-center ${
              activePage !== "setting" ? "flex-col" : ""
            }`}
          >
            <Avatar
              className={`h-auto w-13 ${
                activePage === "setting" ? "hidden" : ""
              }`}
            >
              <AvatarImage src={user.img_url} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="font-bold text-xl">{user.role}</div>
          </div>
        </>
      ) : (
        <h2 className="text-[var(--primary-color)] text-2xl font-bold flex items-center">
          AI HUB
        </h2>
      )}
    </nav>
  );
};

export default NavBar;
