import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ManageEachItem from './ManageEachItem';
import { FcFullTrash } from "react-icons/fc";

const ManageItems = () => {
    const [selectedCategory,setSelectedCategory] = useState("breakfast");
    const [foods,setFoods] = useState([]);
    const handleChange = e =>{
        const value = e.target.value;
        console.log(value);
        setSelectedCategory(value);
    }
    useEffect(()=>{
        fetch('http://localhost:5000/allFoods')
        .then(res=> res.json())
        .then( data => {
            setFoods(data.filter(foodItems=> foodItems.type === selectedCategory));
        })
    },[selectedCategory, foods.length])
    console.log(foods.length);

    const handleDelete = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/delete/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application.json"},
            body:JSON.stringify()
        })
        .then( res => res.json())
        .then( data => console.log(data))
        alert("Deleted Successfully");
        window.location.reload("true");
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <h2> Select Meal Category</h2>
                    <select  className="form-control mt-3 w-25" onChange={handleChange}>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                    <div className="row">
                        {
                            foods.map(food =><ManageEachItem  food={food} key={food._id} handleDelete={handleDelete}></ManageEachItem>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;