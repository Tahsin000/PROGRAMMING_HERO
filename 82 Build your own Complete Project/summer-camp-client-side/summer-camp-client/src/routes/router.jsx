import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Classes from '../pages/Classes/Classes/Classes';
import AdminDashboardHome from '../pages/Dashboard/Admin/AdminDashboardHome/AdminDashboardHome';
import ManageClasses from '../pages/Dashboard/Admin/ManageClasses/ManageClasses';
import ManageUserUpdate from '../pages/Dashboard/Admin/ManageUsers/ManageUserUpdate';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers/ManageUsers';
import AddClass from '../pages/Dashboard/Instructor/AddClass';
import EnrolledClasses from '../pages/Dashboard/Student/EnrolledClasses/EnrolledClasses';
import EnrollingProfile from '../pages/Dashboard/Student/EnrolledClasses/EnrollingProfile';
import Payment from '../pages/Dashboard/Student/Payment/Payment';
import SelectedClasses from '../pages/Dashboard/Student/SelectedClasses/SelectedClasses';
import Home from '../pages/Home/Home/Home';
import Instructors from '../pages/Instructors/Instructors/Instructors';
import Dashboard from '../pages/Layout/Dashboard';
import Main from '../pages/Layout/Main';
import Login from '../pages/Login/Login';
import Secret from '../pages/Shared/Secret/Secret.jsx';
import SignUp from '../pages/SignUp/SignUp';
import InstructorClasses from '../pages/Dashboard/Instructor/InstructorClasses';
import InstructorUpdate from '../pages/Dashboard/Instructor/InstructorUpdate';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import InstructorRoute from './InstructorRoute';
import StudentRoute from './StudentRoute';
import ErrorPage from '../pages/Shared/ErrorPage/ErrorPage';

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
      // {
      //   path: "menu", 
      //   element: <Menu />,
      // }, 
      // {
      //   path: "order/:category", 
      //   element: <Order />,
      // }, 
      {
        path: "login", 
        element: <Login />,
      }, 
      {
        path: "register", 
        element: <SignUp />,
      }, 
      {
        path: "signup", 
        element: <SignUp />,
      },
      {
        path: "instructors", 
        element: <Instructors />,
      },
      {
        path: "classes", 
        element: <Classes  />,
      },
      {
        path: "secret", 
        element: <PrivateRoute> <Secret /> </PrivateRoute> ,
      }, 
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
      element: <PrivateRoute> <Dashboard /> </PrivateRoute>,
      children: [
        {
          path: "home",
          element: <AdminRoute> <AdminDashboardHome/> </AdminRoute> 
        },
        {
          path: "manage_classes",
          element:  <AdminRoute> <ManageClasses /> </AdminRoute> 
        },
        {
          path: "manage_user",
          element: <AdminRoute> <ManageUsers /> </AdminRoute> 
        },
        {
          path: "manage_user_update/:id",
          element:  <AdminRoute> <ManageUserUpdate /> </AdminRoute> 
        },
        {
          path: "add_class",
          element: <InstructorRoute> <AddClass /> </InstructorRoute> 
        },
        {
          path: "selected_classes",
          element: <StudentRoute> <SelectedClasses /> </StudentRoute> 
        },
        {
          path: "enrolled_classes",
          element: <StudentRoute> <EnrolledClasses /> </StudentRoute> 
        },
        {
          path: "enrolled_classes/:id",
          element: <StudentRoute> <EnrollingProfile /> </StudentRoute> 
        },
        {
          path: "payment",
          element: <StudentRoute> <Payment /> </StudentRoute> 
        },
        {
          path: "instructor_classes",
          element: <InstructorRoute> <InstructorClasses /> </InstructorRoute> 
        },
        {
          path: "instructor_update/:id",
          element:  <InstructorRoute> <InstructorUpdate /> </InstructorRoute>
        },
      ],
    errorElement: <ErrorPage />,
  }
  // {
  //   path: "dashboard",
  //   element: <PrivateRoute> <Dashboard /> </PrivateRoute>,
  //   children: 
  //   [
  //     {
  //       path: "mycart",
  //       element: <MyCart />
  //     },
  //     {
  //       path: "allusers",
  //       element: <AllUsers />
  //     },
  //     {
  //       path: "additem",
  //       element: <AdminRoute> <AddItem /> </AdminRoute>
  //     },
  //     {
  //       path: "manageitems",
  //       element: <AdminRoute> <MenageItems /> </AdminRoute>
  //     }
  //   ]
  // }
  ]);

export default router;