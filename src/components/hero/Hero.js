import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Hero.css';
import { Navigation } from 'swiper/modules';

import rasm1 from '../../images/images.jpg'
import rasm2 from '../../images/download.jpg'
import rasm3 from '../../images/download (1).jpg'
import rasm4 from '../../images/download (2).jpg'
import rasm5 from '../../images/download (3).jpg'
import rasm6 from '../../images/images (1).jpg'
import rasm7 from '../../images/tree-736885_1280.jpg'
import rasm8 from '../../images/images.jpg'
import rasm9 from '../../images/images.jpg'


function Hero() {
    return (
        <>
            <div className="doctipe">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide> <img src={rasm1} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={rasm2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={rasm3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={rasm4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={rasm5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={rasm6} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={rasm7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={rasm8} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={rasm9} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Hero