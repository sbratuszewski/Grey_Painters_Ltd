import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/Coatin-widescreen2.jpg";
import slide2 from "../assets/shot-blasting-header.jpg";
import slide3 from "../assets/painting-gce0ec61f9_1920.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-6 h-6 block z-0" src={slide1} alt="slide-1" />
          <div className="absolute top-[50%] translate-y-[-50%] left-[8%] text-white text-left">
            <h1 className="text-4xl uppercase mb-5 font-bold">Gray painters Ltd</h1>
            <h2 className="text-2xl capitalize leading-10">
              A familly company <br />
              with 40 years of experience <br />
              in oil and gas industry
            </h2>
            <a href="/contact#form" className="relative top-16">
              <button className="uppercase py-4 px-6 ease-in-out duration-300">
                get a quote
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-6 h-6 block z-0" src={slide2} alt="slide-2" />
          <div className="absolute top-[50%] translate-y-[-50%] left-[8%] w-auto] text-white text-left">
            <h1 className="text-4xl uppercase mb-5 font-bold">Gray painters ltd</h1>
            <h2 className="text-2xl capitalize leading-10">
              machine blasting & industrial coating
            </h2>
            <a href="/contact#form" className="relative top-16">
              <button className="text-white uppercase py-4 px-6 ease-in-out duration-300">
                get a quote
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-6 h-6 block z-0" src={slide3} alt="slide-3     " />
          <div className="absolute top-[50%] translate-y-[-50%] left-[8%] w-auto] text-white text-left">
            <h1 className="text-4xl uppercase mb-5 font-bold">Gray painters ltd</h1>
            <h2 className="text-2xl capitalize leading-10">
              commercial & domestic decorating
            </h2>
            <a href="/contact#form" className="relative top-16">
              <button className="text-white uppercase py-4 px-6 ease-in-out duration-300">
                get a quote
              </button>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
