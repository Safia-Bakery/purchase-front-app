import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import safiaLogo from "@/public/images/colored-safia-logo.png";
import Container from "../../components/Container";
import Image from "next/image";
import Button from "../../components/Button";
import Link from "next/link";
import CustomLink from "../../components/CustomLink";

export default async function Success({
  params: { lang, id },
}: {
  params: { lang: Locale; id: number | string };
}) {
  const { page, base } = await getDictionary(lang);

  return (
    <Container className="px-4 mb-6">
      <div className="py-8 px-3 max-w-[748px] w-full shadow-blockShadow rounded-xl flex flex-col items-center mx-auto ">
        <Image src={safiaLogo} alt={"safia-logo"} className="rounded-full" />

        <h1 className="my-6 font-bold lg:text-xl text-lg">
          {page.success.title}
        </h1>
        <span>{page.success.descr}</span>

        <span className="text-primary mt-4">{id}</span>

        <CustomLink href={"/"}>
          <Button className="max-w-56 mt-6">{base.to_main}</Button>
        </CustomLink>
      </div>
    </Container>
  );
}
