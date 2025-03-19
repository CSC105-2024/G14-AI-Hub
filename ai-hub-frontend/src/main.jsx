import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //import these modules
import './index.css'
import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LandingPage from './pages/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: <LandingPage />, // Render the App component
  },
  
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
