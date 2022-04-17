import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import logImage from "./image/logo.svg";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const getUserEmail = (e) => {
    setEmail(e.target.value)
  };
  const getUserPassword = (e) => {
      setPassword(e.target.value);
  };
  const getLogIn = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };
  const [sendEmailVerification, sending] =
    useSendEmailVerification(auth);
  if (sending) {
    return <p>Sending...</p>;
  }

  return (
    <div className="w-4/5 mx-auto p-4">
      <div className="bg-stone-600 w-4/5 mx-auto rounded-xl shadow-2xl">
        <img className="mx-auto m-2 p-2 w-1/3" src={logImage} alt="logo" />
        <h1 className="md:text-3xl text-xl font-semibold text-center text-gray-50 m-2">
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
          <div className="flex justify-center m-2">
            <button
              className="btn bg-lime-400 rounded-xl w-1/3 p-2 text-center"
              onClick={async () => {
                await sendEmailVerification();
                alert("Sent email");
              }}
            >
              Verify email
            </button>
          </div>
        </form>
        <p className="text-center text-gray-50 p-4">
          New to here?
          <span className="btn">Please Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
