import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import AllApps from "../pages/AllApps";
import Install from "../pages/Install";
import NotFound404 from "../pages/Error";
import Details from "../pages/Details";

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
                element: <AllApps></AllApps>

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
