// ModelX.jsx
import React, { useState } from 'react';
import Img2 from "../../assets/modely-1.png";
import Img1 from "../../assets/model-y.webp";
import Img3 from "../../assets/model-y-3.jpg";

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const ModelX = () => {
  const slides = [
    { url: Img1 },
    { url: Img2 },
    { url: Img3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='max-w-[1400px] h-[560px] w-full m-auto py-2 px-2 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500
          md:bg-auto md:h-100% lg:bg-cover lg:h-100%'
      >
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default ModelX;
