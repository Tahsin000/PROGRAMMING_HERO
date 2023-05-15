import { createBrowserRouter } from "react-router-dom";
import Main from "../Laout/Main";
import Home from "../pages/Home/Home/Home.jsX";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      }
    ]
  },
]);

export default router