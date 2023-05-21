
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import NotFound from "../pages/ErrorPage/NotFound";
import Home from "../pages/Home/Home/Home";
import Main from "../pages/Layout/Main";
import Login from "../pages/Login/Login";
import MyToys from "../pages/MyToys/MyToys";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main /> ,
    children:
    [
        {
            path: "/",
            element: <Home /> ,
        },
        {
            path: "about",
            element: <About /> ,
        },
        {
            path: "blogs",
            element: <Blogs /> ,
        },
        {
            path: "login",
            element: <Login /> ,
        },
        {
            path: "signup",
            element: <SignUp /> ,
        },
        {
            path: "alltoy",
            element: <AllToys /> ,
            loader: () => fetch(`https://toy-house-ten.vercel.app/products`) 
        },
        {
            path: "products/details/:id",
            element: <PrivateRoutes> <ProductDetails /> </PrivateRoutes>  ,
            // loader: ({params}) => params.id
            loader: ({params}) => fetch(`https://toy-house-ten.vercel.app/products/${params.id}`) 
        },
        {
            path: "products/my_product/",
            element: <MyToys /> ,
            // element: <MyToys /> ,
            // loader: ({params}) => fetch(`https://toy-house-ten.vercel.app/my_products/${params.email}`) 
        },
        {
            path: "addtoys",
            element: <AddToys /> 
        },
        {
            path: "error",
            element: <NotFound /> ,
        }
        
    ],
    errorElement: <NotFound /> ,
  },
]);
export default router;
