import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PrivateRouter = ({children}) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <p className="text-center">Loading...</p>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>;
};

export default PrivateRouter;