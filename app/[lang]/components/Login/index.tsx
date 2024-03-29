"use client";
import Button from "../Button";
import { useForm } from "react-hook-form";
import baseApi from "@/api/baseApi";
import cross from "@/public/icons/cross.svg";
import BaseInput from "../BaseInputs";
import { useRouter } from "next/navigation";
import MainInput from "../BaseInputs/MainInput";
import Image from "next/image";

import logo from "@/public/icons/safia-logo.svg";
import Link from "next/link";
import CustomLink from "../CustomLink";
import MaskedInput from "../BaseInputs/MaskedInput";
import { fixedString } from "@/lib/helper";
import { useState } from "react";

interface Props {
  lang: {
    phone: string;
    next: string;
    password: string;
    register: string;
    required: string;
    error: string;
    forgot_password: string;
  };
}

const LoginLayout = ({ lang }: Props) => {
  const { replace } = useRouter();
  const [error, $error] = useState(false);

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const { username, password } = getValues();
    baseApi
      .post(
        "/login",
        {
          username: fixedString(username),
          password,
        },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
      .then((res) => {
        if (res?.status === 200) {
          localStorage.setItem("token", res.data.access_token);
          replace("/");
        }
      })
      .catch(() => $error(true));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col relative">
      <CustomLink href={"/"} className="absolute -top-36 -right-20">
        <Image src={cross} alt={"cancel"} />
      </CustomLink>
      <Image src={logo} alt={"safia-logo"} className="mx-auto lb:mb-10 mb-3" />
      <BaseInput error={errors.username}>
        <MaskedInput
          placeholder={lang.phone}
          defaultValue={998}
          register={register("username", { required: lang.required })}
          className="mb-4"
        />
      </BaseInput>
      <BaseInput error={errors.password}>
        <MainInput
          type="password"
          register={register("password", { required: lang.required })}
          placeholder={lang.password}
        />
      </BaseInput>

      {error && <p className="text-red-400 text-xs">{lang.error}</p>}

      <Link
        href={"/auth/forgot"}
        className="text-blue-500 capitalize lg:mt-6 mt-3 underline"
      >
        {lang.forgot_password}
      </Link>

      <Button type="submit" className="w-full capitalize mt-4">
        {lang.next}
      </Button>

      <Link
        href={"/auth/register"}
        className="text-center text-blue-500 capitalize mt-4"
      >
        {lang.register}
      </Link>
    </form>
  );
};

export default LoginLayout;
