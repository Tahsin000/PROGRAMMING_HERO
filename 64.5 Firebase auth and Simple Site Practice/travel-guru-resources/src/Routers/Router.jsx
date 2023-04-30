/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Home from '../component/Home/Home';
import Booking from '../component/Booking/Booking';
import Login from '../component/Login/Login';
import LoginNav from '../component/Nav/LoginNav';
import LoginMain from '../layout/Main/LoginMain';
import Register from '../component/Register/Register';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:
      [
        {
          path:"/",
          element: <Home></Home>,
        },
        {
          path:"booking",
          element: <Booking></Booking>
        },
      ],
    },
    {
      path:"/",
      element: <LoginMain></LoginMain>,
      children:
      [
        {
          path:"login",
          element: <Login></Login>
        },{
          path:"register",
          element: <Register></Register>
        },
      ],
    }
  ]);
  

export default router;