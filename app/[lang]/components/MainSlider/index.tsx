"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import slider from "@/public/images/slider1.png";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function MainSlider() {
  return (
    <section className="absolute inset-0 lg:h-[60vh]">
      <Swiper
        spaceBetween={0}
        loop
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {[slider, slider].map((item, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={item}
              alt={"slider-img"}
              objectFit="contain"
              className="h-[60svh] w-full min-h-[350px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
