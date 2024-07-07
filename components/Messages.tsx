"use client";
import React from "react";
import Nav from "./Nav";
import SearchInput from "@/Buttons/SearchInput";
import Image from "next/image";

const MessagesPg = () => {
  const handleInputChange = () => {};
  return (
    <div>
      <Nav middleText="Messages" showBack={true} />
      <div className="py-20">
        <SearchInput handleInputChange={handleInputChange} />
        <div>
          {["aman", "ankit", "ram", "raj"].map((item, i) => (
            <div key={item} className="flex gap-4 w-full mt-6 border-b pb-3">
              <Image
                src="/img/y-user.png"
                alt="user img"
                height={50}
                width={50}
              />
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col">
                  <span className="text-base font-medium capitalize">
                    {item}
                  </span>
                  <span className="text-xs">Lorem Ipsum has been the</span>
                </div>
                <div className="flex-center gap-1 flex-col">
                  <span className="text-xs">11:38 AM</span>
                  <span className="rounded-full w-6 h-6 text-white bg-drk-pk flex-center text-xs">
                    {i}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagesPg;
