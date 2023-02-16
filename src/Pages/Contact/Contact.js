import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_39sctkt', 'template_tqfxo2a', form.current, '7eCTfKxxDMIssrp9I').then(
      (result) => {
        console.log(result.text);
        alert('Email Sent');
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-center text-gray-800">
          <div className="max-w-[700px] mx-auto px-3 lg:px-6">
            <h2 className="text-3xl font-bold mb-12">Contact us</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group mb-6">
                <input
                  type="text"
                  name="user_name"
                  className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                  name="user_email"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none
        "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  name="message"
                  placeholder="Message"></textarea>
              </div>

              <button
                type="submit"
                className="
        w-full
        px-6
        py-2.5
        bg-red-500
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-red-500 hover:shadow-lg
        focus:bg-red-500 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-red-500 active:shadow-lg
        transition
        duration-150
        ease-in-out">
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
