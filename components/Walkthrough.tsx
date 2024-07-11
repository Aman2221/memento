"use client";
import Image from "next/image";
import React, { useState } from "react";
import json_data from "@/json/index.json";
import { walk_type } from "@/interfaces";
import { useRouter } from "next/navigation";

const Walkthrough = () => {
  const router = useRouter();
  const [state, setState] = useState(1);

  const handleNext = () => {
    if (state !== 3) setState(state + 1);
    else router.push("/select-college");
  };

  const data = json_data.walkthroughs;
  return (
    <div>
      <div className="absolute top-4 right-4">
        <span
          className="text-base font-medium"
          onClick={() => router.push("/home")}
        >
          Skip
        </span>
      </div>
      {data
        .filter((item: walk_type) => item.index == state)
        .map((item: walk_type) => {
          return (
            <div key={item.index} className="flex-center flex-col h-dvh">
              <Image
                src={item.imgUrl as string}
                height="150"
                width="150"
                className="w-full"
                alt={item.heading as string}
              />
              <div className=" max-w-72 flex-center flex-col ">
                <h1 className="text-center text-2xl">{item.heading}</h1>
                <span className="text-center mt-2">{item.desc}</span>
                <button
                  onClick={handleNext}
                  className="max-w-max border-purple-400 border-2 px-8 py-2 rounded-md mt-10"
                >
                  {item.buttonText}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Walkthrough;
