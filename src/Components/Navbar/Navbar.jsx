import { useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Icon } from "@iconify/react";
import useAuth from "../../Hook/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isSticky, setSticky] = useState(false);
    const [isNavShow, setIsNavShow] = useState(false);
    const [profileShow,setProfileShow] = useState(false);

    const logOutHandler = () => {
        logOut()
            .then(() => { })
            .catch((err) => {
                console.log(err);
            })
    }

    const scrollStart = () => {
        setSticky(window.scrollY > 195);
    }
    window.addEventListener('scroll', scrollStart);
    const navLink = <>
        <li><ActiveLink to="/"><Icon className="text-xl" icon="heroicons-outline:home" /><span>Home</span></ActiveLink></li>
        {user ? <>
            <li><ActiveLink to="/create-community"><Icon className="text-xl" icon="mdi:account-multiple-plus" /><span>Create Community</span></ActiveLink></li>
        </>
            : <li><ActiveLink to='/login'><Icon className="text-lg" icon="mdi:account-arrow-right" />Login</ActiveLink></li>
        }
    </>
    return (
        <div className={`navbar px-4 md:px-8 lg:px-16 uppercase bg-base-100 border-b ${isSticky && "sticky top-0 z-30 shadow-lg border-b-0 shadow-b"}`}>
            <div className="navbar-start">
                <div onClick={() => setIsNavShow(!isNavShow)} className="relative lg:hidden">
                    <label className="btn pl-0 btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className={`absolute top-11 duration-500 ease-out ${isNavShow ? "left-0" : "-left-72"} menu menu-sm mt-3 z-[1] p-2 shadow bg-base-100 border border-zinc-300 rounded-md w-52`}>
                        {navLink}
                    </ul>
                </div>
                <Link to='/' className="hidden lg:flex btn btn-ghost h-16 uppercase pl-0 text-xl">
                    <figure className="h-14 border-3 pl-0 rounded-full overflow-hidden"><img className="h-full w-auto" src="" alt="" /></figure>
                    <h3>Travel Community</h3>
                </Link>
            </div>

            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu font-serif relative menu-horizontal items-center">
                        {navLink}
                        {
                            user && <>
                                <figure onClick={()=>setProfileShow(!profileShow)} title={user?.displayName} className="h-10 w-10 border-2 ml-2 overflow-hidden hover:cursor-pointer rounded-full"><img src={user?.photoURL || "https://www.pngkit.com/png/detail/202-2024572_png-file-svg-profile-icon-vector-png.png"} alt="User Photo" /></figure>
                                <ul onClick={()=>setProfileShow(!profileShow)} className={`border bg-white rounded flex flex-col gap-0 absolute right-0 ${profileShow?"top-[123%]":"-top-[200%]"}`}>
                                    <li
                                        className="hover:cursor-pointer flex gap-1"
                                        onClick={() => logOutHandler()}
                                    ><span><Icon className="text-xl" icon="mdi:account-arrow-left" />Log Out</span></li>
                                </ul>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;