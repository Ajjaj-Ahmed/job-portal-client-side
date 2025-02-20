import { createBrowserRouter, Outlet } from "react-router-dom";
import Root from "../layout/root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import HotJobs from "../pages/HotJobs/HotJobs";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";

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
          path:'/myApplications',
          element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },
        {
          path:'/addJOb',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:'/myPostedJobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path:'/signin',
          element:<SignIn></SignIn>
        }
      ]
    },
  ]);

export default router;