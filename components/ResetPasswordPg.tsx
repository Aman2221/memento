"use client";
import React, { useState } from "react";
import BackIcon from "@/Buttons/BackIcon";
import { useRouter } from "next/navigation";
import BgPurple from "@/Buttons/BgPurple";
import { login_user_init } from "@/functions";
import data from "@/json/index.json";

const ResetPasswordPg = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(login_user_init);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let target: any = e.target;
    setUserData({
      ...userData,
      [target.name]: target.value,
    });
  };

  return (
    <div className="flex flex-col w-full mt-10">
      <div className="mb-6">
        <BackIcon onClick={() => router.push("/login")} />
      </div>
      <h1 className="text-2xl">Reset Password</h1>
      <span className="text-sm">
        Your new password must be different from your old password
      </span>
      {data.login_data.map((item) => {
        let val = item.name;
        return (
          <div key={item.label} className="mt-6 flex flex-col">
            <span className="text-sm capitalize">{item.label}</span>
            <input
              className=" bg-purple-200 px-3 py-2 mt-1  "
              type={item.type}
              name={item.name}
              onChange={handleInputChange}
            />
          </div>
        );
      })}
      <div className="flex-center w-full mt-6 ">
        <BgPurple
          onClick={() => router.push("/otp-verification")}
          buttonText="Reset Password"
          extraClasses=" bg-drk-pk text-white"
        />
      </div>
    </div>
  );
};

export default ResetPasswordPg;
