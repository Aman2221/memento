"use client";
import { useRouter } from "next/navigation";
import React from "react";
import data from "@/json/index.json";
import SelectCollegeDD from "./SelectCollegeDD";

const SelectCollege = () => {
  const router = useRouter();
  return (
    <div className="flex-center flex-col mt-20">
      <h1 className="text-2xl">Select Your College</h1>
      <div className="relative w-full">
        <span className="absolute top-8 right-2">
          <i className="bx bx-caret-down text-2xl"></i>
        </span>
      </div>

      <div className="mt-6">
        <SelectCollegeDD />
      </div>

      <div className="absolute bottom-6">
        <h5>
          Already you have account? or
          <span
            onClick={() => router.push("/login")}
            className=" text-purple-400"
          >
            &nbsp;Log in
          </span>
        </h5>
      </div>
    </div>
  );
};

export default SelectCollege;
