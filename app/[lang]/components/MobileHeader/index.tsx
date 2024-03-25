"use client";
import { useState } from "react";
import cl from "classnames";
import Image from "next/image";

import Button from "../Button";
import burger from "@/public/icons/burger.svg";
import { BtnTypes } from "@/lib/types";
import CustomLink from "../CustomLink";

interface Props {
  items: any;
}

const MobileHeader = ({ items }: Props) => {
  const [active, $active] = useState(false);

  const toggleActive = () => $active((prev) => !prev);

  console.log(active, "active");

  return (
    <>
      <Button
        onClick={toggleActive}
        btnType={BtnTypes.white}
        className="lg:hidden flex items-center justify-center z-20"
      >
        <Image src={burger} alt={"open-header"} />
      </Button>
      {active && <div className="fixed inset-0 z-10" onClick={toggleActive} />}
      <div
        className={cl(
          "fixed translate-x-44 transition-transform right-0 top-20 shadow-lg p-2 rounded-lg bg-white z-20 border border-textGray",
          {
            ["!translate-x-0"]: active,
          }
        )}
      >
        <nav className="flex">
          <ul className="flex flex-col gap-x-8">
            {Object.entries(items)?.map((item: any) => (
              <li key={item[0]} className="my-1">
                <CustomLink href={`#${item[0]}`}>{item[1]}</CustomLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileHeader;
