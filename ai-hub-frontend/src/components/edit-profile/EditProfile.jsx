import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useUploadProfile } from "@/hooks/useUploadProfile";
import { toast } from "sonner";
import ErrorBox from "../error-box/ErrorBox";

const EditProfile = ({ img_url }) => {
  //will add custom hook
  const { uploadProfile, profileError, setProfileError } = useUploadProfile();

  const onUpload = async (e) => {
    const promise = async () => {
      return await uploadProfile(e.target.files[0]);
    };

    toast.promise(promise(), {
      //promise not func that's why
      loading: "Uploading...",
      success: (data) => {
        return `Your profile has been changed`;
      },
      error: "Error",
    });
  };

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
          onChange={(e) => onUpload(e)}
        />
      </div>
      {profileError && (
        <ErrorBox
          setError={setProfileError}
          title={"Error"}
          description={profileError}
        />
      )}
    </>
  );
};

export default EditProfile;
