import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Img1 from "../../assets/teslacar.svg";
import Img2 from "../../assets/teslacar2.svg";
import Img3 from "../../assets/teslacar3.svg";
import Img4 from "../../assets/teslacar4.svg";
import "./style.scss"
import 'swiper/css';
import 'swiper/css/navigation';
const ModelS = () => {
  return (
    <>
    <div className="container">
        <div className="carousel-container" style={{ background: 'black', padding: '50px 0', textAlign: 'center' }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            style={{ width: '100%', margin: '0 auto' }}
          >
            <SwiperSlide>
              <img
                src={Img1}
                alt="Model X"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img2}
                alt="Model S"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img3}
                alt="Model 3"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img4}
                alt="Model 3"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ModelS;
