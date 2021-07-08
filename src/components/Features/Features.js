import React from 'react';
import burger from "../../images/Image/adult-blur-blurred-background-687824.png";
import cook from "../../images/Image/chef-cook-food-33614.png";
import delivery from "../../images/Image/architecture-building-city-2047397.png";
import {FaCar,FaBell,FaTruck} from 'react-icons/fa';
import "./Features.css";

const Features = () => {
    return (
        <section className="mb-5">
            <div className="container ">
                <div className="row mb-3">
                    <div className="col-sm-12 col-md-4 feature">
                        <h2 className="mb-3"> Why you should choose us? </h2>
                        <p> <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae. Voluptates culpa eveniet quibusdam ipsa? </small> </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4 feature">
                        <div className="card border-0">
                        <img src={burger} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><FaCar color={"#f91944"} className="me-2"/> Fast Delivery </h5>
                                <p className="card-text"> <small> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde consectetur eos perferendis ullam distinctio nobis corrupti ipsa dolore debitis reiciendis? </small> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 feature">
                        <div className="card border-0">
                        <img src={cook} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><FaBell color={"#f91944"} className="me-2"/> A Good Auto Responder</h5>
                                <p className="card-text"> <small> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde consectetur eos perferendis ullam distinctio nobis corrupti ipsa dolore debitis reiciendis? </small> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 feature">
                        <div className="card border-0">
                        <img src={delivery} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"> <FaTruck color={"#f91944"} className="me-2"/> Home Delivery </h5>
                                <p className="card-text"> <small> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde consectetur eos perferendis ullam distinctio nobis corrupti ipsa dolore debitis reiciendis? </small> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;