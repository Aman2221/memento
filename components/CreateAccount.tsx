"use client";
import React, { useState } from "react";
import SelectCollegeDD from "./SelectCollegeDD";
import data from "@/json/index.json";
import { reg_user_init } from "@/functions";

const CreateAccountPg = () => {
  const [userData, setUserData] = useState(reg_user_init);

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
        <SelectCollegeDD />
      </div>
      {data.create_acc_data.map((item) => {
        let val = item.name;
        return (
          <div className="mt-6 flex flex-col">
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
    </div>
  );
};

export default CreateAccountPg;
