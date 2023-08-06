import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) => isActive ? 'bg-inherit font-bold flex gap-1 items-center' : 'flex gap-1 font-sans'}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;