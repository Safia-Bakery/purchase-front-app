import LocaleSwitcher from "../ChangeLang";
import CustomLink from "../CustomLink";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import safiaLogo from "@/public/images/safia-logo.png";
import userIcon from "@/public/icons/user.svg";
import Container from "../Container";
import Image from "next/image";

export default async function Header({ lang }: { lang: Locale }) {
  const lib = await getDictionary(lang);

  return (
    <header className="py-6">
      <Container className="flex justify-between">
        <CustomLink href="/" className="flex items-center gap-2 flex-1">
          <Image src={safiaLogo} alt={"safia-logo"} height={70} width={70} />
          <h3>{lib?.navigation.purchase}</h3>
        </CustomLink>

        <nav className="container flex items-center justify-between flex-[3]">
          <ul className="flex gap-x-8">
            {Object.entries(lib?.header || {})?.map((item) => (
              <li key={item[0]}>
                <CustomLink href={`#${item[0]}`}>{item[1]}</CustomLink>
              </li>
            ))}
          </ul>
          <LocaleSwitcher />

          <CustomLink href={"/login"}>
            <Image src={userIcon} alt={"user"} />
          </CustomLink>
        </nav>
      </Container>
    </header>
  );
}
