import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainSlider from "./components/MainSlider";
import Container from "./components/Container";
import Button from "./components/Button";
import eggPrep from "@/public/images/eggPrep.png";
import safia_img from "@/public/images/safia-img.png";
import cooperateImg from "@/public/images/cooperate.png";
import Image from "next/image";
import stabilization from "@/public/icons/stabilization.svg";
import caring from "@/public/icons/caring.svg";
import developingIcon from "@/public/icons/developing.svg";
import grow from "@/public/icons/grow.svg";
import familyText from "@/public/icons/familyText.svg";
import guests from "@/public/images/guests.png";
import product from "@/public/images/product.png";
import family from "@/public/images/family.png";
import supplier from "@/public/images/ss.png";
import developing from "@/public/images/eggPrep.png";
import AdvantagesSlider from "./components/AdvantagesSlider";
import SuppliersSlider from "./components/SuppliersSlider";
import Link from "next/link";
import Footer from "./components/Footer";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page, base, header } = await getDictionary(lang);

  const advantageSlideArr = [
    {
      img: guests,
      descr: page.home.first_slide.guests_descr,
      title: page.home.first_slide.guests_title,
    },
    {
      img: product,
      descr: page.home.first_slide.product_descr,
      title: page.home.first_slide.product_title,
    },
    {
      img: family,
      descr: page.home.first_slide.family_descr,
      title: page.home.first_slide.family_title,
    },
    {
      img: developing,
      descr: page.home.first_slide.developing_descr,
      title: page.home.first_slide.developing_title,
    },
  ];

  const suppliersSlider = [
    { img: supplier, descr: "Здесь будет цитата от руководителся" },
    {
      img: supplier,
      descr: "Здесь будет цитата от руководителся, которая идет в две строки",
    },
    { img: supplier, descr: "Здесь будет цитата от руководителся" },
    {
      img: supplier,
      descr: "Здесь будет цитата от руководителся, которая идет в две строки",
    },
  ];

  return (
    <>
      <section>
        <div>
          <MainSlider />
          <Container className="relative lg:h-[60vh]">
            <div className="absolute top-1/2 -translate-y-1/2 lg:p-10 z-10 bg-white rounded-xl">
              <h1 className="uppercase text-5xl">{page.home.about_company}</h1>
              <p className="md:max-w-[430px] w-full text-textGray lg:my-6">
                {page.home.description}
              </p>
              <Button className="w-64">{base.send_request}</Button>
            </div>
          </Container>
        </div>
      </section>

      <section className="lg:mt-14">
        <Container>
          <div className="flex justify-between lg:my-8" id={"purchasements"}>
            <div className="flex flex-col flex-1">
              <h2 className="text-3xl">{page.home.company_purchases}</h2>
              <p className="text-lg mt-4 mb-6 text-textGray">
                {page.home.company_descr}
              </p>

              <h4 className="mb-4 mt-4">{page.home.purchase_regulations}</h4>
              <Button className="w-56 mb-8 ">{base.download_pdf}</Button>

              <h4 className="mb-4">{page.home.delivery_template}</h4>
              <Button className="w-56 mb-8">{base.download_pdf}</Button>

              <h4 className="mb-4">{page.home.code_conduct}</h4>
              <Button className="w-56 mb-8">{base.download_pdf}</Button>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <Image
                src={eggPrep}
                alt="company-purchasements"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="lg:mt-20" id={"previlleges"}>
            <h2 className="text-3xl uppercase z-10 absolute left-1/2 -translate-x-1/2 ">
              {page.home.advantages}
            </h2>
            <AdvantagesSlider data={advantageSlideArr} />
          </div>

          <div className="lg:mt-24 flex items-center flex-col">
            <h2 className="text-3xl uppercase text-center max-w-[490px] w-full">
              {page.home.actual_title}
            </h2>
            <p className="text-textGray text-center mt-8 mb-6 max-w-[750px] w-full">
              {page.home.actual_descr}
            </p>

            <Button className="w-56">{base.open_table}</Button>
          </div>

          <div
            className="flex justify-between items-center my-14"
            id={"suppliers"}
          >
            <Image
              src={cooperateImg}
              alt={"cooperate-img"}
              className="flex rounded-full overflow-hidden"
            />

            <div className="flex flex-col w-[47%]">
              <h2 className="text-3xl uppercase lg:mb-8">
                {page.home.cooperation.title}
              </h2>

              <div className="flex gap-3 lg:mb-6 items-center">
                <Image src={stabilization} alt={"stabilization"} />

                <span>{page.home.cooperation.stabilization}</span>
              </div>

              <div className="flex gap-3 lg:mb-6 items-center">
                <Image src={grow} alt={"grow"} />

                <span>{page.home.cooperation.grow}</span>
              </div>

              <div className="flex gap-3 lg:mb-6 items-center">
                <Image src={caring} alt={"caring"} />

                <span>{page.home.cooperation.caring}</span>
              </div>

              <div className="flex gap-3 lg:mb-6 items-center">
                <Image src={developingIcon} alt={"developing"} />

                <span>{page.home.cooperation.developing}</span>
              </div>
            </div>
          </div>

          <div
            className="flex justify-between items-center mb-10"
            id={"expectation"}
          >
            <div>
              <h2 className="text-5xl uppercase max-w-[620px] w-full mb-4">
                {page.home.expectation_title}
              </h2>
              <p className="text-textGray max-w-[490px] w-full">
                {page.home.expectation_descr}
              </p>
              <h2 className="text-5xl uppercase max-w-[620px] w-full mb-4 mt-8">
                {page.home.expectation_title}
              </h2>
              <p className="text-textGray max-w-[490px] w-full">
                {page.home.expectation_descr}
              </p>
            </div>
            <Image
              src={safia_img}
              alt={"safia-img"}
              className="max-w-[620px] w-full"
              objectFit="contain"
            />
          </div>

          <div className="lg:mt-36" id={"our_suppliers"}>
            <h2 className="text-3xl uppercase z-10 absolute left-1/2 -translate-x-1/2 ">
              {header.our_suppliers}
            </h2>
            <SuppliersSlider data={suppliersSlider} />
          </div>
        </Container>

        <div
          className="flex items-center lg:mt-32 lg:h-[75vh] flex-1"
          id={"cooperation"}
        >
          <div className="flex flex-1 max-w-[800px] h-full w-full">
            <Image src={family} alt={"making"} className="w-full h-full" />
          </div>
          <div className="flex flex-col lg:ml-32 justify-between h-full content-between flex-1">
            <div className="max-w-[490px] w-full flex flex-col flex-1">
              <h2 className="text-5xl">{page.home.will_you_cooperate}</h2>

              <p className="mt-10 mb-14 max-w-96">
                {page.home.cooperate_descr}
              </p>

              <Button className="w-full">{base.send_request}</Button>
            </div>

            <div className="flex flex-col ">
              <span>{base.our_mail}</span>

              <Link
                className="text-[40px] underline mt-3"
                href={"mailto:safiabakery.uz"}
              >
                safiabakery.uz
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Image
            className="mx-auto lg:my-14 family_text"
            src={familyText}
            alt={"And together we will give happiness to our world!"}
          />
        </div>

        <Footer />
      </section>
    </>
  );
}
