import React from 'react'
import { allRoutes } from './mainRoutes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(allRoutes);

const Routing = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Routing;
