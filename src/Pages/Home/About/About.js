/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import parts from '../../../Assets/images/about_us/parts.jpg';
import person from '../../../Assets/images/about_us/person.jpg';
import './About.css';

const About = () => {
  return (
    <div>
      <div className="hero rounded-xl mt-16">
        <div className="hero-content flex-col lg:flex-row p-0">
          <div className="w-1/2 relative ">
            <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt="" />
            <img
              src={parts}
              className="absolute rounded-lg shadow-2xl w-3/5 right-5 top-1/2 border-8 about-image"
              alt=""
            />
          </div>
          <div className="w-1/2">
            <div>
              <h1 className="text-5xl font-bold my-5 pt-10">
                <span className="text-red-500 font-bold text-2xl mb-3">About Us</span> <br />
                We are qualified <br /> & of experience <br /> in this field
              </h1>
              <p className="py-4">
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which
                don't look even slightly believable.
              </p>
              <p className="py-4 ">
                the majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable.
              </p>
              <button className="btn btn-primary">Get More info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
