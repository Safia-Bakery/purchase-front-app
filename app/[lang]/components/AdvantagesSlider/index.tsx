"use client";

import { SwiperSlide } from "swiper/react";
import SecondarySlider from "../SecondarySlider";
import Image from "next/image";

const AdvantagesSlider = ({ data }: { data: any }) => {
  const renderFirstSlider = (data: any) => {
    return (
      <SwiperSlide key={data.title}>
        <div className="flex flex-col items-center mt-8">
          <Image
            src={data.img}
            alt={"side-img"}
            height={360}
            width={360}
            className="rounded-full overflow-hidden"
          />
          <h4 className="uppercase font-bold text-xl text-center my-3">
            {data.title}
          </h4>

          <p className="text-textGray text-center">{data.descr}</p>
        </div>
      </SwiperSlide>
    );
  };
  return <SecondarySlider data={data} component={renderFirstSlider} />;
};

export default AdvantagesSlider;
