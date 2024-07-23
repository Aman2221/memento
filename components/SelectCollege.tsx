"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SelectCollegeDD from "./SelectCollegeDD";

const SelectCollege = () => {
  const router = useRouter();
  const [college, setCollege] = useState("");

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    let target: any = e.target;
    setCollege(target.value);
    router.push("/college-events");
  };

  return (
    <div className="flex-center flex-col mt-20">
      <h1 className="text-2xl">Select Your College</h1>

      <div className="mt-6 w-full">
        <SelectCollegeDD handleChange={handleChange} />
      </div>

      <div className="absolute bottom-6">
        <h5>
          Already you have account? or
          <span
            onClick={() => router.push("/login")}
            className=" text-blue-400"
          >
            &nbsp;Log in
          </span>
        </h5>
      </div>
    </div>
  );
};

export default SelectCollege;
