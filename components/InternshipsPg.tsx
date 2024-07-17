"use client";
import React from "react";
import Nav from "./Nav";
import { useRouter } from "next/navigation";
import SmBgPurple from "@/Buttons/SmBgPurple";
import data from "@/json/index.json";

const InternshipsPg = () => {
  const handleRegister = () => {};
  return (
    <>
      <Nav middleText="Internship" showBack={true} />
      <div className="py-20">
        {data.internships.map((item) => (
          <div key={item.title} className="border p-3 mt-4">
            <div className="border-b flex flex-col gap-2 pb-3">
              <span className="text-lg font-bold">{item.title}</span>
              <div className="flex justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <span className=" font-semibold">Media Agency</span>
                  <span>{item.agency}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className=" font-semibold">Work Type</span>
                  <span>{item.type}</span>
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <span className=" font-semibold">Categories</span>
                  <span>{item.category}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className=" font-semibold">Location</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-3">
              <SmBgPurple
                buttonText="Apply"
                extraClasses="text-white bg-drk-pk"
                onClick={handleRegister}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InternshipsPg;
