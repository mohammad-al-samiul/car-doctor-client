/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import slideImage from '../../Assets/images/checkout/checkout.png';
import { AuthContext } from '../../Contexts/AuthProvider';
import './Checkout.css';

const Checkout = () => {
  const { title, img, _id, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || 'unregistered';
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      serviceId: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      img,
      phone,
      message
    };
    fetch('https://genius-car-server-ten-self.vercel.app/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        alert('Order placed Succesfully');
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <div>
      <div className="px-4 ">
        <div className="relative w-full ">
          <div className=" w-full image-gradient">
            <img src={slideImage} className="w-full " />
          </div>

          <div className="absolute justify-start align-center transform -translate-y-1/2 top-1/4 left-5  px-24 w-2/4 my-10">
            <h1 className="text-white font-bold text-4xl pt-10">Check Out</h1>
          </div>
        </div>
      </div>

      <form onSubmit={handlePlaceOrder}>
        <div className="flex pb-10 items-center mt-10">
          <div className="form-control w-full px-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered input-accent \"
            />
          </div>
          <div className="form-control w-full pr-4">
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="input input-bordered input-accent w-full "
            />
          </div>
        </div>

        <div>
          <div>
            <div className="flex pb-10 items-center">
              <div className="form-control w-full px-4 ">
                <input
                  type="phone"
                  name="phone"
                  placeholder="Your Phone"
                  className="input input-bordered input-accent "
                />
              </div>
              <div className="form-control w-full pr-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="input input-bordered input-accent w-full"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
            </div>
            <div className="px-4 pb-4">
              <textarea
                name="message"
                className="textarea textarea-accent w-full h-52"
                placeholder="Your Message"></textarea>
            </div>
            <div className="px-3 pb-10">
              <button className="font-semibold text-white bg-red-500  h-12 w-full rounded-lg ">
                Order Confirm
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
