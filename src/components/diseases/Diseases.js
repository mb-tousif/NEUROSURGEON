import React from 'react';
import { useNavigate } from 'react-router-dom';

const Diseases = ({service}) => {
    const { img, name, description, price } = service;
    const navigate = useNavigate()
    return (
      <div className="shadow-2xl bg-zinc-400 ml-2 mb-3 p-3 rounded-2xl">
        <img className="rounded-2xl hover:skew-y-3 mx-auto w-72" src={img} alt="DDD" />
        <div className="mx-auto my-auto p-3">
          <h2 className="text-xl hover:animate-pulse  font-semibold">Disease Name: {name}</h2>
          <p className='text-justify'><span className="text-xl font-semibold">Description of disease:</span> {description}</p>
          <h4 className='text-xl'>First Visit: &#x09F3;{price}</h4>
        </div>
        <div className="flex justify-center">
          <button onClick={() => navigate("/checkout")} className='bg-lime-400 hover:animate-pulse  p-3 rounded-2xl'>Check Out</button>
        </div>
      </div>
    );
};
export default Diseases;