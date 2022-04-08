import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../App.scss";

// import required modules
import { Pagination, Navigation } from "swiper";

// IMG
import thunder from '../img/thunder.png'
import clothing from '../img/clothing.png'
import shoes from '../img/shoes.png'
import accessories from '../img/accessories.png'
import activewear from '../img/activewear.png'
import gift from '../img/gift.png'
import ring from '../img/ring.png'

export default function QSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={thunder}/>
          <span>New In</span>
        </SwiperSlide>

        <SwiperSlide>
          <img src={clothing}/>
          <span>Clothing</span>
        </SwiperSlide>

        <SwiperSlide>
          <img src={shoes} />
          <span>Shoes</span>
        </SwiperSlide>

        <SwiperSlide>
          <img src={accessories} />
          <span>Accessories</span>
        </SwiperSlide>

        <SwiperSlide>
          <img src={activewear} />
          <span>Activewear</span>
        </SwiperSlide>

        <SwiperSlide>
          <img src={gift} />
          <span>Gifts & Living</span>
        </SwiperSlide>

        <SwiperSlide>
          <img src={ring} />
          <span>Inspiration</span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
