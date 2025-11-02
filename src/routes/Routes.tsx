import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../pages/error/Error";
import Chat from "../pages/chat/Chat";
import Settings from "../pages/settings/Settings";
import ModelsList from "../pages/models/ModelsList";

export const synapsisRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Chat />,
      },
      {
        path: "/models",
        element: <ModelsList />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);
