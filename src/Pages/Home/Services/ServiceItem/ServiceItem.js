/* eslint-disable react/prop-types */
import React from 'react';

const ServiceItem = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div>
      <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{title}</h2>
          <p className="text-red-500 font-semibold">price : ${price}</p>
          <div className="card-actions justify-end">
            <button className="font-semibold hover:text-white  px-4  bg-transparent hover:bg-red-500 text-red-500 border border-red-500 hover:border-transparent rounded h-12  ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
