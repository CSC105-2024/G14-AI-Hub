import Popup from "@/components/Popup";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Nadi
const IndividualCourse = () => {
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  function handleDelete() {
    setShowPopup(true);
  }

  function confirmDelete() {
    
    navigate("/");
  }

  function cancelDelete() {
    setShowPopup(false);
  }

  function handleEdit() {
    navigate("/");
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center dark bg-[var(--background)] py-7 px-7 md:px-10">
      <header className="flex flex-col text-white w-full">
        <h1 className="text-center text-3xl font-bold">What is AI?</h1>
        <Button
          onClick={() => {
            navigate("/courses");
          }}
          variant="link"
          className="self-end text-xl font-semibold hover:text-[var(--primary-color)] hover:cursor-pointer hidden md:block"
        >
          To Course Overview
        </Button>
      </header>
      <div className="image-container bg-black md:bg-white w-full pt-5 md:py-20 flex flex-col md:flex-row justify-around items-center gap-5">
        <div className="h-50 w-full flex items-center justify-center rounded-2xl bg-white">
          <img
            src="..\..\..\src\assets\course-image1.jpg"
            className="object-scale-down w-full"
          />
        </div>
        <div className="h-50 w-full flex items-center justify-center rounded-2xl bg-white">
          <img
            src="..\..\..\src\assets\course-image2.jpg"
            className="w-full h-full object-scale-down"
          />
        </div>
        <div className="h-50 w-full flex items-center justify-center rounded-2xl bg-white">
          <img
            src="..\..\..\src\assets\course-image3.jpg"
            className="object-scale-down w-full h-full"
          />
        </div>
      </div>
      <div className="text-container bg-white w-full p-5 md:p-10 flex justify-around rounded-lg">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
          doloremque alias similique placeat aut quia cum, reiciendis, iste, in
          dolore distinctio quidem qui quasi quibusdam sint illo est velit
          labore adipisci nihil veritatis officiis? Quos, perferendis! Deleniti
          odit sapiente, reiciendis facere, neque iure, aut quaerat deserunt ea
          eos minima quasi laborum quis. Minima, debitis adipisci vel, est
          nostrum pariatur animi vitae veritatis eveniet possimus aut esse!
          Natus iure animi labore vero, ab id tempora incidunt quis nisi, velit
          nostrum, aspernatur odio provident odit consequatur. Saepe quo esse
          rerum. Impedit recusandae iure a blanditiis officiis adipisci ratione,
          sit natus temporibus qui beatae eius eaque non. Sequi aspernatur
          quidem repudiandae iure perferendis, dolorum fugit atque itaque enim
          rerum dolorem eos et ipsum veniam beatae ab ipsam quaerat laboriosam
          officia autem praesentium amet aut est recusandae? Harum, soluta
          cumque eaque exercitationem itaque vero numquam ducimus, sint est
          error porro facere ea, ad suscipit! Cumque iste reiciendis aliquam
          fugiat magnam recusandae ea asperiores ipsam alias fugit veritatis
          fuga, neque, optio, facere laborum quae explicabo magni vero officia
          consequatur maxime? Molestiae, quos autem! Iure ea tenetur eius quia
          accusantium rem ullam ab ratione officia? Quia quas nesciunt
          architecto dolor molestias veniam, ab nam autem enim mollitia dolore.
          Sunt, beatae tempore eveniet praesentium tenetur quasi? Voluptas,
          velit omnis similique aspernatur ex eos. Reprehenderit, eaque expedita
          amet enim laudantium magni sint facere, in, explicabo atque iste
          repudiandae ullam ipsum. Consectetur omnis cumque temporibus fuga unde
          ea ipsa atque aperiam, ipsam similique excepturi, ad alias doloribus,
          commodi quis?
        </p>
      </div>
      <h2 className="text-2xl text-white font-bold self-start">Note</h2>
      <div className="note-container bg-white w-full p-5 md:p-10 flex justify-around rounded-lg">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quidem incidunt itaque quaerat deserunt officiis similique sunt porro
          officia doloribus! Magnam, tempora modi nihil repellat beatae earum
          inventore ipsa adipisci sint necessitatibus omnis saepe ea qui
          reiciendis consequuntur aperiam dolorum iure, cupiditate ex molestias
          eos aspernatur? Ipsa aliquid minus doloribus!
        </p>
      </div>
      <h2 className="text-right text-lg md:text-xl text-white font-semibold self-end">
        InstructorName
      </h2>
      <div className="buttons justify-center gap-3 hidden md:flex">
        <Button
          onClick={handleDelete}
          className="w-2/3 bg-white text-black text-lg hover:text-[var(--primary-color)] hover:bg-[#E5E7EB]"
        >
          Delete
        </Button>
        <Button
          onClick={handleEdit}
          className="w-2/3 bg-[var(--primary-color)] text-white text-lg hover:bg-[#4D179A]"
        >
          Edit
        </Button>
      </div>
      {showPopup && (
        <Popup
          message="Are you sure you want to delete this course?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default IndividualCourse;
