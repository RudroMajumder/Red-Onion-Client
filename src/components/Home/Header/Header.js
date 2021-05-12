import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <section className="header">
            <div className="container">
                <h1 className=" text-center header-h1">Best Food Waiting For Your Belly</h1>
                <div className="col-md-6 my-5 mx-auto search-container d-flex justify-content-center">
                    <input type="text" className="search ps-5 form-control" placeholder="Search Food Here"/>
                    <button className="search-button">Search</button>
                </div>
            </div>
        </section>
    );
};

export default Header;