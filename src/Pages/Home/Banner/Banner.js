import React from 'react';
import slide1 from '../../../Assets/images/banner/1.jpg';
import slide2 from '../../../Assets/images/banner/2.jpg';
import slide3 from '../../../Assets/images/banner/3.jpg';
import slide4 from '../../../Assets/images/banner/4.jpg';
import slide5 from '../../../Assets/images/banner/5.jpg';
import slide6 from '../../../Assets/images/banner/6.jpg';
import './Banner.css';
import BannerItem from './BannerItem/BannerItem';

const bannerData = [
  {
    image: slide1,
    prev: 6,
    id: 1,
    next: 2
  },
  {
    image: slide2,
    prev: 1,
    id: 2,
    next: 3
  },
  {
    image: slide3,
    prev: 2,
    id: 3,
    next: 4
  },
  {
    image: slide4,
    prev: 3,
    id: 4,
    next: 5
  },
  {
    image: slide5,
    prev: 4,
    id: 5,
    next: 6
  },
  {
    image: slide6,
    prev: 5,
    id: 6,
    next: 1
  }
];

const Banner = () => {
  return (
    <>
      <div className="carousel w-full rounded-xl">
        {bannerData.map((slide) => (
          <BannerItem key={slide.id} slide={slide}></BannerItem>
        ))}
      </div>
    </>
  );
};

export default Banner;
