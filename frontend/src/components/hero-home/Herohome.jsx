import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import about from '../../img/about.jpg'
import bite from '../../img/bite.jpg'
import coping from '../../img/coping.jpg'

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

import "./styles.scss";

// import required modules
import { Pagination } from "swiper";

export default function Herohome() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>


          <img src={coping} alt="" />



        </SwiperSlide>
        <SwiperSlide><img src={about} alt="" /></SwiperSlide>
        <SwiperSlide><img src={about} alt="" /></SwiperSlide>
        <SwiperSlide><img src={about} alt="" /></SwiperSlide>
        <SwiperSlide><img src={about} alt="" /></SwiperSlide>
        <SwiperSlide><img src={about} alt="" /></SwiperSlide>
        <SwiperSlide><img src={about} alt="" /></SwiperSlide>
        <SwiperSlide><img src={about} alt="" /></SwiperSlide>

      </Swiper>
    </>
  );
}