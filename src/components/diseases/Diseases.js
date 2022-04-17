import React from 'react';

const Diseases = ({service}) => {
    const { img, name, description, price } = service;
    return (
      <div className="shadow-2xl bg-zinc-400 ml-2 mb-3 p-3 rounded-2xl">
        <img className="rounded-2xl mx-auto w-72" src={img} alt="DDD" />
        <div className="mx-auto my-auto p-3">
          <h2 className="text-xl font-semibold">Disease Name: {name}</h2>
          <p className='text-justify'><span className="text-xl font-semibold">Description of disease:</span> {description}</p>
          <h4 className='text-xl'>First Visit: &#x09F3;{price}</h4>
        </div>
      </div>
    );
};
export default Diseases;