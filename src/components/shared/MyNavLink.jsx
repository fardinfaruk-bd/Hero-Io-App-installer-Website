import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, children, className}) => {
    return (
        <NavLink to={to} className={({ isActive }) => `${isActive ? `bg-linear-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text  text-transparent font-bold border-b-2 border-[#9F62F2] rounded-none ${className}` : ''}`}>{children}</NavLink >
    );
};

export default MyNavLink;