import React from 'react';

const Checkout = () => {
  return (
    <>
      <div className="flex pb-10 items-center">
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
    </>
  );
};

export default Checkout;
