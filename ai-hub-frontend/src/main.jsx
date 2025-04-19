import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //import these modules
import "./index.css";
import CourseOverviewPage from "./pages/course-overview/CourseOverviewPage";
import DashBoardLayout from "./pages/dash-board-layout/DashBoardLayout";
import LandingPage from "./pages/landing-page/LandingPage";
import LoginPage from "./pages/login-page/LoginPage";
import SignUpPage from "./pages/signup-page/SignUpPage";
import IndividualCourse from "./pages/individual-course/IndividualCourse";
import { WindowWidthContextProvider } from "./context/WindowWidthContext";
import { AuthContextProvider } from "./context/AuthContext";
import { DataContextProvider } from "./context/DataContext";
import CreatePage from "./pages/create-page/CreatePage";

//TODO: protect the routes
const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: <LandingPage />, // Render the App component
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/courses",
    element: <CourseOverviewPage />,
  },
  {
    path: "/dashboard",

    element: <DashBoardLayout />,
    children: [
      {
        index: true, //default
        element: <IndividualCourse />,
      },
      { path: "course", element: <IndividualCourse /> },
      { path: "create", element: <CreatePage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <WindowWidthContextProvider>
          <RouterProvider router={router} />
        </WindowWidthContextProvider>
      </DataContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
