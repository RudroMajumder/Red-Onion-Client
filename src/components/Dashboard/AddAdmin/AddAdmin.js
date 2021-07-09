import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://secret-woodland-60592.herokuapp.com/addAdmin",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(result =>{
            if(result){
                alert("Admin Added Successfully");
                window.location.reload(true);
            }
    });
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 mt-5 ">
                    <h2>Add New  Admin</h2>
                    <h4 className="mt-3"> Admin Email</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input  {...register("email", { required: true })} className="form-control mt-3 w-50"/>
                        {errors.email && <span className="text-danger">This field is required</span>}<br/>

                        <input type="submit" className="mt-3 btn btn-success"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;