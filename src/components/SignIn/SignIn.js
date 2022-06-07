import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import logImage from "./image/logo.svg";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const getUserEmail = (e) => {
    setEmail(e.target.value)
  };
  const getUserPassword = (e) => {
      setPassword(e.target.value);
  };

   if (loading) {
     return <p>Loading...</p>;
   }
  const getLogIn = (e) => {
    e.preventDefault();
    // console.log(email, password);
    signInWithEmailAndPassword(email, password);
    navigate("/checkout");
  };

  return (
    <div className="w-4/5 mx-auto p-4">
      <div className="bg-stone-600 w-4/5 mx-auto rounded-xl shadow-2xl">
        <img className="mx-auto m-2 p-2 w-1/3" src={logImage} alt="logo" />
        <h1 className="md:text-3xl text-xl font-semiBold text-center text-gray-50 m-2">
          Sign In <span className="text-lime-600">&#9745;</span>
        </h1>
        <form onSubmit={getLogIn}>
          <input
            className="w-3/5 h-10 bg-slate-400 m-3 flex justify-center rounded-2xl mx-auto text-center text-gray-50"
            type="email"
            onBlur={getUserEmail}
            name="email"
            required
            placeholder="Enter your email"
          />
          <input
            className="w-3/5 h-10 bg-slate-400 m-3 flex justify-center rounded-2xl mx-auto text-center text-gray-50"
            type="password"
            onBlur={getUserPassword}
            name="password"
            required
            placeholder="Enter your password"
          />
          {error && (
            <p className="text-center m-2 text-red-700">{error.message}</p>
          )}
          <div className="flex justify-center">
            <button
              onClick={getLogIn}
              className="btn bg-lime-400 rounded-xl w-1/3 p-2 text-center"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-50 p-4">
          New to here?
          <span className="hover:bg-lime-200 hover:text-black ml-2 p-2 rounded-2xl" onClick={() => navigate("/register")}>
            Please Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
