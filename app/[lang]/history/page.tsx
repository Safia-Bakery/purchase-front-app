import React from "react";
import Container from "../components/Container";
import safiaLogo from "@/public/icons/safia-logo-white.svg";
import Image from "next/image";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function History({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page, base } = await getDictionary(lang);

  return (
    <Container className="flex flex-[8]">
      <div className="flex flex-[2] flex-col gap-6">
        <div className="px-10 py-8 bg-primary rounded-xl flex flex-col items-center">
          <Image src={safiaLogo} alt={"safia-logo"} />

          <h3 className="text-xl text-center mt-6 text-white">
            Махмуд Салимов
          </h3>
        </div>

        <div className="shadow-blockShadow rounded-xl p-6 flex items-center flex-col">
          <h3 className="font-bold text-lg">Личные данные</h3>

          <span className="text-primary mt-6 mb-3">Номер телефона:</span>
          <span>+99893 388 69 69</span>
          <span className="text-primary mt-6 mb-3">Дата регистрации:</span>
          <span>30.04.2022</span>

          <span className="text-primary mt-6 mb-3">e-mail</span>
          <span>makhmoodsalimov@safiabakery.uz</span>

          <span className="mt-8">{base.leave}</span>
        </div>
      </div>

      <div className="flex flex-[6]">
        <h1>История Заявок</h1>
      </div>
    </Container>
  );
}
