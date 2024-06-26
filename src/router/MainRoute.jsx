import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SignUp from "../pages/loginRegister/SignUp";
import Home from "../pages/home/Home";
import Login from "../pages/loginRegister/Login/Login";

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
]);
