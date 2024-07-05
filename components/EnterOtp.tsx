"use client";
import React, { useState } from "react";
import BackIcon from "@/Buttons/BackIcon";
import { useRouter } from "next/navigation";
import BgPurple from "@/Buttons/BgPurple";

const EnterOTP = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let target: any = e.target;
    setOtp(target.value);
  };

  const resendCode = () => {};

  return (
    <div className="flex flex-col w-full mt-10">
      <div className="mb-6">
        <BackIcon onClick={() => router.push("/reset-password")} />
      </div>
      <h1 className="text-2xl">Enter 4 digit code sent to your E-mail</h1>
      <span className="text-center text-lg mt-6">Enter Your OTP code here</span>
      <div className="gap-6 flex-center mt-6">
        <input
          className="bg-purple-200 w-12 h-12 p-3 flex-center"
          type="number"
        />
        <input
          className="bg-purple-200 w-12 h-12 p-3 flex-center"
          type="number"
        />
        <input
          className="bg-purple-200 w-12 h-12 p-3 flex-center"
          type="number"
        />
        <input
          className="bg-purple-200 w-12 h-12 p-3 flex-center"
          type="number"
        />
      </div>
      <div className="flex-center flex-col mt-6">
        <span className="text-sm">I didn’t receive the code</span>
        <span
          className="text-md font-semibold text-purple-400"
          onClick={resendCode}
        >
          Resend
        </span>
      </div>
      <div className="flex-center w-full mt-6 ">
        <BgPurple
          onClick={() => router.push("/check-mail")}
          buttonText="Verify"
          extraClasses=" bg-drk-pk text-white"
        />
      </div>
    </div>
  );
};

export default EnterOTP;
