import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const EditProfile = ({ img_url }) => {
  //will add custom hook

  return (
    <>
      <div className="relative w-24 h-24 md:mt-0 mt-10 ">
        <Avatar className="w-full h-full">
          <AvatarImage src={img_url} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <label htmlFor="avatarUpload">
          <FontAwesomeIcon
            icon={faPen}
            className="absolute bottom-1 right-1 bg-white p-2 rounded-full text-gray-600 text-xs shadow hover:bg-black hover:text-white cursor-pointer"
          />
        </label>
        <input
          type="file"
          id="avatarUpload"
          className="hidden"
          onChange={(e) => console.log(e.target.files[0])}
        />
      </div>
    </>
  );
};

export default EditProfile;
