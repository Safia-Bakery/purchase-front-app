"use client";
import MaskedInput from "../BaseInputs/MaskedInput";
import Button from "../Button";
import useQueryString from "hooks/useQueryString";
import Timer from "../Timer";
import { useForm } from "react-hook-form";
import baseApi from "@/api/baseApi";
import { fixedString, is_email } from "@/lib/helper";
import BaseInput from "../BaseInputs";
import { useRouter } from "next/navigation";
import MainInput from "../BaseInputs/MainInput";

interface Props {
  lang: {
    resend_after: string;
    next: string;
    code_sent: string;
    resend: string;
    required_field: string;
    password: string;
    phone_or_email: string;
    reset: string;
  };
}

const ForgotPassword = ({ lang }: Props) => {
  const { push } = useRouter();

  const { register, getValues, handleSubmit } = useForm();

  const onSubmit = () => {
    const { phone_or_email } = getValues();

    baseApi
      .post("/forgot", {
        ...(!is_email(phone_or_email)
          ? { phone_number: phone_or_email }
          : { email: phone_or_email }),
      })
      .then((res) => {
        if (res?.status === 200) {
          push(`/auth/verify?phone_number=${phone_or_email}&is_reset=1`);
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h1 className="text-2xl text-center font-bold lg:mb-6 mb-3">
        {lang.reset}
      </h1>

      <MainInput
        placeholder={lang.phone_or_email}
        register={register("phone_or_email")}
        className="mb-4"
      />

      <Button type="submit" className="w-full capitalize mt-4">
        {lang.next}
      </Button>
    </form>
  );
};

export default ForgotPassword;
