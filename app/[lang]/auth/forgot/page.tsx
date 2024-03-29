import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ForgotPassword from "components/ForgotPassword";

export default async function Forgot({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { base, page } = await getDictionary(lang);

  return (
    <ForgotPassword
      lang={{
        resend_after: page.verify.resend_after,
        code_sent: page.verify.code_sent,
        resend: page.verify.resend,
        reset: page.verify.reset,
        password: page.login.password,
        phone_or_email: page.login.phone_or_email,
        next: base.next,
        required_field: base.required_field,
      }}
    />
  );
}
