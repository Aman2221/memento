"use client";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import data from "@/json/index.json";
import SmBgPurple from "@/Buttons/SmBgPurple";
import Footer from "./Footer";

const KnowledgePage = () => {
  const handleRegister = () => {};
  return (
    <>
      <Nav middleText="Knowledge" isComp={false} />
      <div className="py-20">
        {data.knowledge_share.map((item, index) => (
          <div key={index} className="border p-3 mt-5">
            <div className="flex gap-10 items-center">
              <div className="flex flex-col gap-3">
                <span className="text-base font-semibold">Workshop on</span>
                <span className="text-base font-semibold">Speaker</span>
                <span className="text-base font-semibold">Consultant at</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-base font-normal">
                  {item.workshop_on}
                </span>
                <span className="text-base font-normal">{item.speaker}</span>
                <span className="text-base font-normal">
                  {item.consultant_at}
                </span>
              </div>
            </div>
            <div className="border-b pb-3 ">
              <div className="flex items-center gap-3 mt-3">
                <Image src="/img/clock.svg" height={20} width={20} alt="" />
                <span className="text-xs">
                  {item.date}, {item.slot}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <Image src="/img/location.svg" height={20} width={20} alt="" />
                <span className="text-xs">{item.location}</span>
              </div>
            </div>

            <div className="flex justify-end mt-3">
              <SmBgPurple
                buttonText="Register"
                extraClasses="bg-drk-pk text-white"
                onClick={handleRegister}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default KnowledgePage;
