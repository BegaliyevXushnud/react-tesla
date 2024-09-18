// ModelX.jsx
import React, {useState} from 'react';
import Img1 from "../../assets/mod.png"
import Img2 from "../../assets/modelx.png"
import Img3 from "../../assets/modelx-2.webp"
import Img4 from "../../assets/modelx-3.png"

import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
const ModelX = () => {
const slides = [
  {url:Img2},
  {url:Img1},
  {url:Img3},
  {url:Img4},
]  

const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1: currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const  nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
  
    <div className='max-w-[1400px] h-[560px] w-full m-auto py-2 px-2 relative group '>
    <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full bg-center bg-cover duration-500 '>

    </div>
    <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30}/>
    </div>
    <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide}  size={30}/>
    </div>
    </div>
   
  );
};

export default ModelX;
