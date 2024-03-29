import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ResetPasswordLayout from "components/ResetPasswordLayout";

export default async function ResetPassword({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { base, page } = await getDictionary(lang);

  return (
    <ResetPasswordLayout
      lang={{
        password: page.login.password,
        new_password: page.login.new_password,
        next: base.next,
        required_field: base.required_field,
      }}
    />
  );
}
