import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from "@/hooks/useAuthContext";

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <Avatar className="w-15 h-15">
      <AvatarImage src={user?.img_url} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default Profile;
