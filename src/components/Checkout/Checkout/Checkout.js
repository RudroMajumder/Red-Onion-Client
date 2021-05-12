import React,{useState} from 'react';
import './Checkout.css';
import DetailsForm from '../DeliverDetails/DetailsForm';
import {FaMinus,FaPlus} from 'react-icons/fa';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { Link } from 'react-router-dom';

const Checkout = (props) => {
    const [paymentSuccess,setPaymentSuccess] = useState(false);

    const handleFormSubmit = (data) =>{
        console.log(data)
        props.handleDeliverDetails(data);
    }
    const handlePaymentSuccess = (paymentId) =>{
        console.log(paymentId);
        props.paymentSuccess(paymentId);
        setPaymentSuccess(true);
    }
    const subTotal = props.cart.reduce((previousTotal,currentTotal)=>{
        return previousTotal + (currentTotal.price * currentTotal.quantity);
    },0)
    const tax = (subTotal * 10) / 100;
    const total = subTotal + tax;
    return (
        <section className="checkout-container mt-5 mb-5">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12" style={{display:(props.deliveryDetails)?"none":"block"}}>
                        <h3> Edit Delivery Details </h3>
                        <hr/>
                        <DetailsForm handleFormSubmit={handleFormSubmit}/>
                    </div>


                    <div style={{display:(props.deliveryDetails)?"block":"none"}} className="col-md-6 col-sm-12 ">
                        <h2 className="mb-5"> Pay Here</h2>
                        <ProcessPayment handlePayment={handlePaymentSuccess}/>
                    </div>


                    <div className="col-md-6 col-sm-12" >
                        <p><big> From <strong> Red Onion Foods </strong> </big></p>
                        <p> Arriving within 20-30 minutes.</p>
                        {
                            props.cart.map(item =>
                                <div className=" d-flex align-items-center justify-content-between items-container mt-3 p-2">
                                    <div className="ms-2"><img src={item.imgURL} style={{width:"100px"}} alt="" /></div>
                                    <div className="ms-1 text-left w-100">
                                        <p > {item.name} </p>
                                        <p style={{color:"#DC3545"}}><big> $ {item.price} </big></p>
                                        <p><small> Free Delivery </small></p>
                                    </div>
                                    <div className="ms-5 d-flex align-items-center ">
                                        <button className="btn" ><FaMinus className=" control-btn" /> </button>
                                        <span className="ms-3 me-3">{item.quantity}</span>
                                        <button className="btn"><FaPlus className=" control-btn" /> </button>
                                    </div>
                                </div>
                                )
                        }
                        <div className = "payment-container mt-5 mb-3 p-5">
                            <p className="d-flex justify-content-between"> <span> Subtotal - {props.cart.length} items</span> <span>: {subTotal}</span> </p>
                            <p className="d-flex justify-content-between"> <span>Tax </span> <span>: {tax.toFixed(2)}</span></p>
                            <p className="d-flex justify-content-between"> <span>Total </span> <span>: {total.toFixed(2)} </span></p>
                        </div>
                        <div className="text-center">
                                <Link to="/orderSummary" >
                                    <button className={(props.cart.length && paymentSuccess)?"btn submit-btn ":"btn btn-secondary disabled"}>
                                    {props.cart.length?"Place Order":"Nothing to Check Out"}
                                    </button>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;