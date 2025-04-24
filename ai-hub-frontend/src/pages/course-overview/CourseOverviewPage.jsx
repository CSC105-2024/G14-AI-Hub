import React from "react";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import Courses from "@/components/courses/Courses";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Button } from "@/components/ui/button";
import { useWidth } from "@/hooks/useWidth";

//Albert
const CourseOverviewPage = () => {
  const { user } = useAuthContext();
  const { width } = useWidth();

  const courses = [
    {
      title: "What is AI?",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "Related Fields",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "AI Problem Solving",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "The Bayes Rule",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "Naive Bayes Classification",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "Types of ML",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "The Nearest Neighbor Classifier",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "Regression",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "Neural Networks",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "How Neural Networks are built",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "Advanced neural network techniques",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "Implications of AI",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
  ];
  return (
    <div>
      <NavBar activePage={"courseoverview"} />
      <div className="bg-black p-5 ">
        <div className="md:w-330 mx-auto md:block flex justify-center">
          <h2 className="ml-3 mb-5 text-2xl text-white font-semibold mt-10 md:block hidden">
            Course Overview
          </h2>

          <div className="grid md:grid-cols-4 rounded-lg gap-4 md:gap-y-7 mb-10 ">
            {courses.map((course, index) => (
              <Courses course={course} index={index} key={index} />
            ))}
          </div>
          {user.role === "Teacher" && width > 768 && (
            <div className="flex justify-center">
              <Button
                className={
                  "bg-[var(--primary-color)] p-6 mb-5 hover:bg-violet-900"
                }
              >
                Create Course
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseOverviewPage;
