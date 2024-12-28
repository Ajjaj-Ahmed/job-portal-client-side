import { createBrowserRouter, Outlet } from "react-router-dom";
import Root from "../layout/root";
import Home from "../pages/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<h2>Pages not found</h2>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

export default router;