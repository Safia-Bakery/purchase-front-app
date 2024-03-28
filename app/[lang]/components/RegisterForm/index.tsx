"use client";

import cross from "@/public/icons/cross.svg";
import MainInput from "components/BaseInputs/MainInput";
import Button from "components/Button";
import CustomLink from "components/CustomLink";
import Image from "next/image";
import { useForm } from "react-hook-form";
import MaskedInput from "../BaseInputs/MaskedInput";
import baseApi from "@/api/baseApi";
import { useRouter } from "next/navigation";
import { fixedString } from "@/lib/helper";
import Link from "next/link";

interface Props {
  lang: {
    register: string;
    login: string;
    descr: string;
    name: string;
    surname: string;
    inn: string;
    name_company: string;
    jur_addr: string;
    password: string;
    phone: string;
  };
}

const RegisterForm = ({ lang }: Props) => {
  const { register, getValues, handleSubmit } = useForm();
  const { push } = useRouter();

  const onSubmit = () => {
    const {
      phone,
      name,
      surname,
      email,
      inn,
      company_name,
      address,
      password,
    } = getValues();
    const customPhone = fixedString(phone);
    baseApi
      .post("/register", {
        phone: customPhone,
        name,
        surname,
        email,
        inn,
        company_name,
        address,
        password,
      })
      .then((res) => {
        push(`/auth/verify?phone_number=${getValues("phone")}`);
        console.log(res, "res");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <CustomLink href={"/"} className="absolute -top-36 -right-20">
        <Image src={cross} alt={"cancel"} />
      </CustomLink>
      <div className="flex lg:flex-row gap-5 flex-col flex-1">
        <div className="flex flex-col flex-1">
          <MainInput
            placeholder={lang.name}
            register={register("name")}
            className="mb-4"
          />
          <MainInput
            placeholder={lang.surname}
            register={register("surname")}
            className="mb-4"
          />
          <MaskedInput
            placeholder={lang.phone}
            defaultValue={998}
            register={register("phone")}
            className="mb-4"
          />
          <MainInput
            placeholder={"E-mail"}
            className="mb-4"
            register={register("email")}
          />
        </div>
        <div className="flex flex-col flex-1">
          <MainInput
            placeholder={lang.inn}
            register={register("inn")}
            className="mb-4"
          />
          <MainInput
            placeholder={lang.name_company}
            className="mb-4"
            register={register("company_name")}
          />
          <MainInput
            placeholder={lang.jur_addr}
            className="mb-4"
            register={register("address")}
          />
          <MainInput
            placeholder={lang.password}
            className="mb-4"
            type="password"
            register={register("password")}
          />
        </div>
      </div>
      <div className="flex gap-4 items-center flex-[5] justify-center mt-6">
        <Button
          type="submit"
          className="flex justify-center items-center flex-[3]"
        >
          {lang.register}
        </Button>
        <p className="flex-[2] text-xs leading-3 text-textGray flex">
          {lang.descr}
        </p>
      </div>
      <Link
        href={"/auth/login"}
        className="text-blue-500 capitalize absolute left-1/2 -translate-x-1/2 -bottom-10"
      >
        {lang.login}
      </Link>
    </form>
  );
};

export default RegisterForm;
