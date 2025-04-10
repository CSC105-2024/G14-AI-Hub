import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //import these modules
import "./index.css";
import App from "./App.jsx";

import CourseOverviewPage from "./pages/course-overview/CourseOverviewPage";
import DashBoardLayout from "./pages/dash-board-layout/DashBoardLayout";
import LandingPage from "./pages/landing-page/LandingPage";
import LoginPage from "./pages/login-page/LoginPage";
import SignUpPage from "./pages/signup-page/SignUpPage";

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
  { path: "/dashboard", element: <DashBoardLayout /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
