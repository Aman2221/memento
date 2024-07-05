"use client";
import React, { useState } from "react";
import BackIcon from "@/Buttons/BackIcon";
import { useRouter } from "next/navigation";
import BgPurple from "@/Buttons/BgPurple";

const ForgotPasswordPg = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let target: any = e.target;
    setEmail(target.value);
  };

  return (
    <div className="flex flex-col w-full mt-10">
      <div className="mb-6">
        <BackIcon onClick={() => router.push("/login")} />
      </div>
      <h1 className="text-2xl">Forget Password</h1>
      <span className="text-sm">
        Don’t worry it happens, Please enter your E-Mail Id
      </span>
      <div className="mt-6 flex flex-col">
        <span className="text-sm capitalize">E-Mail Address</span>
        <input
          className=" bg-purple-200 px-3 py-2 mt-1  "
          type="email"
          name="email"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex-center w-full mt-6 ">
        <BgPurple
          onClick={() => router.push("/reset-password")}
          buttonText="Reset Password"
          extraClasses=" bg-drk-pk text-white"
        />
      </div>
    </div>
  );
};

export default ForgotPasswordPg;
