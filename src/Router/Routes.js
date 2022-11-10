import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegistration/Login";
import SignUp from "../Pages/LoginRegistration/SignUp";
import MyReview from "../Pages/MyReview/MyReview";
import AddService from "../Pages/Services/AddService";
import MoreServices from "../Pages/Services/MoreServices";
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/more-services',
                element: <MoreServices></MoreServices>
            }

        ]
    }
]);

export default router;