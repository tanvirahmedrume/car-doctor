import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Notfound from "../Pages/NotFound/Notfound";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Notfound/>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/service",
          element: <ServiceDetails></ServiceDetails>
        }

    ]
  },
]);

export default router;