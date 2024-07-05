"use client";
import React from "react";
import Image from "next/image";
import data from "@/json/index.json";
import { useRouter } from "next/navigation";
import SmBgPurple from "@/Buttons/SmBgPurple";

const CollegeEvent = () => {
  const router = useRouter();

  return (
    <div className="flex-center flex-col mt-20">
      <h1 className="text-2xl">College name</h1>
      <div className="flex flex-col w-full">
        {data.college_events.map((item) => (
          <div
            key={item.type}
            className="shadow-md rounded-md flex flex-col w-full py-2 px-3 mt-6"
          >
            <div className="flex w-full justify-between">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold">
                  {item.date}&nbsp;
                  <span className="text-xs font-normal">April 2024</span>
                </h2>
                <span className="text-sm"> {item.type}</span>
                <span className="text-sm">Venue : {item.venue}</span>
              </div>
              <Image src="/img/event.png" height={80} width={80} alt="" />
            </div>
            <div className="flex justify-end w-full">
              <SmBgPurple
                onClick={() => router.push("/create-account")}
                buttonText="Register"
                extraClasses="mt-4 bg-drk-pk text-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeEvent;
