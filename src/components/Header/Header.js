import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import logo from '../../image/logo.png'
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = (e)=>{
   e.preventDefault();
   signOut(auth);
  }
    return (
      <div className='overflow-hidden font-bold bg-slate-600 flex'>
        <div className="md:flex md:justify-center ml-4">
            <img className='mx-auto my-auto w-18 h-8' src={logo} alt="logo" />
            <h1 className='p-3'>NEUROSURGEON</h1>
        </div>
        <div className="mx-auto my-auto">
        <Link className='mx-auto p-3' to="/home">Home</Link>
        <Link className='mx-auto p-3' to="/blogs">Blogs</Link>
        <Link className='mx-auto p-3' to="/about">About</Link>
        {
          user ? <button className='font-bold bg-slate-600' onClick={handleSignOut}>Sign Out</button>:<Link className='mx-auto p-3' to="/login">Sign In</Link>
        }
        <Link className='mx-auto p-3' to="/checkout">Check Out</Link>
        </div>
      </div>
    );
};

export default Header;