"use client";
import React from "react";
import Nav from "./Nav";
import { useRouter } from "next/navigation";
import SmBgPurple from "@/Buttons/SmBgPurple";

const InternshipsPg = () => {
  const handleRegister = () => {};
  return (
    <>
      <Nav middleText="Internship" />
      <div className="py-20">
        <div className="border p-3">
          <div className="border-b flex flex-col gap-2 pb-3">
            <span className="text-lg font-bold">
              Media and Communication Internship
            </span>
            <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-1">
                <span className=" font-semibold">Media Agency</span>
                <span>Media House</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className=" font-semibold">Work Type</span>
                <span>Internship</span>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-1">
                <span className=" font-semibold">Categories</span>
                <span>Communication,Technology,Media</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className=" font-semibold">Location</span>
                <span>Bangalore</span>
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
      </div>
    </>
  );
};

export default InternshipsPg;
