/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import img from '../../Assets/images/checkout/checkout.png';
import { AuthContext } from '../../Contexts/AuthProvider';
import './Checkout.css';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="px-4 ">
        <div className="relative w-full ">
          <div className=" w-full image-gradient">
            <img src={img} className="w-full " />
          </div>

          <div className="absolute justify-start align-center transform -translate-y-1/2 top-1/4 left-5  px-24 w-2/4 my-10">
            <h1 className="text-white font-bold text-4xl pt-10">Check Out</h1>
          </div>
        </div>
      </div>

      <div className="flex pb-10 items-center mt-10">
        <div className="form-control w-full px-4">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered input-accent "
          />
        </div>
        <div className="form-control w-full pr-4">
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-accent w-full "
          />
        </div>
      </div>

      <div className="flex pb-10 items-center">
        <div className="form-control w-full px-4 ">
          <input
            type="text"
            placeholder="Your Phone"
            className="input input-bordered input-accent "
          />
        </div>
        <div className="form-control w-full pr-4">
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered input-accent w-full"
            defaultValue={user?.email}
            readOnly
          />
        </div>
      </div>
      <div className="px-4 pb-4">
        <textarea
          className="textarea textarea-accent w-full h-52"
          placeholder="Your Message"></textarea>
      </div>
      <div className="px-3 pb-10">
        <button className="font-semibold text-white bg-red-500  h-12 w-full rounded-lg ">
          Order Confirm
        </button>
      </div>
    </div>
  );
};

export default Checkout;
