import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main'
import Login from './component/Login'
import Home from './component/Home'
import Register from './component/Register'
import AuthProviders from './providers/AuthProviders';
import Orders from './component/Orders';
import PrivateRoute from './component/routes/PrivateRoute';
import Profile from './component/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:
    [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/orders',
        element: <PrivateRoute> <Orders></Orders> </PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
