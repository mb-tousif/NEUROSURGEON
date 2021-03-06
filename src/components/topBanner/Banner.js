import React from 'react';
import Rumi from '../../image/rumi.jpg'

const Banner = () => {
    return (
      <div className="md:grid md:grid-cols-2 p-3">
        <div className="text-center mx-auto my-auto">
          <h1 className="md:text-4xl text-xl font-bold">
            Dr. Jalal Uddin Muhammad Rumi
          </h1>
          <p>MBBS, MS (General Surgery), MS (Neurosurgery)</p>
          <p>
            Fellowship Training in Epilepsy & Functional <br />
            Neurosurgery (SCTIMST-India)
          </p>
          <p>Hands on Training in Functional Neurosurgery (USA)</p>
          <p>Trained in Functional Neurosurgery (Oxford, UK)</p>
          <p className="font-bold">Asst. Professor, Neurosurgery <br /> NINH Agargaon, Dhaka, Bangladesh.</p>
        </div>
        <img className="rounded-xl md:p-3 rounded-3xl shadow-2xl mx-auto my-auto hover:scale-105" src={Rumi} alt="Dr.Rumi"/>
      </div>
    );
};

export default Banner;