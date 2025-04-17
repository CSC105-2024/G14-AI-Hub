import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GitHub from "../../assets/GitHub.png";

const Footer = () => {
  return (
    <footer>
      <div className="md:flex md:ml-10 md:text-sm font-bold mt-8 ml-4 text-xs">
        <div>
          <div className="hover:text-[var(--primary-color)]">AI HUB</div>
          <div className="hover:text-[var(--primary-color)]">
            Privacy Policy
          </div>
          <div className="hover:text-[var(--primary-color)]">
            Terms and Conditions
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-1.5 md:mt-0 mt-2">
            <Avatar className={"w-7 h-7"}>
              <AvatarImage src={GitHub} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>{" "}
            <button className="hover:text-[var(--primary-color)]">
              GitHub
            </button>
          </div>
        </div>
      </div>
      <div className="md:text-sm text-gray-500 mt-5 flex justify-center text-xs">
        Copyright © 2025 by AI HUB, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
