/* eslint-disable react/prop-types */
import React from 'react';

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <>
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousel-image">
          <img src={image} className="w-full" />
        </div>

        <div>
          <div className="absolute justify-start align-center transform -translate-y-1/2 top-2/4 left-5  px-24 w-2/4">
            <h1 className="text-6xl font-bold text-white pb-6">
              Affordable <br />
              Price For Car <br />
              Servicing
            </h1>
            <p className="text-lg  text-white">
              There Are Many Variations Of Passages Of Available, But The Majority Have Sufferex
              Alternation In Some Form
            </p>
          </div>

          <div className="absolute flex justify-start transform -translate-y-1/2 left-5 top-3/4 px-24 w-2/4 ">
            <button className="font-semibold hover:text-white  px-4  bg-transparent hover:bg-red-500 text-red-500 border border-red-500 hover:border-transparent rounded h-12  mr-5">
              Discover More
            </button>
            <button className="text-white font-semibold hover:text-white px-4  bg-transparent hover:bg-slate-600  border border-slate-500 hover:border-transparent rounded h-12  ">
              Latest Project
            </button>
          </div>
          {/* <div className="absolute flex justify-start transform -translate-y-1/2 left-5 top-3/4 px-24 w-2/5 "></div> */}
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`slide${prev}`} className="btn btn-circle mr-4  border-none">
            ❮
          </a>
          <a
            href={`#slide${next}`}
            className="btn btn-circle bg-red-500 hover:bg-red-500 border-none">
            ❯
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerItem;
