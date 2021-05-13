import React from 'react';
import map from '../../images/map.png';
import rider from '../../images/Image/Group 1151.png';

const OrderSummary = ({deliveryDetails,orderId}) => {
    return (
        <section className="mt-5">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7  col-sm-12">
                        <img src={map} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-4 offset-1 col-sm-12">
                        <div className="mt-5">
                            <img src={rider} className="w-25" alt="" />
                        </div>
                        <div className="mt-5">
                            <h4> Your Location </h4>
                            <p> {deliveryDetails.address && deliveryDetails.address} </p>

                            <h4> Shop Address </h4>
                            <p> Gulshan Plaza </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderSummary;