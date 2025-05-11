import AlertBox from "@/components/alert-box/AlertBox";
import EditProfile from "@/components/edit-profile/EditProfile";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { Input } from "@/components/ui/input";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useLogout } from "@/hooks/useLogout";
import { useWidth } from "@/hooks/useWidth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

const SettingsPage = () => {
  const { user } = useAuthContext();
  const { width } = useWidth();

  const { logout, logoutError, setLogtoutError } = useLogout();

  //useState renders first before useEffect
  const [form, setForm] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        name: user.name,
        email: user.email,
      }));
    }
  }, [user]);

  const onClick = async () => {
    await logout();
  };

  return (
    <>
      <NavBar activePage={"setting"} />
      <div className="bg-black md:h-200 h-180 flex flex-col items-center text-white ">
        {width > 768 && (
          <div className="font-bold self-end text-xl mr-10 mt-10 mb-15">
            <Link
              to={"/courses"}
              className="mt-10 hover:text-[var(--primary-color)] "
            >
              To Course Overview
            </Link>
          </div>
        )}

        <EditProfile img_url={user?.img_url} />

        <div className="bg-black flex flex-col items-start gap-2 justify-center mt-10">
          <h1 className="font-bold text-2xl self-center cursor-pointer">
            Edit Your Account
          </h1>
          <h2 className="font-bold text-xl cursor-pointer">Username</h2>
          <Input
            type="text"
            value={form.name}
            placeholder="Username"
            className={"bg-white text-black max-w-90"}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <h2 className="font-bold text-xl cursor-pointer">Email</h2>
          <Input
            type="text"
            placeholder="Email"
            value={form.email}
            className={"bg-white text-black max-w-90"}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <h2 className="font-bold text-xl cursor-pointer">Password</h2>
          <Input
            type="text"
            placeholder="Previous password"
            className={"bg-white text-black max-w-90"}
            onChange={(e) => setForm({ ...form, oldPassword: e.target.value })}
          />
          <h2 className="font-bold text-xl cursor-pointer">New Password</h2>
          <Input
            type="text"
            placeholder="New password"
            className={
              "bg-white text-black max-w-90 hover:text-[var(--primary-color)]"
            }
            onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
          />
          <div className="buttons mt-5 flex justify-center gap-5 w-full">
            <AlertBox
              btnName={"Save Changes"}
              css={
                "w-35 bg-white text-black text-md hover:text-[var(--primary-color)] hover:bg-white"
              }
              title={"Are you sure you want to update your profile?"}
            />
            <AlertBox
              btnName={"Log out"}
              css={
                "w-35 bg-[var(--primary-color)]  text-white text-md hover:bg-[#4D179A]"
              }
              title={"Are you sure you want to log out?"}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
      <Footer />
      <Toaster richColors />
    </>
  );
};

export default SettingsPage;
