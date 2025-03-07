import Layout from "../component/Layout";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/Home";

const authRoutes = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
];

const guardedRoutes = [
    {
        path: '/home',
        element: <Layout Page={Home} />
    },
];

export const allRoutes = [...authRoutes, ...guardedRoutes];