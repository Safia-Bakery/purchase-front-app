"use client";
import MaskedInput from "../BaseInputs/MaskedInput";
import Button from "../Button";
import useQueryString from "hooks/useQueryString";
import Timer from "../Timer";
import { useForm } from "react-hook-form";
import baseApi from "@/api/baseApi";
import { fixedString } from "@/lib/helper";
import BaseInput from "../BaseInputs";
import { useRouter } from "next/navigation";

interface Props {
  lang: {
    resend_after: string;
    next: string;
    code_sent: string;
    resend: string;
    required_field: string;
  };
}

const Verification = ({ lang }: Props) => {
  const email = useQueryString("email");
  const phone_number = useQueryString("phone_number");
  const { replace } = useRouter();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    baseApi
      .post("/verify", {
        otp: fixedString(getValues("otp")),
        ...(phone_number && { phone: fixedString(phone_number) }),
        ...(email && { email }),
      })
      .then((res) => {
        if (res.status === 200) {
          replace("/");
          localStorage.setItem("token", res.data.access_token);
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h1 className="text-2xl text-center font-bold lg:mb-6 mb-3">
        {lang.code_sent} {email ?? phone_number}
      </h1>
      <BaseInput error={errors.otp}>
        <MaskedInput
          mask="9 - 9 - 9 - 9 - 9 - 9"
          register={register("otp", { required: lang.required_field })}
        />
      </BaseInput>

      <Button className="w-full capitalize mt-4">{lang.next}</Button>

      <div className="mx-auto mt-6 text-blue-500">
        <Timer label={lang.resend} resendLabel={lang.resend_after} />
      </div>
    </form>
  );
};

export default Verification;
