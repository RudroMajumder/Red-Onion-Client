import React from 'react';
import "./Sidebar.css";
import { NavLink } from 'react-router-dom';
import {FaPlus,FaUserPlus,FaTools,FaListAlt} from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="sidebar d-flex  pt-5" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <NavLink className="nav-link text-white nav-option me-5 pe-3" activeClassName="active-nav" exact to="/dashboard">
                        <FaListAlt className="me-3"/> <span>Manage Orders</span>
                    </NavLink>
                </li>
                <li className="mt-3">
                    <NavLink className="nav-link text-white nav-option me-5 pe-5" activeClassName="active-nav" exact to="/addItem">
                        <FaPlus className="me-3"/> <span>Add New Item</span>
                    </NavLink>
                </li>
                <li className="mt-3">
                    <NavLink className="nav-link text-white nav-option me-5 pe-5" activeClassName="active-nav" exact to="/addAdmin">
                        <FaUserPlus className="me-3"/> <span>Add  Admin</span>
                    </NavLink>
                </li>

                <li className="mt-3">
                    <NavLink className="nav-link text-white nav-option me-5 pe-5" activeClassName="active-nav" exact to="/manageItems">
                        <FaTools className="me-3"/> <span>Manage Items</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;