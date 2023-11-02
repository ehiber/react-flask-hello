import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { BackendURL } from "./component/backendURL";

import { Root } from "./pages/Root";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Root/>
        ),
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "demo",
                element: <Demo />,
            },
            {
                path: "single/:theid",
                element: <Single />,
            },
        ],
        errorElement: <h1>Not found!</h1>,
    }
  ]);

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    // const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <RouterProvider router={router} />
    );
};

export default injectContext(Layout);



