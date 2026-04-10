import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import AllApps from "../pages/AllApps";

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
                path: "apps",
                element: <AllApps></AllApps>

            }
        ]
    },
]);
