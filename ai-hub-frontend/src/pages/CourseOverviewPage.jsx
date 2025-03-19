import React from "react";

const CourseOverviewPage = () => {
  const courses = [
    {
      title: "What is AI?",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "What is AI?",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "What is AI?",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "What is AI?",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "What is AI?",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "What is AI?",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "What is AI?",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "What is AI?",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
    {
      title: "What is AI?",
      imgUrl:
        "https://static.printler.com/cache/c/4/1/7/d/c/c417dc9c0acfba8b61c6a40e81636b953e9a5566.jpg",
    },
  ];
  return (
    <div>
      <h2>Course Overview</h2>
      <div className="grid grid-cols-4 p-3 gap-3">
        {courses.map((course, index) => (
          <div className="bg-red-500">
            <img src={course.imgUrl} />
            <p>{course.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOverviewPage;
