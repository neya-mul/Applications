import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import AllApps from "../pages/AllApps";
import Install from "../pages/Install";
import NotFound404 from "../pages/Error";
import Details from "../pages/Details";
import { Suspense } from "react";
import { RotateLoader } from "react-spinners";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/apps",
                element: <Suspense fallback={<div className='flex justify-center items-center py-60'><RotateLoader color='white'/></div>}>
                    <AllApps></AllApps>
                </Suspense>

            },
            {
                path: "/apps/:id",
                element: <Details></Details>
            },
            {
                path: "/install",
                element: <Install></Install>

            }
        ],
        errorElement: <NotFound404></NotFound404>
    },
]);
