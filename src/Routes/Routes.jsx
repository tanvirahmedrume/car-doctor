import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Notfound from "../Pages/NotFound/Notfound";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import AddNewServices from "../Pages/AddNewServices/AddNewServices";

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
        },
        {
          path: "/checkout",
          element: <Checkout></Checkout>
        },
        {
          path: "/addnewservices",
          element: <AddNewServices></AddNewServices>
        }

    ]
  },
]);

export default router;