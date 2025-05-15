import Popup from "@/components/Popup";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useWidth } from "@/hooks/useWidth";
import AlertBox from "@/components/alert-box/AlertBox";
import { useDataContext } from "@/hooks/useDataContext";
import Loading from "@/components/loading/Loading";
import Content from "@/components/content/Content";

//Nadi
const IndividualCourse = () => {
  //params
  const { id } = useParams();

  const { user } = useAuthContext();
  const { width } = useWidth();
  const { data, setData } = useDataContext();

  const [info, setInfo] = useState(null);
  console.log(data);

  useEffect(() => {
    if (data) {
      setInfo(data.find((d) => d.id === Number(id)));
    }
  }, [data]);

  const navigate = useNavigate();

  function confirmDelete() {
    navigate("/");
  }

  function cancelDelete() {
    setShowPopup(false);
  }

  function handleEdit() {
    navigate(`/dashboard/edit/${id}`);
  }

  if (!data) return <Loading />;

  return (
    <div className="flex flex-col gap-5 justify-center items-center dark bg-[var(--background)] py-7 px-7 md:px-10">
      <header className="flex flex-col text-white w-full">
        <h1 className="text-center text-3xl font-bold">{info?.title}</h1>
        {width > 768 && (
          <div className="font-bold self-end text-xl">
            <Link
              to={"/courses"}
              className="mt-10 hover:text-[var(--primary-color)]"
            >
              To Course Overview
            </Link>
          </div>
        )}
      </header>
      <div className="image-container bg-black md:bg-white w-full pt-5 md:py-20 flex flex-col md:flex-row justify-around items-center gap-5 cursor-pointer">
        <div className="h-50 w-full flex items-center justify-center rounded-2xl bg-white">
          <img src={info?.img2} className="w-full h-full object-scale-down" />
        </div>
        <div className="h-50 w-full flex items-center justify-center rounded-2xl bg-white">
          <img src={info?.img3} className="w-full h-full object-scale-down" />
        </div>
        <div className="h-50 w-full flex items-center justify-center rounded-2xl bg-white">
          <img src={info?.img3} className="w-full h-full object-scale-down" />
        </div>
      </div>
      <div className="text-container bg-white w-full p-5 md:p-10 rounded-lg cursor-pointer">
        <p>
          <Content content={info?.content} />
        </p>
      </div>
      <h2 className="text-2xl text-white font-bold self-start cursor-pointer">
        Note
      </h2>
      <div className="note-container bg-white w-full p-5 md:p-10  rounded-lg cursor-pointer">
        <p>{info?.note}</p>
      </div>
      <h2 className="text-right text-lg md:text-xl text-white font-semibold self-end cursor-pointer">
        {info?.created_by}
      </h2>
      {user?.role === "Teacher" && width > 768 && (
        <div className="buttons justify-center gap-3 hidden md:flex">
          <AlertBox
            css={
              "w-30 bg-white text-black text-lg hover:text-[var(--primary-color)] hover:bg-[#E5E7EB]"
            }
            btnName={"Delete"}
            title={"Are you sure you want to delete this course ?"}
          />
          <Button
            onClick={handleEdit}
            className="w-30 bg-[var(--primary-color)] text-white text-lg hover:bg-[#4D179A]"
          >
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default IndividualCourse;
