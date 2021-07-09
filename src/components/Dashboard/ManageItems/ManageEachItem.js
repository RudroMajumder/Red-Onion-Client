import React from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";


const ManageEachItem = ({food,handleDelete}) => {
    const {name,imgURL,price,_id} = food;
    // console.log()
    const deleteItem = (id) =>{
        handleDelete(id);
    }
    return (
        
        <div className="col-md-3 col-sm-12 mt-5 feature">
            <div className="card border-0">
                <img src={imgURL} className="w-25" alt="" />
                <div className="card-body">
                <h5 className="mt-2 text-dark"> {name} </h5>
                    <p className="text-dark text-center">Lorem ipsum dolor sit amet.</p>
                    <div className="d-flex justify-content-between">
                        <h5 className="text-dark"> $ {price} </h5>
                        <button  onClick={()=>deleteItem(_id)} className="btn btn-danger">
                             <RiDeleteBin2Fill size={20} />  Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageEachItem;