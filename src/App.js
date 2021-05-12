import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Checkout from "./components/Checkout/Checkout/Checkout";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Login from "./components/Login/Login";
import OrderSummary from "./components/OrderSummary/OrderSummary";

function App() {

  const [cart,setCart] = useState([]);
  const [deliveryDetails,setDeliveryDetails] = useState();
  const [paymentId,setPaymentId] = useState();

  const handleCart = (food) =>{
    const isInCart = cart.find(crt=> crt._id === food._id);
    const newCart = [...cart,food];
    setCart(newCart);
    if(isInCart){
        const reamingCarts = cart.filter(crt => cart._id !== food._id);
        setCart(reamingCarts);
      }else{
        const newCart = [...cart,food]
        setCart(newCart);
      }
  }

    const handleDeliverDetails = (data) =>{
      setDeliveryDetails(data);
      console.log(data);
    }
    const paymentSuccess = (paymentId) =>{
      setPaymentId(paymentId)
    }
    // console.log(paymentId)
  return (
    <div >
      <Router>
            <Navbar cart={cart}/>
        <Switch>
          <Route exact path="/">
            <Home cart={cart}/>
          </Route>
          <Route path="/dashboard"> 
            <Dashboard/>
          </Route>
          <Route path="/food/:id">
            <FoodDetails cart={cart} handleCart={handleCart} />
          </Route>
          <Route path="/checkout">
            <Checkout cart={cart} handleDeliverDetails={handleDeliverDetails} deliveryDetails={deliveryDetails} paymentSuccess={paymentSuccess}/>
          </Route>
          <Route path="/orderSummary">
            <OrderSummary/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
