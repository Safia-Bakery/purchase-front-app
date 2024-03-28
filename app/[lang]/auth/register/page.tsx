import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import RegisterForm from "components/RegisterForm";

export default async function Login({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return <RegisterForm lang={page.login} />;
}
