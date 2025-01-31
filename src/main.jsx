import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./components/routes/RoutesComponent";
import { AboBewertungContextProvider } from "./store/AboBewertungContext";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AboBewertungContextProvider>
      <RouterProvider router={router} />
    </AboBewertungContextProvider>
  </StrictMode>
);
