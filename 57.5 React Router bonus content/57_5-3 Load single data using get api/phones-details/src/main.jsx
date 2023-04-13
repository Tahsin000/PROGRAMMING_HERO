import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Component/Header';
import Phones from './Component/Phones';
import Phone from './Component/Phone';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header> ,
    children:
    [
      {
        path:"Phones",
        element: <Phones></Phones>,
        loader: () => fetch("http://localhost:4000/phones")
      },
      {
        path:"/Phones/:id",
        element: <Phone></Phone>,
        loader: ({params}) => fetch(`http://localhost:4000/phones/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
