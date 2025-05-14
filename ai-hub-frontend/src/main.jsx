import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { DataContextProvider } from "./context/DataContext";
import { WindowWidthContextProvider } from "./context/WindowWidthContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <WindowWidthContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WindowWidthContextProvider>
      </DataContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
