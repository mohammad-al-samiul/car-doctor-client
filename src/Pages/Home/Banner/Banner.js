import React from 'react';
import slide1 from '../../../Assets/images/banner/1.jpg';
import slide2 from '../../../Assets/images/banner/2.jpg';
import slide3 from '../../../Assets/images/banner/3.jpg';
import slide4 from '../../../Assets/images/banner/4.jpg';
import slide5 from '../../../Assets/images/banner/5.jpg';
import slide6 from '../../../Assets/images/banner/6.jpg';

const Banner = () => {
  return (
    <>
      <div className="carousel w-full rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide1} className="w-full" />

          <div className="absolute flex justify-start transform -translate-y-1/2 left-5 top-1/4 px-24">
            <h1 className="text-6xl font-bold text-white">
              Affordable <br />
              Price For Car <br />
              Servicing
            </h1>
          </div>

          <div className="absolute flex justify-start transform -translate-y-1/2 left-5 top-2/4 px-24 w-2/4">
            <h1 className="text-lg  text-white">
              There Are Many Variations Of Passages Of Available, But The Majority Have Sufferex
              Alternation In Some Form
            </h1>
          </div>
          <div className="absolute flex justify-start transform -translate-y-1/2 left-5 top-3/4 px-24 w-2/5 ">
            <button className="font-semibold hover:text-white  px-4  bg-transparent hover:bg-red-500 text-red-500 border border-red-500 hover:border-transparent rounded h-12  mr-5">
              Discover More
            </button>
            <button className="text-white font-semibold hover:text-white px-4  bg-transparent hover:bg-slate-600  border border-slate-500 hover:border-transparent rounded h-12  ">
              Latest Project
            </button>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle mr-4  border-none">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-red-500 hover:bg-red-500 border-none">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slide4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={slide5} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={slide6} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
