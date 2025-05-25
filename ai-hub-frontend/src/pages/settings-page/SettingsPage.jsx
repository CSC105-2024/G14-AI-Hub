import AlertBox from "@/components/alert-box/AlertBox";
import EditProfile from "@/components/edit-profile/EditProfile";
import ErrorBox from "@/components/error-box/ErrorBox";
import NavBar from "@/components/navbar/NavBar";
import { Input } from "@/components/ui/input";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useEdit } from "@/hooks/useEdit";
import { useLogout } from "@/hooks/useLogout";
import { useWidth } from "@/hooks/useWidth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SettingsPage = () => {
  const { user } = useAuthContext();
  const { width } = useWidth();

  const { logout, logoutError, setLogtoutError } = useLogout();
  const { edit, editError, setEditError } = useEdit();
  const [showPassword, setShowPassword] = useState(false);

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

  const onEditInfo = async () => {
    await edit(
      form.name,
      form.email,
      form.oldPassword,
      form.newPassword,
      user.name,
      user.email
    );
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
            type="password"
            placeholder="Previous password"
            className={"bg-white text-black max-w-90"}
            onChange={(e) => setForm({ ...form, oldPassword: e.target.value })}
          />
          <h2 className="font-bold text-xl cursor-pointer">New Password</h2>

          <div className="relative w-80">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="New password"
              className="bg-white text-black w-full pr-10 hover:text-[var(--primary-color)]"
              onChange={(e) =>
                setForm({ ...form, newPassword: e.target.value })
              }
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-[var(--primary-color)]"
              onClick={() => setShowPassword((s) => !s)}
            />
          </div>

          <div className="buttons mt-5 flex justify-center gap-5 w-full">
            <AlertBox
              btnName={"Save Changes"}
              css={
                "w-35 bg-white text-black text-md hover:text-[var(--primary-color)] hover:bg-white"
              }
              title={"Are you sure you want to update your profile?"}
              onClick={onEditInfo}
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
      {(editError || logoutError) && (
        <ErrorBox
          setError={editError ? setEditError : setLogtoutError}
          title={"Error"}
          description={editError ? editError : logoutError}
        />
      )}
    </>
  );
};

export default SettingsPage;
