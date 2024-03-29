"use client";
import Button from "../Button";
import { useForm } from "react-hook-form";
import baseApi from "@/api/baseApi";
import BaseInput from "../BaseInputs";
import { useRouter } from "next/navigation";
import MainInput from "../BaseInputs/MainInput";

interface Props {
  lang: {
    next: string;
    required_field: string;
    password: string;
    new_password: string;
  };
}

const ResetPasswordLayout = ({ lang }: Props) => {
  const { replace } = useRouter();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    baseApi
      .post("/reset", {
        password: getValues("password"),
      })
      .then((res) => {
        if (res?.data?.success) {
          window.location.replace("/");
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h1 className="text-2xl text-center font-bold lg:mb-6 mb-3">
        {lang.new_password}
      </h1>
      <BaseInput error={errors.password}>
        <MainInput
          placeholder={lang.password}
          type="password"
          register={register("password", { required: lang.required_field })}
        />
      </BaseInput>

      <Button type="submit" className="w-full capitalize mt-4">
        {lang.next}
      </Button>
    </form>
  );
};

export default ResetPasswordLayout;
