"use client";
import React from "react";
import BackIcon from "@/Buttons/BackIcon";
import { useRouter } from "next/navigation";
import BgPurple from "@/Buttons/BgPurple";

const CheckMailPg = () => {
  const router = useRouter();

  const checkMail = () => {};
  return (
    <div className="flex flex-col w-full mt-10">
      <div className="mb-6">
        <BackIcon onClick={() => router.push("/create-account")} />
      </div>
      <div className="flex-center flex-col">
        <div className="flex-center h-16 w-16 rounded-full bg-purple-200">
          <i className="bx bx-envelope text-2xl font-bold text-purple-400"></i>
        </div>
        <div className="flex-center flex-col mt-6">
          <h1 className="text-2xl">Check Your E-mail</h1>
          <span
            onClick={() => router.push("/forgot-password")}
            className=" text-sm"
          >
            An Unique User ID has been sent to your mail.
          </span>
          <div className="text-white mt-6">
            <BgPurple onClick={checkMail} buttonText="Check Mail" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckMailPg;
