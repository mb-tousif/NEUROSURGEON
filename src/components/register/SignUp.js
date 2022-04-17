import React, { useState } from "react";
import logImage from "./image/signUp.png";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
      useSignInWithGoogle(auth);

     const getUserEmail = (e) => {
       setEmail(e.target.value);
     };
     const getUserPassword = (e) => {
       setPassword(e.target.value);
     };
     const getSignIn = (e) => {
       e.preventDefault();
       console.log(email, password);
       createUserWithEmailAndPassword(email,password)
     };

     if (googleError) {
       return (
         <div>
           <p>Error: {googleError.message}</p>
         </div>
       );
     }
     if (googleLoading) {
       return <p>Loading...</p>;
     }
     if (googleUser) {
       return (
         <div>
           <p>Signed In User: {googleUser.email}</p>
         </div>
       );
     }
  return (
    <div className="w-4/5 mx-auto p-4">
      <div className="bg-slate-500 w-4/5 mx-auto rounded-xl shadow-xl">
        <img className="mx-auto m-2 p-2 w-1/3" src={logImage} alt="logo" />
        <h1 className="md:text-3xl text-xl font-semibold text-center text-gray-50 m-2">
          Register Now! <span className="text-red-600">&#9997;</span>
        </h1>
        <form onSubmit={getSignIn}>
          <div className="flex justify-center m-2 text-gray-50">
            <label htmlFor="userEmail">User Email</label>
            <input
              className="h-10 w-3/5 ml-2 rounded-2xl text-center text-black"
              type="email"
              name=""
              onBlur={getUserEmail}
              id="userEmail"
            />
          </div>
          <div className="flex justify-center m-2 text-gray-50">
            <label htmlFor="userPass">Password</label>
            <input
              className="h-10 w-3/5 ml-2 rounded-2xl text-center text-black"
              type="password"
              name=""
              onBlur={getUserPassword}
              id="userPass"
            />
          </div>
          <div className="flex justify-center p-4">
            <button className="bg-lime-200 hover:bg-lime-400 rounded-xl w-1/3 p-2 text-center">
              SIGN UP
            </button>
          </div>
        </form>
        <div className="flex mx-auto mt-4 w-3/5">
          <div className="h-1 m-3 w-1/2 bg-orange-700"></div>
          <div className="">Or</div>
          <div className="h-1 m-3 w-1/2 bg-orange-700"></div>
        </div>
        <div className="w-3/5 mx-auto pb-4">
          <div className="flex justify-center m-2">
            <button
              onClick={() => signInWithGoogle()}
              className="bg-green-400 hover:bg-green-700 rounded-xl w-2/3 p-2 text-gray-50 text-center"
            >
              Log In with Google
            </button>
          </div>
        </div>
        <p className="text-center text-gray-50 m-2 p-4">
          Already Registered? <span>Please Log In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
