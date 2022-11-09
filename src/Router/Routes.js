import Main from "../Layout/Main";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegistration/Login";
import SignUp from "../Pages/LoginRegistration/SignUp";
import AddService from "../Pages/Services/AddService";
import Service from "../Pages/Services/Service";
import ServiceDetails from "../Pages/Services/ServiceDetails";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <Service></Service>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>,
            }
        ]
    }
]);

export default router;