import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Form.css';

const DetailsForm = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [deliveryDetails,setDeliveryDetails] = useState();

  const onSubmit = data => {
    //   console.log(data);
      setDeliveryDetails(data);
      props.handleFormSubmit(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("door", { required: true })} className="form-control form mb-4" placeholder="Deliver To Door"/>
                {errors.door && <span>This field is required</span>}
                
                <input {...register("road", { required: true })} className="form-control form mb-4" placeholder="Road No"/>
                {errors.road && <span>This field is required</span>}

                <input {...register("flat", { required: true })} className="form-control form mb-4" placeholder="Flat / Floor No "/>
                {errors.flat && <span>This field is required</span>}

                <input {...register("business", { required: true })} className="form-control form mb-4" placeholder="Business Name"/>
                {errors.business && <span>This field is required</span>}


                <textarea className="form-control form mb-4"  {...register("address", { required: true })} placeholder="Address"/>
                {errors.address && <span>This field is required</span>}

                <input type="submit" className="btn submit-btn"/>
            </form>
        </div>
    );
};

export default DetailsForm;