import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SignUp from "../pages/loginRegister/SignUp";
import Login from "../components/Login/Login";
import Home from "../pages/home/Home";

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
