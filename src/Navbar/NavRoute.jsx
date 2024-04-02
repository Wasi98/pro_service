// import React from 'react'

// import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Dashboard from '../Dashboard';
import Details from '../Details';



export default function NavRoute() {

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {
          path: "",
          element: <Dashboard />
        },
        {
          path: "details",
          element: <Details /> 
        }
      ]
    },
  
  ]);



  return (
      <RouterProvider router={router}/>  
  )
}
