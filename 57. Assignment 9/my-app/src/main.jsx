import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import AppliedJobs from './Component/AppliedJobs/AppliedJobs'
import Blog from './Component/Blog/Blog'
import ErrorPage from './Component/ErrorPage/ErrorPage'
import Home from './Component/Home/Home'
import JobDetails from './Component/JobDetails/JobDetails'
import Nav from './Component/Nav/Nav'
import Statistics from './Component/Statistics/Statistics'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"blog",
        element: <Blog></Blog>
      },
      {
        path:"/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => params.jobId,
      },
      {
        path:"applied_jobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:"applied_jobs/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => params.jobId
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
