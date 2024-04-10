import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../layout/Layout";
import Landing from "./Landing";
const About = lazy(() => import("./About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
