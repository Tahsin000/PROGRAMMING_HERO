import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Main from './component/layout/Main'
import Home from './component/Home/Home'
import Login from './component/Login/Login'
import Register from './component/Register/Register'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:
    [
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/login',
        element: <Login> </Login>
      },
      {
        path:'/register',
        element: <Register> </Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
