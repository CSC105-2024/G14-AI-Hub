import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GitHub from "../../assets/GitHub.png";

const Footer = () => {
  return (
    <footer>
      <div className="flex ml-10 text-sm font-bold mt-8 ">
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
          <div className="flex flex-row gap-1.5">
            <Avatar>
              <AvatarImage src={GitHub} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>{" "}
            <button className="hover:text-[var(--primary-color)]">
              GitHub
            </button>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-500 mt-5 flex justify-center">
        Copyright © 2025 by AI HUB, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
