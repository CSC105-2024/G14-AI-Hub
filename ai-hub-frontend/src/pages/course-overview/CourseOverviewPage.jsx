import React from "react";
import NavBar from "@/components/navbar/NavBar";

//Albert
const CourseOverviewPage = () => {
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
      <NavBar />
      <div className="bg-black p-5">
        <h2 className="ml-3 text-white font-semibold">Course Overview</h2>
        <div className="grid grid-cols-4 p-3 content-center gap-3">
           {courses.map((course, index) => (
           <div className="bg-white rounded-lg" key={index}>
             <img src={course.imgUrl} />
             <p className="text-center">{course.title}</p>
           </div>
            ))}
        </div>
      </div>
      
    </div>
  );
};

export default CourseOverviewPage;
