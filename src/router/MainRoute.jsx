import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SignUp from "../pages/loginRegister/SignUp";
import Home from "../pages/home/Home";
import Login from "../pages/loginRegister/Login/Login";
import DashboardLayout from "../Dashboard/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
      },
    ],
  },
]);
