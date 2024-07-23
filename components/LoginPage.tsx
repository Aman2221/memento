"use client";
import React, { useState } from "react";
import data from "@/json/index.json";
import { login_user_init } from "@/functions";
import BackIcon from "@/Buttons/BackIcon";
import { useRouter } from "next/navigation";
import BgPurple from "@/Buttons/BgPurple";
const LoginPage = () => {
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
        <BackIcon onClick={() => router.push("/create-account")} />
      </div>
      <h1 className="text-2xl">Log In</h1>

      {data.login_data.map((item) => {
        let val = item.name;
        return (
          <div key={item.label} className="mt-6 flex flex-col">
            <span className="text-sm capitalize">{item.label}</span>
            <input
              className=" bg-blue-200 px-3 py-2 mt-1  "
              type={item.type}
              name={item.name}
              onChange={handleInputChange}
            />
          </div>
        );
      })}
      <div className="flex justify-end w-full mt-2">
        <span
          onClick={() => router.push("/forgot-password")}
          className=" text-blue-400 text-sm"
        >
          Forget Password ?
        </span>
      </div>

      <div className="flex-center w-full mt-6 ">
        <BgPurple
          onClick={() => router.push("/login")}
          buttonText="Login"
          extraClasses=" bg-drk-pk text-white"
        />
      </div>
    </div>
  );
};

export default LoginPage;
