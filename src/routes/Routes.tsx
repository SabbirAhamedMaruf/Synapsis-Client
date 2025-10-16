import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../pages/error/Error";
import Chat from "../pages/chat/Chat";
import Settings from "../pages/settings/Settings";
import Models from "../pages/models/Models";

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
        element: <Models />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);
