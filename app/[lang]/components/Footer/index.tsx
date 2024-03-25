import React from "react";
import Container from "../Container";
import Image from "next/image";
import purchase from "@/public/icons/purchase.svg";
import message from "@/public/icons/message.svg";
import facebook from "@/public/icons/facebook.svg";
import tg from "@/public/icons/tg.svg";
import insta from "@/public/icons/insta.svg";
import familyText from "@/public/icons/familyText.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full px-4 mb-8">
        <Image
          className="lg:mx-auto lg:my-14 family_text"
          src={familyText}
          alt={"And together we will give happiness to our world!"}
        />
      </div>
      <footer className="bg-footerBg p-6">
        <Container className="flex items-center justify-between lg:flex-row flex-col gap-4">
          <span className="text-white">2023 © Safia.uz</span>

          <Image src={purchase} alt={"purchase-text"} width={120} height={62} />
          <div className="flex gap-6 w-full justify-around lg:w-48">
            <Image src={message} alt={"message"} width={20} height={20} />
            <Image src={facebook} alt={"facebook"} width={20} height={20} />
            <Image src={tg} alt={"tg"} width={20} height={20} />
            <Image src={insta} alt={"insta"} width={20} height={20} />
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
