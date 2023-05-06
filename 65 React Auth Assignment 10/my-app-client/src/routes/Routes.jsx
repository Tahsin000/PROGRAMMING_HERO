import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Login from '../component/Login/Login';
import Register from '../component/Register/Register';
import Home from '../component/Home/Home';
import About from '../component/About/About';
import ViewChef from '../component/ViewChef/ViewChef';
import MainBlog from '../layout/MainBlog/MainBlog';
import Blogs from '../component/Blogs/Blogs';
import PrivateRoute from './PrivateRoute';
import BlogNavbar from '../component/Blogs/BlogNavbar';
import Footer from '../component/Footer/Footer';
import ChefSection from '../component/Home/ChefSection';
import ErrorPage from '../component/ErrorPage/ErrorPage ';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children:
      [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=>fetch('https://hhjn-restaurants-tahsin000.vercel.app/chefs')

        }
      ]
    },
    {
      path: "Blog",
      element:  <MainBlog> </MainBlog> ,
      errorElement: <ErrorPage />,
      children:
      [
        {
            path: "",
            element: <Blogs></Blogs>
        }
      ]
    },
    {
      path: "login",
      element:  <MainBlog> </MainBlog> ,
      errorElement: <ErrorPage />,
      children:
      [
        {
            path: "",
            element: <Login></Login>
        }
      ]
    },
    {
      path: "register",
      element:  <MainBlog> </MainBlog> ,
      errorElement: <ErrorPage />,
      children:
      [
        {
          path: "",
          element: <Register></Register>
        }
      ]
    },
    {
      path: ":id",
      errorElement: <ErrorPage />,
      element: <PrivateRoute>
          <BlogNavbar />
            <ViewChef />
          <Footer />
        </PrivateRoute> ,
      loader: ({params})=> fetch(`https://hhjn-restaurants-tahsin000.vercel.app/chefs/${params.id}`)
    }
    
]);

export default Routes;