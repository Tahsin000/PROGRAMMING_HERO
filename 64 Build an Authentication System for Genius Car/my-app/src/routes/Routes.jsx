/* eslint-disable no-undef */
import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Categroy from "../pages/Home/Category/Category";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News/News";
import Terms from "../pages/Shared/Terms/Terms";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {
    path:"/",
    element: <LoginLayout></LoginLayout>,
    children:
    [
      {
        path:'/',
        element: <Navigate to="/category/0"></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path:'register',
        element: <Register></Register>
      },
      {
        path:'terms',
        element: <Terms></Terms>
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
      children:
      [
        {
          path:':id',
          element: <Categroy></Categroy>,
          loader: ({params})=> fetch(`https://my-app-server-tahsin000.vercel.app/categories/${params.id}`)
        }
      ]
    },
    {
      path:"news",
      element: <NewsLayout></NewsLayout>,
      children:
      [
        {
          path: ":id",
          element: <PrivateRoute> <News></News> </PrivateRoute>,
          loader: ({params}) => fetch(`https://my-app-server-tahsin000.vercel.app/news/${params.id}`)  
        }
      ]
    }
  ]);