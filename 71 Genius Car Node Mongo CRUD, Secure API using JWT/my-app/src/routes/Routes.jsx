import { createBrowserRouter } from "react-router-dom";
import Main from "../Laout/Main";
import About from "../pages/About/About";
import Bookings from "../pages/Booking/Bookings";
import CheckOut from "../pages/CheckOut/CheckOut";
import Home from "../pages/Home/Home/Home.jsX";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
      },,
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout/:id",
        element: <PrivateRoute> <CheckOut /> </PrivateRoute>,
        loader: ({params}) => fetch(`https://car-doctor-six.vercel.app/services/${params.id}`)
      }
      ,
      {
        path: "bookings",
        element: <PrivateRoute> <Bookings /> </PrivateRoute> 
      }
    ]
  },
]);

export default router