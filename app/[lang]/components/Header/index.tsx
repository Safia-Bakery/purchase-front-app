import LocaleSwitcher from "../ChangeLang";
import CustomLink from "../CustomLink";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import safiaLogo from "@/public/images/safia-logo.png";
import userIcon from "@/public/icons/user.svg";
import burger from "@/public/icons/burger.svg";
import Container from "../Container";
import Image from "next/image";
import Button from "../Button";
import { BtnTypes } from "@/lib/types";
import MobileHeader from "../MobileHeader";

export default async function Header({ lang }: { lang: Locale }) {
  const lib = await getDictionary(lang);

  return (
    <header className="lg:py-6 py-2 fixed top-0 left-0 right-0 z-20 bg-white">
      <Container className="flex justify-between items-center w-full">
        <CustomLink href="/" className="flex items-center gap-2 lg:flex-1">
          <Image src={safiaLogo} alt={"safia-logo"} height={70} width={70} />
          <h3>{lib?.navigation.purchase}</h3>
        </CustomLink>

        <nav className="container lg:flex hidden items-center justify-between flex-[3]">
          <ul className="flex gap-x-8">
            {Object.entries(lib?.header || {})?.map((item) => (
              <li key={item[0]}>
                <CustomLink href={`#${item[0]}`}>{item[1]}</CustomLink>
              </li>
            ))}
          </ul>
        </nav>
        <LocaleSwitcher />
        <CustomLink className="hidden lg:flex ml-6" href={"/login"}>
          <Image src={userIcon} alt={"user"} />
        </CustomLink>

        <Button
          btnType={BtnTypes.white}
          className="lg:hidden flex items-center justify-center"
        >
          <Image src={burger} alt={"open-header"} />
        </Button>

        <MobileHeader />
      </Container>
    </header>
  );
}
