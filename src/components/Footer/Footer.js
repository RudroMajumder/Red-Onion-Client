import React from 'react';
import "./Footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
    return (
        <footer className="container-fluid footer pt-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-8 pt-3">
                        <img src={logo} className="w-25" alt="" />
                    </div>
                    <div className="col-sm-12 col-md-2 pt-3">
                        <ul className="list-unstyled text-white">
                            <li>About Online Food</li>
                            <li>Read Our Blog</li>
                            <li>Sign Up To Deliver</li>
                            <li>Add Your Restaurant</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-2 pt-3">
                        <ul className="list-unstyled text-white">
                            <li>Get Help</li>
                            <li>Read FAQ</li>
                            <li>View All Cities</li>
                            <li>Restaurants Near Me</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex justify-content-between pt-3">
                    <small className="text-secondary"> Copyright &copy; 2021 Red Onion </small>
                    <ul className="list-unstyled list-group list-group-horizontal text-white">
                        <li className="px-2"> Privacy Policy </li>
                        <li className="px-2"> Terms of Use </li>
                        <li className="px-2"> Pricing </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;