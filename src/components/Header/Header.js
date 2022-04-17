import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png'

const Header = () => {
    return (
      <div className='overflow-hidden font-bold bg-slate-600 flex'>
        <div className="md:flex md:justify-center ml-4">
            <img className='mx-auto my-auto w-18 h-8' src={logo} alt="logo" />
            <h1 className='p-3'>NEUROSURGEON</h1>
        </div>
        <div className="mx-auto my-auto">
        <Link className='mr-4 p-3' to="/home">Home</Link>
        <Link className='mr-4 p-3' to="/blogs">Blogs</Link>
        <Link className='mr-4 p-3' to="/about">About</Link>
        <Link className='mr-4 p-3' to="/login">Sign In</Link>
        <Link className='mr-4 p-3' to="/checkout">Check Out</Link>
        </div>
      </div>
    );
};

export default Header;