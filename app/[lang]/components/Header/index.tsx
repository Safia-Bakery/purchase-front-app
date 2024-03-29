import Image from "next/image";

import LocaleSwitcher from "../ChangeLang";
import CustomLink from "../CustomLink";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import safiaLogo from "@/public/images/safia-logo.png";

import Container from "../Container";
import MobileHeader from "../MobileHeader";
import HeaderRouter from "../HeaderRouter";

export default async function Header({ lang }: { lang: Locale }) {
  const lib = await getDictionary(lang);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
      <Container className="flex justify-between items-center w-full ">
        <CustomLink href="/" className="flex items-center gap-2 lg:flex-1">
          <Image src={safiaLogo} alt={"safia-logo"} height={70} width={70} />
          <h3>{lib?.navigation.purchase}</h3>
        </CustomLink>

        <nav className="container lg:flex hidden items-center justify-between flex-[3]">
          <ul className="flex gap-x-8">
            {Object.entries(lib?.header || {})?.map((item) => (
              <li key={item[0]}>
                <HeaderRouter href={`${item[0]}`}>{item[1]}</HeaderRouter>
              </li>
            ))}
          </ul>
        </nav>
        <LocaleSwitcher />

        <MobileHeader items={lib?.header} />
      </Container>
    </header>
  );
}
