import React, { useMemo } from 'react';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { commonRoutes } from '../../config/routes/routes';

function PageRoutes() {
    const routes = useMemo(() => {
        let siteRoutes: RouteObject[] = [];

        siteRoutes = siteRoutes.concat(commonRoutes);

        return siteRoutes;
    }, []);

    return <RouterProvider router={createBrowserRouter(routes)} />
}

export default PageRoutes;