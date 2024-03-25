import { Locale } from "@/i18n.config";
import Image from "next/image";
import family from "@/public/images/family.png";
import { getDictionary } from "@/lib/dictionary";
import BaseInput from "../components/BaseInputs";
import MainInput from "../components/BaseInputs/MainInput";
import MainSelect from "../components/BaseInputs/MainSelect";

export default async function Cooperate({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page, base } = await getDictionary(lang);
  return (
    <div className="flex flex-1 lg:gap-20 gap-6 lg:flex-row flex-col">
      <div className="flex flex-1 max-w-[800px] h-full w-full">
        <Image
          src={family}
          alt={"making"}
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="flex lg:flex-none flex-1 lg:gap-6 gap-3 flex-col lg:w-[30vw] ">
        <h1 className="lg:text-5xl uppercase text-2xl">
          {page.home.will_you_cooperate}
        </h1>

        <p>{page.cooperate.descr}</p>

        <BaseInput label={page.cooperate.name}>
          <MainInput placeholder={page.cooperate.input} />
        </BaseInput>

        <BaseInput label={page.cooperate.adress}>
          <MainInput placeholder={page.cooperate.input} />
        </BaseInput>

        <BaseInput label={page.cooperate.selectCategory}>
          <MainSelect />
        </BaseInput>
      </div>
    </div>
  );
}
