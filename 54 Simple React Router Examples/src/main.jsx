import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './assets/54-2 (interesting) Nested route and outlet for shared content/About';
import Contact from './assets/54-2 (interesting) Nested route and outlet for shared content/Contact';
import ErrorPage from './assets/54-2 (interesting) Nested route and outlet for shared content/ErrorPage';
import Header from './assets/54-2 (interesting) Nested route and outlet for shared content/Header';
import Home from './assets/54-2 (interesting) Nested route and outlet for shared content/Home';
import First from './assets/54-3 Avoid reload using Link and Load data on route/First';
import Friends from './assets/54-3 Avoid reload using Link and Load data on route/Friends';
import Friend from './assets/54-4 Display users, create dynamic link with route parameter/Friend';
import FriendDetail from './assets/54-4 Display users, create dynamic link with route parameter/FriendDetail';
import Posts from './assets/54-5 React route parameter and load data based on dynamic route/Posts';
import PostDetail from './assets/54-5 React route parameter and load data based on dynamic route/PostDetail';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//     errorElement: <ErrorPage></ErrorPage>
//   },
//   {
//     path: "/about",
//     element: <About></About>
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>
//   }
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: 
    [
      {
        path: '/',
        element:<First></First>
      },
      {
        path: 'friend/:friendId',
        element:<FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'about',
        element:<About></About>
      },
      {
        path: 'friends',
        element:<Friends></Friends>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'posts',
        element:<Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element:<PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        
      },
      {
        path: 'contact',
        element:<Contact></Contact>
      },
      {
        path: '*',
        element: <div>404</div>
      }

    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
