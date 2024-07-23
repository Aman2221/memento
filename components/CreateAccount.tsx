"use client";
import React, { useState } from "react";
import SelectCollegeDD from "./SelectCollegeDD";
import data from "@/json/index.json";
import { reg_user_init } from "@/functions";
import { useRouter } from "next/navigation";
import BgPurple from "@/Buttons/BgPurple";

const CreateAccountPg = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(reg_user_init);
  const [college, setCollege] = useState("");

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    let target: any = e.target;
    setCollege(target.value);
    router.push("/college-events");
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let target: any = e.target;

    setUserData({
      ...userData,
      [target.name]: target.value,
    });
  };
  return (
    <div className="flex flex-col w-full mt-10">
      <h1 className="text-2xl">Create your account</h1>
      <div className="mt-6">
        <span className="text-sm">Select your college</span>
        <SelectCollegeDD handleChange={handleChange} />
      </div>
      {data.create_acc_data.map((item) => {
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
      <div className="flex-center w-full mt-6 ">
        <BgPurple
          onClick={() => router.push("/login")}
          buttonText="Register"
          extraClasses=" bg-drk-pk text-white"
        />
      </div>
    </div>
  );
};

export default CreateAccountPg;
