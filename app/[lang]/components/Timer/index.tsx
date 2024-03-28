"use client";
import { useEffect, useState } from "react";
import useQueryString from "hooks/useQueryString";
import baseApi from "@/api/baseApi";
import { fixedString } from "@/lib/helper";

interface Props {
  label?: string;
  resendLabel: string;
}

const timer = 60; //todo

const Timer = ({ label, resendLabel }: Props) => {
  const [timeRemaining, setTimeRemaining] = useState(timer);
  const email = useQueryString("email");
  const phone_number = useQueryString("phone_number");

  const handleResend = () => {
    baseApi
      .post("/forgot", {
        ...(phone_number && { phone: `+${fixedString(phone_number)}` }),
        ...(email && { email }),
      })
      .then(() => setTimeRemaining(timer))
      .catch((e) => alert(e.message));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining]);

  return (
    <span>
      {!!timeRemaining ? (
        resendLabel + (timeRemaining < 10 ? `0${timeRemaining}` : timeRemaining)
      ) : (
        <button type="button" onClick={handleResend}>
          {label}
        </button>
      )}
    </span>
  );
};

export default Timer;
