import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './FoodDetails.css'
import {FaMinus,FaPlus,FaCartPlus} from 'react-icons/fa';
import { set } from 'react-hook-form';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/core";


const FoodDetails = (props) => {
    const {id} = useParams();
    const [food,setFood] = useState([]);
    const [quantity,setQuantity] = useState(1);
    const [cart,setCart] = useState([]);
    const override = css`
        display: block;
        margin: 150px auto;
        border-color: red;
        `;
    // console.log(id);
    useEffect(()=>{
        fetch('https://secret-woodland-60592.herokuapp.com/foodById/'+id)
        .then(res=>res.json())
        .then(data=>setFood(data[0]))
    },[id])
    console.log(food)
    const addToCart = (id) =>{
        food.quantity = quantity;
        props.handleCart(food);
    }
    // console.log(cart)
    return (
        <div className="container mt-5 mb-5">
             {!food._id?<HashLoader size={50} css={override} className="spinner"/>: 
             <div className="row">
                <div className="col-md-5 col-sm-12 me-5">
                    <h1 className="mb-5"> {food.name} </h1>
                    <p className="mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos est aut assumenda suscipit praesentium, vitae laudantium omnis inventore itaque explicabo alias voluptate doloremque unde obcaecati harum at ea optio mollitia soluta impedit architecto ab ipsa dolore? Iusto tempora officiis distinctio.</p>
                    
                    <div className="d-flex align-items-center mb-5 mt-5">
                        <h1 > $ {food.price} </h1>
                        <div className="ms-5 d-flex align-items-center control">
                            <button className="btn" onClick={()=> setQuantity(quantity-1)}><FaMinus className=" control-btn" /> </button>
                            <span className="ms-3 me-3">{quantity<1? 1: quantity}</span>
                            <button className="btn" onClick={()=> setQuantity(quantity+1)}><FaPlus className=" control-btn" /> </button>
                        </div>
                    </div>
                    <div>
                        <button className="btn cart-btn" onClick={()=>addToCart(food._id)}> Add To Cart <FaCartPlus/></button>
                    </div>
                </div>
                
                    <div className="col-md-6 col-sm-12">
                     <img src={food.imgURL} className="img-fluid" alt="" />
                    </div> 
            </div>}
        </div>
    );
};

export default FoodDetails;