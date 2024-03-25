"use client";
import { Swiper } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import SlideButtons from "./button";
import { ReactNode } from "react";

interface Props<T> {
  data: T[];
  component: (arg: T) => ReactNode;
}

export default function SecondarySlider<TProps>({
  data,
  component,
}: Props<TProps>) {
  return (
    <>
      <Swiper
        slidesPerView={window.innerWidth < 1200 ? 1 : 4}
        spaceBetween={30}
        loop
        freeMode={true}
        // direction="vertical"
        className="lg:!pt-12 lg:-mt-12 !pt-6"
        modules={[FreeMode, Pagination]}
      >
        <SlideButtons />
        {data.map((item) => component(item))}
        {/* {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center mt-8">
              <Image
                src={slider}
                alt={"side-img"}
                height={360}
                width={360}
                className="rounded-full overflow-hidden"
              />
              <h4 className="uppercase font-bold text-xl text-center my-3">
                гости
              </h4>

              <p className="text-textGray text-center">
                Мы дорожим доверием гостей всех поколений
              </p>
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </>
  );
}
