import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Head from "next/head";
import Image from "next/image";
import slider from "@/public/images/slider1.png";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const lib = await getDictionary(lang);

  return (
    <section>
      <Head>
        <title>Purchasement</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>

      <div className="relative">
        <Image
          src={slider}
          alt={"slider-img"}
          priority
          objectFit="contain"
          className="h-[60svh] w-full min-h-[350px]"
        />
      </div>
    </section>
  );
}
