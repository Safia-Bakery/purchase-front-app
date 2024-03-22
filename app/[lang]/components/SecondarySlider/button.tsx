import React from "react";
import { useSwiper } from "swiper/react";
import arrow from "@/public/icons/whiteArrow.svg";
import Image from "next/image";

const SlideButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute top-0 right-0 flex gap-3">
      <button
        onClick={() => swiper?.slidePrev()}
        className="bg-lightGray h-12 w-12 rounded-full flex items-center justify-center"
      >
        <Image src={arrow} alt={"prev"} />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        className="bg-lightGray h-12 w-12 rounded-full flex items-center justify-center"
      >
        <Image src={arrow} alt={"next"} className="rotate-180" />
      </button>
    </div>
  );
};

export default SlideButtons;
