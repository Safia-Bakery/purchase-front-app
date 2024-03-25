"use client";

import { ChangeEvent, FC, ReactNode, useState } from "react";
import cl from "classnames";
import styles from "./index.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";
import Image from "next/image";
import arrow from "@/public/icons/arrowBlack.svg";

interface Props {
  onChange?: (val: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  value?: string | number;
  disabled?: boolean;
  register?: UseFormRegisterReturn;
  values?: { id: number | string; name: string; status?: number }[];
  children?: ReactNode;
  onFocus?: () => void;
}

const MainSelect: FC<Props> = ({
  className,
  register,
  values,
  children,
  onFocus,
  ...others
}) => {
  const [open, $open] = useState(false);

  const toggleActive = () => $open((prev) => !prev);
  return (
    <>
      <div className="relative">
        <div
          className={cl(className, styles.inputBox, "cursor-pointer")}
          onClick={toggleActive}
        >
          <Image
            src={arrow}
            alt={"open-select"}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>

        <div
          className={cl(
            "opacity-0 bg-white p-4 transition-opacity absolute top-12 shadow- z-20 flex shadow-lg flex-col gap-2 w-full rounded-xl",
            {
              ["opacity-100"]: open,
            }
          )}
        >
          <label className="text-sm flex items-center gap-2">
            <input type="radio" value={2} className="mr-2" />
            <span>
              Мясо (в том числе мясо птицы) и продукция из него sjnsn qwjs
              jqhwskjw sj wskqj sjw skqw ksqw kh
            </span>
          </label>
          <label className="text-sm flex items-center gap-2">
            <input type="radio" value={2} className="mr-2" />
            <span>
              Мясо (в том числе мясо птицы) и продукция из него sjnsn qwjs
              jqhwskjw sj wskqj sjw skqw ksqw kh
            </span>
          </label>
        </div>
      </div>

      {open && <div className="fixed inset-0 z-10" onClick={toggleActive} />}
    </>
  );
};

export default MainSelect;
