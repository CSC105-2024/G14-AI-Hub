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
import EditPage from "./pages/edit-page/EditPage";
import SettingsPage from "./pages/settings-page/SettingsPage";
import NotFoundPage from "./pages/notfound-page/NotFoundPage";
import ProtecedRoute from "./components/protected-route/ProtectedRoute";
import PublicRoute from "./components/protected-route/PublicRoute";

//TODO: protect the routes
const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: <LandingPage />, // Render the App component
  },

  {
    path: "/login",

    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <SignUpPage />
      </PublicRoute>
    ),
  },
  {
    path: "/courses",

    element: (
      <ProtecedRoute>
        <CourseOverviewPage />
      </ProtecedRoute>
    ),
  },
  {
    path: "/dashboard",

    element: <DashBoardLayout />,
    children: [
      {
        index: true, //default
        element: <IndividualCourse />,
      },
      { path: "course/:id", element: <IndividualCourse /> },
      {
        path: "create",
        element: (
          <ProtecedRoute role={"Teacher"}>
            <CreatePage />
          </ProtecedRoute>
        ),
      },
      {
        path: "edit/:id",
        element: (
          <ProtecedRoute role={"Teacher"}>
            <EditPage />
          </ProtecedRoute>
        ),
      },
    ],
  },
  {
    path: "/settings",
    element: (
      <ProtecedRoute>
        <SettingsPage />
      </ProtecedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
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
