import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";

// eslint-disable-next-line no-unused-vars, no-undef
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:
      [
        {
            path:'/',
            element: <Home></Home>
        }
      ]
    },
  ]);