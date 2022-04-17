import React from 'react';

const Services = ({ service }) => {
    const {name,img, price, description} = service;
  return (
    <div className='md:grid md:grid-cols-3'>
        <img src={img} alt="diseaseImage" className='mx-auto my-auto rounded-2xl ' />
        <h4></h4>

    </div>
  );
  };

export default Services;