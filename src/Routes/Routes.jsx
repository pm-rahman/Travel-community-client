import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layouts/Main/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRouter from "./PrivateRouter";
import CreateCommunity from "../Pages/CreateCommunity/CreateCommunity";
import Communities from "../Pages/Communities/Communities";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/communities', element: <Communities/> },
            { path: '/create-community', element: <PrivateRouter><CreateCommunity/></PrivateRouter> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
]);

export default Routes;