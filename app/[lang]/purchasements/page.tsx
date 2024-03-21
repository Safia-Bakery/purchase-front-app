import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

const metadataTitles: Record<Locale, string> = {
  ru: "Purchasements",
  uz: "Solll",
  // Add translations for other locales as needed
};

const Purchasements = async ({ lang }: { lang: Locale }) => {
  const smth = await getDictionary(lang);
  return (
    <main>
      <Head>
        <title>{smth?.header.purchasements}</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <meta name={smth?.header.purchasements} />
      {smth?.header.purchasements}
    </main>
  );
  //   return <div>{header.purchasements}</div>;
};

export default Purchasements;
