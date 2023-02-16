/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem/ServiceItem';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-20">
      <div className="text-center pb-10 mt-16">
        <h3 className="text-orange-500 font-bold text-xl">Services</h3>
        <h2 className="text-4xl font-bold pb-5">Our Service Area</h2>
        <p className="pb-10">
          the majority have suffered alteration in some form, by injected humour, or randomised{' '}
          <br />
          words which don't look even slightly believable.{' '}
        </p>
      </div>
      <div className="mx-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-y-9">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default Services;
