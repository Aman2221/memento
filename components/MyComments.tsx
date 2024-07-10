"use client";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";

const MyCommentsPg = () => {
  const names = ["Aman", "Raj", "Sujeet", "Pavitra", "Bijoy"];

  return (
    <div>
      <Nav showBack={true} showRightSide={false} middleText="Comments" />
      <div className="pt-20">
        <div className="w-full">
          {names.map((item, i) => (
            <div
              key={item}
              className={`${i !== 0 ? "mt-6" : ""} flex w-full gap-3 `}
            >
              <div className="w-20 h-20">
                <Image
                  src="/img/y-user.png"
                  height={50}
                  width={50}
                  alt="liked img"
                />
              </div>

              <div className="flex flex-col w-full">
                <span className="text-sm">
                  Uxbrainary There are my maby ways and resources to learn UX/UI
                </span>
                <span className="text-xs text-gray-400">1 day</span>

                <div className="flex mt-2 justify-start items-center">
                  <div className="w-12">
                    <Image
                      src="/img/y-user.png"
                      height={35}
                      width={35}
                      alt="liked img"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-1">
                      <span className="font-semibold text-sm">{item}</span>
                      <span className="text-sm">Well done bro</span>
                    </div>
                    <span className="text-xs text-gray-400">1 day</span>
                  </div>
                </div>
              </div>
              <div className="w-20 h-20">
                <Image
                  src="/img/event.png"
                  height={50}
                  width={50}
                  alt="liked img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCommentsPg;
