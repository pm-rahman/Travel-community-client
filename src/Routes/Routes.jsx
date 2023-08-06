import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layouts/Main/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
]);

export default Routes;