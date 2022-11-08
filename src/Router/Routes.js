import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegistration/Login";
import SignUp from "../Pages/LoginRegistration/SignUp";

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
            }
        ]
    }
]);

export default router;