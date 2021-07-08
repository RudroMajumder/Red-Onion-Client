import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Checkout from "./components/Checkout/Checkout/Checkout";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";
import OrderSummary from "./components/OrderSummary/OrderSummary";


export const UserContext = createContext();

function App() {

  const [cart,setCart] = useState([]);
  const [deliveryDetails,setDeliveryDetails] = useState();
  const [paymentId,setPaymentId] = useState();
  const [orderId,setOrderID] = useState();
  

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
    const handleOrder= (id) =>{
      setOrderID(id);
      setCart([]);
    }
    
    const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]} >
      <Router>
            <Navbar cart={cart}/>
        <Switch>
          <Route exact path="/">
            <Home cart={cart}/>
          </Route>
          <Route path="/dashboard"> 
            <Dashboard/>
          </Route>
          <PrivateRoute path="/food/:id">
            <FoodDetails cart={cart} handleCart={handleCart} />
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <Checkout
              cart={cart}
              handleDeliverDetails={handleDeliverDetails}
              handleOrder={handleOrder}
            />
          </PrivateRoute>
          <PrivateRoute path="/orderSummary">
          <OrderSummary orderId={orderId} deliveryDetails={deliveryDetails} />
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </UserContext.Provider>
  );
}

export default App;
