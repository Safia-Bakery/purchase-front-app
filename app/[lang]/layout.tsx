import "./globals.css";
import type { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";

import { Inter } from "next/font/google";
import Header from "./components/Header";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Head>
          <title>Purchasement</title>
          <meta
            name="description"
            content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
            key="desc"
          />
        </Head>
        <Header lang={params.lang} />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
