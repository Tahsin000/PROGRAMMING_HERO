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
import RegisterRBS from './component/RegisterRBS/RegisterRBS'
import RegisterBS from './component/RegisterBS/RegisterBS'

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
      },
      {
        path:'/registerrbs',
        element: <RegisterRBS> </RegisterRBS>
      },
      {
        path:'/registerbs',
        element: <RegisterBS> </RegisterBS>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
