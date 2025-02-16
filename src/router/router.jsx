import { createBrowserRouter, Outlet } from "react-router-dom";
import Root from "../layout/root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import HotJobs from "../pages/HotJobs/HotJobs";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";

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
          path:'jobs/:id',
          element:<PrivateRoute><HotJobs></HotJobs></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/jobApply/:id',
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path:'/signin',
          element:<SignIn></SignIn>
        }
      ]
    },
  ]);

export default router;