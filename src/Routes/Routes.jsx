import { createBrowserRouter } from "react-router-dom";
import Services from "../components/Services/Services";
import Main from "../Layout/Main";
import AddNewServices from "../Pages/AddNewServices/AddNewServices";
import Bookings from "../Pages/Bookings/Bookings";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Notfound from "../Pages/NotFound/Notfound";
import AllServices from "../Pages/Services/All Services/AllServices";
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";
import Signup from "../Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";


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
        path: "/services", 
        element: <Services></Services>
      },
      {
        path: "/all-services",
        element: <AllServices></AllServices>
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`https://car-doctor-server-production-153a.up.railway.app/services/${params.id}`)
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
        loader: ({params}) => fetch(`https://car-doctor-server-production-153a.up.railway.app/services/${params.id}`)
      },
      {
        path: "/addnewservices",
        element: <AddNewServices></AddNewServices>
      },
      {
        path: "/bookings",
        element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
      }
    ]
  },
]);

export default router;