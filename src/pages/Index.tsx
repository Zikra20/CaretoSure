import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../layout/Layout";
import Landing from "./Landing";
const About = lazy(() => import("./About"));
const Services = lazy(() => import("./Services"));
const Blog = lazy(() => import("./Blog"));
const Doctors = lazy(() => import("./Doctors"));

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
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
