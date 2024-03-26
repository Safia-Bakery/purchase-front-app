import cl from "classnames";
import ups from "@/public/icons/ups.svg";
import safiaLogo from "@/public/images/colored-safia-logo.png";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import Link from "next/link";

interface Props {
  className?: string;
  params: { lang: Locale };
}

export default async function EmptyList({
  params: { lang },
  className,
}: Props) {
  const { page, base } = await getDictionary(lang);
  return (
    <div
      className={cl(className, "w-full py-6 px-2 flex flex-col items-center")}
    >
      <Image src={ups} alt={"ups"} />
      <Image src={safiaLogo} alt={"safia-logo"} className="my-4 rounded-full" />

      <h3 className="font-bold text-xl">{page.empty.title}</h3>
      <p className="text-textGray">{page.empty.descr}</p>

      <Link href={"/"} className="uppercase underline mt-8 font-bold textxl">
        {base.to_main}
      </Link>
    </div>
  );
}
