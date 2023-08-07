import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="py-14 px-4 md:px-8 lg:px-16">
                <Outlet />
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;