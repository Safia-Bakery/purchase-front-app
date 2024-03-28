import Image from "next/image";
import { ReactNode } from "react";

import bg from "@/public/images/login-bg.png";
import logo from "@/public/icons/safia-logo-white.svg";

export default async function Login({ children }: { children: ReactNode }) {
  return (
    <section className="relative h-screen">
      <div className="z-50 fixed inset-0 bg-black opacity-80" />
      <Image
        src={bg}
        alt={"background-image"}
        className="fixed inset-0 object-fill h-full z-40"
      />
      <Image
        src={logo}
        priority
        alt={"safia-logo"}
        className="fixed top-5 left-5 z-[51] "
      />

      <div className="z-50 fixed inset-0">
        <div className="lg:p-24 p-4 z-[51] bg-white rounded-xl max-w-[900px] w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          {children}
        </div>
      </div>
    </section>
  );
}
