"use client";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import data from "@/json/index.json";

const Invite = () => {
  return (
    <div>
      <Nav
        showBack={true}
        showRightSide={false}
        middleText="Follow and invite friends"
      />
      <div className="pt-20">
        {data.invite_friends.map((item, i) => (
          <div
            key={item.name}
            className={`${i !== 0 ? "mt-6" : ""} flex gap-4`}
          >
            <Image src={item.imgUrl} height={20} width={20} alt="icon img" />
            <span className="text-base font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invite;
