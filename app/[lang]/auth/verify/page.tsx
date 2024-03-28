import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Verification from "components/Verification";

export default async function Verify({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { base, page } = await getDictionary(lang);

  return (
    <Verification
      lang={{
        resend_after: page.verify.resend_after,
        code_sent: page.verify.code_sent,
        resend: page.verify.resend,
        next: base.next,
        required_field: base.required_field,
      }}
    />
  );
}
