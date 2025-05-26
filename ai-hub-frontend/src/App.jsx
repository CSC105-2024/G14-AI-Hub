import React, { useEffect } from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import { Route, Routes, Navigate } from "react-router-dom";
import CourseOverviewPage from "./pages/course-overview/CourseOverviewPage";
import DashBoardLayout from "./pages/dash-board-layout/DashBoardLayout";
import LandingPage from "./pages/landing-page/LandingPage";
import LoginPage from "./pages/login-page/LoginPage";
import SignUpPage from "./pages/signup-page/SignUpPage";
import IndividualCourse from "./pages/individual-course/IndividualCourse";
import CreatePage from "./pages/create-page/CreatePage";
import EditPage from "./pages/edit-page/EditPage";
import SettingsPage from "./pages/settings-page/SettingsPage";
import NotFoundPage from "./pages/notfound-page/NotFoundPage";
import { useWidth } from "./hooks/useWidth";
import Loading from "./components/loading/Loading";
import { useInterceptor } from "./hooks/useInterceptor";
import { Toaster } from "sonner";
import { useDataContext } from "./hooks/useDataContext";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const { user, dispatch, loading } = useAuthContext();
  const { width } = useWidth();
  const { fetchCourse, fetchError, setFetchError } = useFetch();
  const { data, setData } = useDataContext();

  useInterceptor(dispatch);

  useEffect(() => {
    const fun = async () => {
      const courses = await fetchCourse();
      setData(courses);
    };
    if (user && !data) {
      fun();
    }
  }, [user]);

  if (loading && !data) return <Loading />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/courses" />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUpPage /> : <Navigate to="/courses" />}
        />

        <Route
          path="/courses"
          element={user ? <CourseOverviewPage /> : <Navigate to="/login" />}
        />

        <Route
          path="/dashboard"
          element={user ? <DashBoardLayout /> : <Navigate to="/login" />}
        >
          <Route path="course/:id" element={<IndividualCourse />} />
          <Route
            path="create"
            element={
              user?.role === "Teacher" && width > 768 ? (
                <CreatePage />
              ) : (
                <Navigate to="/courses" />
              )
            }
          />
          <Route
            path="edit/:id"
            element={
              user?.role === "Teacher" && width > 768 ? (
                <EditPage />
              ) : (
                <Navigate to="/courses" />
              )
            }
          />
        </Route>

        <Route
          path="/settings"
          element={user ? <SettingsPage /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster richColors />
    </div>
  );
};

export default App;
