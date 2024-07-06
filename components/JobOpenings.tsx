"use client";
import React from "react";
import Nav from "./Nav";
import { useRouter } from "next/navigation";
import SmBgPurple from "@/Buttons/SmBgPurple";
import Image from "next/image";
import data from "@/json/index.json";
import Footer from "./Footer";

const JobOpeningsPg = () => {
  const handleApply = () => {};
  return (
    <>
      <Nav middleText="Job Opening" />
      <div className="py-20">
        {data.job_openings.map((item) => (
          <div
            key={item.heading}
            className="border p-3 mt-6 rounded-lg flex justify-start items-start gap-4  "
          >
            <div className="w-80">
              <Image
                className="rounded-lg w-full"
                src={item.imgUrl}
                height={200}
                width={200}
                alt={item.heading}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">{item.heading}</span>
              <span className="text-sm">{item.description}</span>
              <SmBgPurple
                buttonText="Apply"
                extraClasses="text-white bg-drk-pk"
                onClick={handleApply}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobOpeningsPg;
