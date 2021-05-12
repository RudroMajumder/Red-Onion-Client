import React,{useState} from 'react';
import './Login.css';
import {FaFacebook,FaGoogle} from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { createNewUser, firebaseInit,handleGoogleSignIn } from './LoginManager';

const Login = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const [user,setUser] = useState();
    const [userInfo,setUserInfo] = useState();
    const [newUser,setNewUser] = useState(false);

    firebaseInit();

    const googleSignIn = () =>{
        handleGoogleSignIn()
        .then(res=>{setUser(res)})
    }
    console.log(user);
    const handleBlur = e =>{
        const newInfo = {...userInfo};
         newInfo[e.target.name] = e.target.value;
         setUserInfo(newInfo);
    }
    const handleClick = () => {
        createNewUser(userInfo.name,userInfo.email,userInfo.password)
        .then(res=>{setUser(res)})
    };

    return (
        <section>
            <div className="container">
                <button className="btn" onClick={googleSignIn}> <FaGoogle/> Sign in with Google </button>
                <form onSubmit={handleSubmit()}>
                {newUser && <div>
                    <input {...register("name", { required: true })} className="form-control mt-3 w-75" placeholder="Your Name" onBlur={handleBlur}/>
                {errors.name && <span>This field is required</span>}
                    </div>}

                <input {...register("email", { required: true })} className="form-control mt-3 w-75" placeholder="Your Email" onBlur={handleBlur}/>
                {errors.email && <span>This field is required</span>}

                <input {...register("password", { required: true })} className="form-control mt-3 w-75" placeholder="Password" onBlur={handleBlur}/>
                {errors.password && <span>This field is required</span>}

                {newUser && <div>
                    <input {...register("confirmPassword", { required: true })} className="form-control mt-3 w-75" placeholder="Confirm Password" onBlur={handleBlur}/>
                {errors.confirmPassword && <span>This field is required</span>}
                    </div>}
                <br/>
                <div onClick={()=>setNewUser(!newUser)}>
                    <p>
                         {newUser?"Already have an account":"Don't have an account"} ? 
                         <span className="span text-danger">{newUser?" Sign in":" Create Account"} </span>
                         </p>
                </div>
                <input type="submit" className="mt-3 submit-btn p-2" onClick={handleClick} value={newUser?"Sign up":"Sign in"}/>
            </form>
            </div>
        </section>
    );
};

export default Login;