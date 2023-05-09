import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import GoogleMap from './components/GoogleMaps/GoogleMap.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:
    [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "home",
        element: <Home></Home>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "services",
        element: <Services></Services>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "googlemap",
        element: <GoogleMap></GoogleMap>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
