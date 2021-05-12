import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";

function App() {
  const [cart,setCart] = useState([]);
  const handleCart = (food) =>{
    // console.log(id)
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
  console.log(cart)
  return (
    <div >
      <Router>
            <Navbar cart={cart}/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/dashboard"> 
            <Dashboard/>
          </Route>
          <Route path="/food/:id">
            <FoodDetails cart={cart} handleCart={handleCart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
