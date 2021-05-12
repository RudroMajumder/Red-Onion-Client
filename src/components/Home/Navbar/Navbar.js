import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../images/logo2.png";
import {FiShoppingCart} from 'react-icons/fi';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
            <NavLink className="navbar-brand" exact to="/"><img src={logo}  alt="" /></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
                <Link className="nav-link pe-5" to="/checkout"><FiShoppingCart size={25}/> <span> {props.cart.length} </span> </Link>
                <NavLink className="nav-link pe-5" exact to="/">Home</NavLink>
                <NavLink className="nav-link pe-5" exact to="/dashboard">Dashboard</NavLink>
                <NavLink className="nav-link pe-5" exact to="/login">Login</NavLink>
                <NavLink className="nav-link pe-5" exact to="/login">Sign Up</NavLink>
            </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;