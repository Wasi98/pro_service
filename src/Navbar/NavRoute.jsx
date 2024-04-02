
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Dashboard from "../NavComponents/Dashboard";
import Details from "../NavComponents/Details";




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
