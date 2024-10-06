import React from "react";
import { RouteObject } from "react-router-dom";
import NotFound from "../../pages/common/NotFoundPage";
import Home from "../../pages/common/HomePage";
import { routeUrls } from "./routeUrls";
import OrganizationHistory from "../../pages/history/OrganizationHistoryPage";
import KylieHistory from "../../pages/history/KylieHistoryPage";
import PhotoGallery from "../../pages/discoveringNomadKylie/PhotoGalleryPage";
import NomadLifestyle from "../../pages/discoveringNomadKylie/NomadLifestylePage";
import RecentSightings from "../../pages/recentSightings/RecentSightingsPage";
import HowYouCanHelp from "../../pages/howYouCanHelp/HowYouCanHelpPage";
import Contact from "../../pages/howYouCanHelp/ContactPage";
import Donate from "../../pages/howYouCanHelp/DonatePage";

export const commonRoutes: RouteObject[] = [
    {
        path: "*",
        element: (
            <NotFound/>
        ),
    },
    {
        path: "/",
        element: (
            <Home/>
        )
    },
    {
        path: routeUrls.history.theOrganization,
        element: (
            <OrganizationHistory />
        )
    },
    {
        path: routeUrls.history.kylieSpecies,
        element: (
            <KylieHistory />
        )
    },
    {
        path: routeUrls.discoveringNomadKylie.photoGallery,
        element: (
            <PhotoGallery />
        )
    },
    {
        path: routeUrls.discoveringNomadKylie.nomadLifeStyle,
        element: (
            <NomadLifestyle />
        )
    },
    {
        path: routeUrls.recentSightings.recentSightnings,
        element: (
            <RecentSightings />
        )
    },
    {
        path: routeUrls.howYouCanHelp.howYouCanHelp,
        element: (
            <HowYouCanHelp />
        )
    },
    {
        path: routeUrls.howYouCanHelp.contact,
        element: (
            <Contact />
        )
    },
    {
        path: routeUrls.howYouCanHelp.donate,
        element: (
            <Donate />
        )
    },
];