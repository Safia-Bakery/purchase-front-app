import Link from "next/link";
import { i18n } from "@/i18n.config";

interface CustomLinkProps {
  href: string;
  lang?: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function CustomLink({
  href,
  lang = i18n.defaultLocale,
  ...props
}: CustomLinkProps) {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;
  return <Link href={path} {...props} />;
}
