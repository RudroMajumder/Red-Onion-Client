import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import "./AddItem.css";
import Sidebar from '../Sidebar/Sidebar';

const AddItem = () =>{
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [imgURL,setImgURL] = useState();
    const [foodInfo,setFoodInfo] = useState();
    const handleChange = e =>{
        const imgData = new FormData();
        imgData.set("key", "2a82566963b5d6c75debffc55c2ae27f");
        imgData.append("image", e.target.files[0]); 
        axios.post('https://api.imgbb.com/1/upload', imgData)
        .then( res =>{
            setImgURL(res.data.data.display_url);
        })
        .catch(err=> console.log(err))
    }
    const onSubmit = (data,e) => {
        const info = {...data, imgURL:imgURL};
        console.log(info);
        fetch('https://secret-woodland-60592.herokuapp.com/addFood',{
            method:"POST",
            headers:{"Content-type":"application/json",
            'Accept': 'application/json'},
            body:JSON.stringify(info)
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            if(data){
                alert("Item Added Successfully");
                window.location.reload();
            }
        })
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <div className=" mt-5 mb-5">
                        <h2> Add A New Food Item</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h4 className="mt-3"> Food Name:</h4>
                            <input {...register("name", { required: true })} className="form-control mt-3"/>
                            {errors.name && <span className="text-danger">This field is required</span>}
                            
                            <h4 className="mt-3">Food Price:</h4>
                            <input {...register("price", { required: true })} className="form-control mt-3"/>
                            {errors.price && <span className="text-danger">This field is required</span>}

                            <h4 className="mt-3"> Select Food Type</h4>
                            <select {...register("type")} className="form-control mt-3">
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                            </select>
                            <input type="file"  className="form-control mt-5" onChange={handleChange}/>
                            {errors.file && <span className="text-danger">This field is required</span>}

                            <input type="submit" className={imgURL? "btn btn-success mt-5" : "btn btn-secondary mt-5 disabled" }/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default AddItem;