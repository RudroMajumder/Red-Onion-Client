import React, { useEffect, useState } from 'react';
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
    const [orders,setOrders] = useState([]);
    const sortedOrders = orders.reverse();
    useEffect(()=>{
        fetch("https://secret-woodland-60592.herokuapp.com/allOrders",{
            method:"GET",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify()
        })
        .then(res=>res.json())
        .then(data => setOrders(data))
    },[orders.length])
    console.log(orders)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <h2>View All Orders</h2>
                    <table class="table  table-bordered border-success">
                        <thead>
                            <tr>
                            <th >Sr No.</th>
                            <th >Customer Email</th>
                            <th >Order ID</th>
                            <th >Payment Id</th>
                            <th >Item</th>
                            <th >Price</th>
                            <th >Quantity</th>
                            <th >Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order,index )=>
                                    <tr>
                                        <td> {index+1} </td>
                                        <td> {order.email}</td>
                                        <td> {order._id}</td>
                                        <td> {order.paymentId}</td>
                                        <td> {order.orderedItems[0].name}</td>
                                        <td> $ {order.orderedItems[0].price}</td>
                                        <td> {order.orderedItems[0].quantity}</td>
                                        <td> $ {order.total}</td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;