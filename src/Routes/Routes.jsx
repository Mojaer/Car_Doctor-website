import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/Home/SignUp/SignUP";
import Checkout from "../Pages/Home/Checkout/Checkout";
import Booking from "../Pages/Booking/Booking";
import UserBookings from "../Pages/UserBookings/UserBookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUP></SignUP>,
            },
            {
                path: "/checkout/:id",
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`https://car-doctior-server.vercel.app/services/${params.id}`)
            },
            {
                path: "/booking/:id",
                element: <PrivateRoute><Booking></Booking></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-doctior-server.vercel.app/services/${params.id}`)
            },
            {
                path: "/userBooking",
                element: <PrivateRoute><UserBookings></UserBookings></PrivateRoute>,

            },
        ]
    },
]);

export default router;