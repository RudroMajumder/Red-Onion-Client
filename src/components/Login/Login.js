import React,{useContext, useState} from 'react';
import './Login.css';
import {FaFacebook,FaGoogle} from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { createNewUser, firebaseInit,handleFbSignIn,handleGoogleSignIn, signIn } from './LoginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [user,setUser] = useState();
    const [userInfo,setUserInfo] = useState();
    const [newUser,setNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    firebaseInit();

    const googleSignIn = () =>{
        handleGoogleSignIn()
        .then(res=>{
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        })
    }
    const facebookSignIn = () =>{
        handleFbSignIn()
        .then(res =>{
             setUser(res);
             setLoggedInUser(res);
             history.replace(from);
        })
    }
    const handleBlur = e =>{
        const newInfo = {...userInfo};
         newInfo[e.target.name] = e.target.value;
         setUserInfo(newInfo);
    }
    const handleClick = () => {
        if(newUser){
            createNewUser(userInfo.name,userInfo.email,userInfo.password)
            .then(res=>{
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
        }else{
            signIn(userInfo.email, userInfo.password)
            .then( res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
        }
    };
console.log(user);
    return (
        <section className="login py-5">
            <div className="login-container  py-5">
                <form onSubmit={handleSubmit()}>
                {newUser && <div>
                    <input {...register("name", { required: true })} className="form-control  mt-3 " placeholder="Your Name" onBlur={handleBlur}/>
                {errors.name && <span>This field is required</span>}
                    </div>}

                <input {...register("email", { required: true })} className="form-control  mt-3 " placeholder="Your Email" onBlur={handleBlur}/>
                {errors.email && <span>This field is required</span>}

                <input {...register("password", { required: true })} className="form-control  mt-3 " placeholder="Password" onBlur={handleBlur}/>
                {errors.password && <span>This field is required</span>}

                {newUser && <div>
                    <input {...register("confirmPassword", { required: true })} className="form-control  mt-3 " placeholder="Confirm Password" onBlur={handleBlur}/>
                {errors.confirmPassword && <span>This field is required</span>}
                    </div>}
                <br/>
                <div onClick={()=>setNewUser(!newUser)} className="mt-3">
                    <p> 
                        <small>
                         {newUser?"Already have an account":"Don't have  account"} ? 
                         <span className="span text-danger">{newUser?" Sign in":" Create Account"} </span>
                        </small>
                    </p>
                </div>
                <div >
                    <button className="mt-3 submit-btn p-2 click w-100" onClick={handleClick}> {newUser?"Sign up":"Sign in"}</button>
                </div>

                <button className="btn social mt-3 w-100" onClick={googleSignIn}> <FaGoogle/> Sign in with Google </button>
                <button className="btn social mt-3 w-100" onClick={facebookSignIn}> <FaFacebook/> Sign in with Facebook </button>
            </form>
            </div>
        </section>
    );
};

export default Login;