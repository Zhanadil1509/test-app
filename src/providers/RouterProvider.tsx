import {
    RouterProvider,
    createBrowserRouter,
    useRouteError,
} from "react-router-dom";
import {MainLayout} from "../components/layouts/MainLayout.tsx";
import {homePageRoute} from "../app/home";

function BubbleError() {
    const error = useRouteError();
    if (error) throw error;
    return null;
}

const router = createBrowserRouter([
    {
        errorElement: <BubbleError />,
        children: [
            {
                element: <MainLayout />,
                children: [homePageRoute],
            },
            /*{
                element: <GuestLayoutUi />,
                children: [authPageRoute],
            },
            {
                    loader: async () => redirect(pathKeys.page404()),
                    path: "*",
                  },*/
        ],
    },
]);

export function BrowserRouter() {
    return <RouterProvider router={router} />;
}
