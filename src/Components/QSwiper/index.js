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

// Files
import { useContext } from 'react'

import { ContentsContext } from '../ContentsProvider'

export default function QSwiper() {

  const contents = useContext(ContentsContext)

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
        <SwiperSlide onClick={() => contents.handleChangeContents(`new`)}>
          <img src={thunder}/>
          <span>New In</span>
        </SwiperSlide>

        <SwiperSlide onClick={() => contents.handleChangeContents(`clothing`)}>
          <img src={clothing}/>
          <span>Clothing</span>
        </SwiperSlide>

        <SwiperSlide onClick={() => contents.handleChangeContents(`shoes`)}>
          <img src={shoes} />
          <span>Shoes</span>
        </SwiperSlide>

        <SwiperSlide onClick={() => contents.handleChangeContents(`accessories`)}>
          <img src={accessories} />
          <span>Accessories</span>
        </SwiperSlide>

        <SwiperSlide onClick={() => contents.handleChangeContents(`active`)}>
          <img src={activewear} />
          <span>Activewear</span>
        </SwiperSlide>

        <SwiperSlide onClick={() => contents.handleChangeContents(`gift`)}>
          <img src={gift} />
          <span>Gifts & Living</span>
        </SwiperSlide>

        <SwiperSlide onClick={() => contents.handleChangeContents(`inspiration`)}>
          <img src={ring} />
          <span>Inspiration</span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
