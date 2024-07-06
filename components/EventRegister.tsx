"use client";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import { useRouter } from "next/navigation";
import data from "@/json/index.json";
import SmBgPurple from "@/Buttons/SmBgPurple";

const EventRegistePg = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/registration-success");
  };

  return (
    <>
      <Nav middleText="Registration" />
      <div className="py-20">
        <span className=" text-base">
          Thank you for showing interst to attend the Event Kindly help us fill
          in your details to confirm your Registration.
        </span>
        <div className="py-10">
          {data.event_register.map((item) => (
            <div className="flex flex-col py-4 gap-1">
              <label className="capitalize" htmlFor={item.label}>
                {item.label}
              </label>
              <input
                className="p-2 post-bg rounded-md"
                type={item.type}
                name={item.name}
              />
            </div>
          ))}
          <div className="flex items-center gap-2 pt-4">
            <input
              className="border border-purple-400 rounded-md"
              type="checkbox"
              name="interested"
              id="interested"
            />
            <span className="text-sm">
              I am interested in Volunteering the Event
            </span>
          </div>
          <div className="w-full flex-center mt-6">
            <SmBgPurple
              buttonText="Submit"
              extraClasses="text-white bg-drk-pk"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventRegistePg;
