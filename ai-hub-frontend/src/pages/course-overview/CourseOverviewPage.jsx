import React, { useEffect, useState } from "react";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import Courses from "@/components/courses/Courses";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Button } from "@/components/ui/button";
import { useWidth } from "@/hooks/useWidth";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/sidebar/Sidebar";
import { SearchResults } from "@/components/search-results/SearchResults";
import { useFetch } from "@/hooks/useFetch";
import { useDataContext } from "@/hooks/useDataContext";
import Loading from "@/components/loading/Loading";

//Albert
const CourseOverviewPage = () => {
  const { user } = useAuthContext();

  const { width } = useWidth();
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);

  const { fetchCourse, fetchError, setFetchError } = useFetch();
  const { data, setData } = useDataContext();
  const [selectedCourses, setSelectedCourses] = useState(null);

  useEffect(() => {
    setSelectedCourses(data);
  }, [data]);

  if (!data) return <Loading />;

  return (
    <div>
      {width > 768 ? (
        <NavBar
          activePage={"courseoverview"}
          setSelectedCourses={setSelectedCourses}
          //temp
          courses={data}
        />
      ) : (
        <Sidebar
          setSelectedCourses={setSelectedCourses}
          //temp
          courses={data}
          activePage={"courseoverview"}
          setIsSearch={setIsSearch}
        />
      )}

      {isSearch && width < 768 ? (
        <SearchResults setIsSearch={setIsSearch} />
      ) : (
        <>
          <div className="bg-black p-5 ">
            <div className="md:w-330 mx-auto md:block flex justify-center">
              <h2 className="ml-3 mb-5 text-2xl text-white font-semibold mt-10 md:block hidden">
                Course Overview
              </h2>

              <div className="grid md:grid-cols-4 rounded-lg gap-4 md:gap-y-7 mb-10 ">
                {selectedCourses?.length > 0 ? (
                  selectedCourses.map((course, index) => (
                    <Courses course={course} index={index} key={index} />
                  ))
                ) : (
                  <div className="font-bold text-white h-80 flex items-center mx-auto item-center col-span-4 text-3xl mb-20">
                    No courses found
                  </div>
                )}
              </div>
              {user?.role === "Teacher" && width > 768 && (
                <div className="flex justify-center">
                  <Button
                    className={
                      "bg-[var(--primary-color)] p-6 mb-5 hover:bg-violet-900"
                    }
                    onClick={() => navigate("/dashboard/create")}
                  >
                    Create Course
                  </Button>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default CourseOverviewPage;
