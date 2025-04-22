import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthContext } from "@/hooks/useAuthContext";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    oldPassword: "",
    newPassword: "",
  });

  return (
    <>
      <div className="bg-black md:h-270 flex flex-col items-center text-white">
        <div className="font-bold self-end text-xl mr-10 mt-10">
          <Link
            to={"/courses"}
            className="mt-10 hover:text-[var(--primary-color)]"
          >
            To Course Overview
          </Link>
        </div>
        <div className="bg-black flex flex-col items-start h-full gap-2 justify-center">
          <h1 className="font-bold text-2xl self-center">Edit Your Account</h1>
          <h2 className="font-bold text-xl">Username</h2>
          <Input
            type="text"
            value={form.name}
            placeholder="Username"
            className={"bg-white text-black w-90"}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <h2 className="font-bold text-xl">Email</h2>
          <Input
            type="text"
            placeholder="Email"
            value={form.email}
            className={"bg-white text-black w-90"}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <h2 className="font-bold text-xl">Password</h2>
          <Input
            type="text"
            placeholder="Previous password"
            className={"bg-white text-black w-90"}
            onChange={(e) => setForm({ ...form, oldPassword: e.target.value })}
          />
          <h2 className="font-bold text-xl">New Password</h2>
          <Input
            type="text"
            placeholder="New password"
            className={
              "bg-white text-black w-90 hover:text-[var(--primary-color)]"
            }
            onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
          />
          <div className="buttons mt-5 flex justify-center gap-5 w-full">
            <Button className="w-35 bg-white text-black text-md hover:text-[var(--primary-color)] hover:bg-[#E5E7EB]">
              Save Changes
            </Button>
            <Button
              className="w-35 bg-[var(--primary-color)]  text-white text-md hover:bg-[#4D179A]"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
