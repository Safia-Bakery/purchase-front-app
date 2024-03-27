"use client";

import { useRouter } from "next/router";
import { ReactNode } from "react";
import CustomLink from "../CustomLink";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children?: ReactNode;
}

const HeaderRouter = ({ href, children }: Props) => {
  const pathname = usePathname();
  return (
    <CustomLink href={pathname === "/" ? `#${href}` : `/#${href}`}>
      {children}
    </CustomLink>
  );
};

export default HeaderRouter;
