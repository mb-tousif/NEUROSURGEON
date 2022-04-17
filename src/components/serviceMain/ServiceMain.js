import React from 'react';
import useService from "../../Hooks/useService";
import Services from "../services/Services";
const ServiceMain = () => {
    const [services] = useService();
    return (
      <div>
        {services.map((service) => (
          <Services key={service.id} service={service}></Services>
        ))}
      </div>
    );
};

export default ServiceMain;