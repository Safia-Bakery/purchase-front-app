import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LoginLayout from "components/Login";

export default async function Login({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page, base } = await getDictionary(lang);

  return (
    <LoginLayout
      lang={{
        next: base.next,
        phone: page.login.phone,
        password: page.login.password,
        register: page.login.register,
        required: base.required_field,
        error: page.login.error,
        forgot_password: page.login.forgot_password,
      }}
    />
  );
}
