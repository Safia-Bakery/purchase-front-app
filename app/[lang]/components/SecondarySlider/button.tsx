import { useSwiper } from "swiper/react";
import arrow from "@/public/icons/whiteArrow.svg";
import Image from "next/image";

const SlideButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute top-8 right-0 flex gap-3">
      <button
        onClick={() => swiper?.slidePrev()}
        className="bg-lightGray lg:h-12 h-10 w-10 lg:w-12 rounded-full flex items-center justify-center z-10"
      >
        <Image src={arrow} alt={"prev"} />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        className="bg-lightGray lg:h-12 h-10 w-10 lg:w-12 rounded-full flex items-center justify-center z-10"
      >
        <Image src={arrow} alt={"next"} className="rotate-180" />
      </button>
    </div>
  );
};

export default SlideButtons;
