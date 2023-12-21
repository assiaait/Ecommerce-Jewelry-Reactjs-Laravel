import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/home.jsx"
import Login from "./Pages/auth/Login.jsx";
import SingUp from "./Pages/register.jsx";
import Users from "./Pages/users.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Layout from "./Layouts/layout.jsx";

export const USER_HOME_ROUTE = '/frontendBijoux/src/Pages/Home/home'
export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: USER_HOME_ROUTE,
                element: <Home/>,
            },
            {
                path: "/signup",
                element: <SingUp />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
