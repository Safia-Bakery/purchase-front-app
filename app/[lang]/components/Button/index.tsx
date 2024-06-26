import cl from "classnames";
import styles from "./index.module.scss";
import { ReactNode } from "react";
import { BtnTypes } from "@/lib/types";

type Props = {
  green?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  btnType?: BtnTypes;
};

const Button = ({
  green,
  children,
  className = "",
  btnType = BtnTypes.primary,
  ...others
}: Props) => {
  return (
    <button
      className={`${className} ${cl(styles.btn, styles[btnType])}`}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
