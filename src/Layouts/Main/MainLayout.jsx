import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Outlet />
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;