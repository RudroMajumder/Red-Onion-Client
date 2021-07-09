import React, { useEffect, useState } from 'react';
import { li, Link } from 'react-router-dom';
import './Foods.css'
import IndividualItem from '../IndividualItem/IndividualItem';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/core";

const Foods = (props) => {
    const [foods,setFoods] = useState([]);
    const [selectedMenu,setSelectedMenu] = useState("breakfast");
    const override = css`
        display: block;
        margin: 150px auto;
        border-color: red;
        `;

    useEffect(()=>{
        fetch('https://secret-woodland-60592.herokuapp.com/allFoods')
        .then(res=> res.json())
        .then( data => {
            setFoods(data.filter(foodItems=> foodItems.type === selectedMenu));
        })
    },[selectedMenu])
    // console.log(foods)
    return (
        <section className="food-section mt-5 mb-5">
            <div className="container">
                <nav>
                    <ul className="nav d-flex justify-content-center">
                        <li  activeClassName="nav-active" className="nav-item pe-5 options"  onClick={()=> setSelectedMenu('breakfast')} >
                            <span className={selectedMenu==="breakfast"? "menu-active":"inactive"}>Breakfast</span>
                        </li>
                        <li  activeClassName="nav-active" onClick={()=> setSelectedMenu('lunch')} className="nav-item pe-5 options">
                            <span className={selectedMenu==="lunch"? "menu-active":"inactive"}>Lunch</span>
                        </li>
                        <li  activeClassName="nav-active" onClick={()=> setSelectedMenu('dinner')} className="nav-item pe-5 options">
                            <span className={selectedMenu==="dinner"? "menu-active":"inactive"}>Dinner</span>
                        </li>
                    </ul>
                </nav>
                {foods.length?<div className="row mt-5">
                    {
                        foods.map(singleItem=><IndividualItem singleItem={singleItem}></IndividualItem>)
                    }
                </div>:<HashLoader size={50} css={override} className="spinner"/> }
            </div>
            <div className="text-center mt-5">
                 <Link to ="/checkout">
                    <button className={props.cart.length?"btn checkout-btn":"btn btn-secondary disabled"}> Check Out Your Order </button>
                </Link>
            </div>
        </section>
    );
};

export default Foods;