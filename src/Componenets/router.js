import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Page1 from "./page/page1/Page1";
import Page2 from "./page/page2/Page2";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element:<Page1></Page1>
            },
            {
                path: "/page2",
                element:<Page2></Page2>
            }
        ]
    }
])