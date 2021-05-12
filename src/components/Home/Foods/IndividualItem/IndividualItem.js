import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css'

const IndividualItem = ({singleItem}) => {
    const {name,price,imgURL,_id} = singleItem;
    // console.log(_id)
    return (
        
        <div className="col-md-4 col-sm-12 mt-5 items">
            
            <Link to={"/food/"+_id} className="nav-link">
                <div className="text-center">
                    <img src={imgURL} className="w-50" alt="" />
                </div>
                <div className="text-center pb-3">
                    <h5 className="mt-2 text-dark"> {name} </h5>
                    <p className="text-dark">Lorem ipsum dolor sit amet.</p>
                    <h5 className="text-dark"> $ {price} </h5>
                </div>
             </Link>
        </div>
    );
};

export default IndividualItem;