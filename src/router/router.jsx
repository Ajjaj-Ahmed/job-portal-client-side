import { createBrowserRouter, Outlet } from "react-router-dom";
import Root from "../layout/root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<h2>Pages not found</h2>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/signin',
          element:<SignIn></SignIn>
        }
      ]
    },
  ]);

export default router;