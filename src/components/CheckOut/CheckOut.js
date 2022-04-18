import React from 'react';
import help from './image/trial-gift.png'
const CheckOut = () => {
    return (
      <div className='grid grid-cols-1'>
        <h1 className='text-xl md:text-3xl text-center md:font-bold md:p-4 text-green-700'>Leading You to Better Health.</h1>
        <img className='w-3/5 mx-auto my-auto' src={help} alt="Help" />
      </div>
    );
};

export default CheckOut;