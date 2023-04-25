import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  // eslint-disable-next-line no-unused-vars
  createBrowserRouter,
  // eslint-disable-next-line no-unused-vars
  RouterProvider,
} from "react-router-dom";

import { router } from './routes/Routes.jsx';
import { AuthProvider } from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
