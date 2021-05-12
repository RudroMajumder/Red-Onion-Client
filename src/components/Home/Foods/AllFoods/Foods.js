import React, { useEffect, useState } from 'react';
import { li } from 'react-router-dom';
import './Foods.css'
import IndividualItem from '../IndividualItem/IndividualItem';

const Foods = () => {
    const [foods,setFoods] = useState([]);
    const [selectedMenu,setSelectedMenu] = useState("breakfast");

    useEffect(()=>{
        fetch('http://localhost:5000/allFoods')
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
                <div className="row mt-5">
                    {
                        foods.map(singleItem=><IndividualItem singleItem={singleItem}></IndividualItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Foods;