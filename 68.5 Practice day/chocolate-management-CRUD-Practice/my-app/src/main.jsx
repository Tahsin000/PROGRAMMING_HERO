import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddChocolate from './components/AddChocolate.jsx';
import UpdateChocolate from './components/UpdateChocolate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader:() => fetch('https://my-app-server-1g5cvh6yh-tahsin000.vercel.app/chocolate')
  },
  {
    path: "/addChocolate",
    element: <AddChocolate />,
  },
  {
    path: "/UpdateChocolate/:id",
    element: <UpdateChocolate />,
    loader: ({params}) => fetch(`https://my-app-server-1g5cvh6yh-tahsin000.vercel.app/chocolate/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
