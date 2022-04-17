import React from 'react';
import useService from '../../Hooks/useService';
import Diseases from '../diseases/Diseases';
import Banner from '../topBanner/Banner';

const HomeMain = () => { 
  const [services] = useService();
    return (
      <div>
        <Banner />
        <h2 className='text-3xl m-4'>Doctor Major Practice Areas</h2>
        <div className="md:grid md:grid-cols-3 md:gap-2">
          {services?.map((service) => (
            <Diseases key={service.id} service={service}></Diseases>
          ))}
        </div>
      </div>
    );
};

export default HomeMain;