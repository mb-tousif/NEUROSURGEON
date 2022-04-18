import React, { useState } from "react";
import logImage from "./image/signUp.png";
import logo from "./image/google.svg";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../loading/Loading";
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    createUserWithEmailAndPassword(auth, email, password);
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
      useSignInWithGoogle(auth, { sendEmailVerification:true});
    const navigate = useNavigate();
     const getUserEmail = (e) => {
       setEmail(e.target.value);
     };
     const getUserPassword = (e) => {
       setPassword(e.target.value);
     };
     const getSignIn = (e) => {
       e.preventDefault();
      //  console.log("from Submited",email, password);
     };
  
     if (googleLoading) {
       return <Loading/>
     }
     
  return (
    <div className="w-4/5 mx-auto p-4">
      <div className="bg-slate-500 w-4/5 mx-auto rounded-xl shadow-xl">
        <img className="mx-auto m-2 p-2 w-1/3" src={logImage} alt="logo" />
        <h1 className="md:text-3xl text-xl font-semibold text-center text-gray-50 m-2">
          Register Now &#9997;
        </h1>
        <div className="flex justify-center m-2 text-gray-50">
          <label htmlFor="userEmail">User Email</label>
          <input
            className="h-10 w-3/5 ml-2 rounded-2xl text-center text-black"
            type="email"
            required
            onBlur={getUserEmail}
            id="userEmail"
          />
        </div>
        <div className="flex justify-center m-2 text-gray-50">
          <label htmlFor="userPass">Password</label>
          <input
            className="h-10 w-3/5 ml-2 rounded-2xl text-center text-black"
            type="password"
            required
            onBlur={getUserPassword}
            id="userPass"
          />
        </div>
        <div className="flex justify-center p-4">
          <button
            onSubmit={getSignIn}
            onClick={() => navigate("/login")}
            className="bg-lime-200 hover:bg-lime-400 rounded-xl w-1/3 p-2 text-center"
          >
            SIGN UP
          </button>
        </div>
        <div className="flex mx-auto mt-4 w-3/5">
          <div className="h-1 m-3 w-1/2 bg-orange-700"></div>
          <div className="">Or</div>
          <div className="h-1 m-3 w-1/2 bg-orange-700"></div>
        </div>
        <div className="w-3/5 mx-auto pb-4">
          <div className="flex justify-center m-2">
            <button
              className="bg-green-400 flex justify-evenly hover:bg-green-700 rounded-xl w-2/3 p-2 text-gray-50 text-center"
              onClick={()=>signInWithGoogle()}
            >
              <img src={logo} alt="logo" /> Log In with Google
            </button>
          </div>
        </div>
        <p className="text-center text-gray-50 m-2 p-4">
          Already Registered?<span className="hover:bg-lime-200 hover:text-black ml-2 p-2 rounded-2xl" onClick={() => navigate("/login")}>Please Log In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

