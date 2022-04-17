import React from 'react';
import useService from '../../Hooks/useService';
import Diseases from '../diseases/Diseases';
import SocialAwareness from '../SocialAwareness/SocialAwareness';
import Banner from '../topBanner/Banner';

const HomeMain = () => { 
  const [services] = useService();
    return (
      <div>
        <Banner />
        <h2 className='md:text-4xl m-4 font-semibold'>Doctor Major Practice Areas</h2>
        <div className="md:grid md:grid-cols-3 md:gap-2">
          {services?.map((service) => (
            <Diseases key={service.id} service={service}></Diseases>
          ))}
        </div>
        <p className="md:text-4xl text-slate-800 m-3 font-semibold text-center">&#10003; Disease Awareness Programme</p>
        <SocialAwareness/>
      </div>
    );
};

export default HomeMain;