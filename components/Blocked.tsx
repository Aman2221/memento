"use client";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import data from "@/json/index.json";
import SmBgPurple from "@/Buttons/SmBgPurple";

const BlockedAccountPg = () => {
  const handleUnblockUser = () => {};
  return (
    <div>
      <Nav
        showBack={true}
        showRightSide={false}
        middleText="Follow and invite friends"
      />
      <div className="pt-20">
        {data.blocked_accounts.map((item, i) => (
          <div
            key={item.name}
            className={`${
              i !== 0 ? "mt-6" : ""
            } flex justify-between items-center`}
          >
            <div className="flex items-center gap-4">
              <Image src={item.imgUrl} height={50} width={50} alt="icon img" />
              <span className="text-base font-medium">{item.name}</span>
            </div>
            <SmBgPurple
              buttonText="Unblock"
              extraClasses="text-white bg-drk-pk"
              onClick={handleUnblockUser}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockedAccountPg;
