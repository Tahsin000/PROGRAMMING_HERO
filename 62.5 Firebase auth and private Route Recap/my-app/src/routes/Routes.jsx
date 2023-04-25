import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Book from "../components/Book/Book";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

// eslint-disable-next-line no-unused-vars
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:
      [
        {
          path:'/',
          element: <Home></Home>,
          loader: () => { return fetch("data.json")}
        },
        {
          path:'login',
          element: <Login></Login>,
        },
        {
          path:'/:book_ID',
          element:  <PrivateRoute> <Book></Book> </PrivateRoute>,
          loader: ({params}) => params.book_ID,
        },
        {
          path:'register',
          element: <SignUp></SignUp>
        }
      ]
    },
]);
