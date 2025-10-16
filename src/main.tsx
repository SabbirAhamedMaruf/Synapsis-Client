import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { synapsisRoutes } from "./routes/Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={synapsisRoutes} />
    </ChakraProvider>
  </StrictMode>
);
