"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import arrow from "@/public/icons/whiteArrow.svg";

const ScrollToTop = () => {
  const [shown, $shown] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      $shown(true);
    } else if (scrolled <= 300) {
      $shown(false);
    }
  };

  const toTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  window?.addEventListener("scroll", toggleVisible);

  if (!shown && !window) return;
  return (
    <div
      className="fixed w-12 h-12 bottom-6 right-6 rounded-full bg-lightGray flex items-center justify-center z-20"
      onClick={toTop}
    >
      <Image src={arrow} alt={"to-top"} className="rotate-90" />
    </div>
  );
};
export default ScrollToTop;
