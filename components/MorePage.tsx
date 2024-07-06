"use client";
import React from "react";
import data from "@/json/index.json";
import { RightIcon } from "@/Buttons/BackIcon";
import { useRouter } from "next/navigation";
import Nav from "./Nav";

const MorePage = () => {
  const router = useRouter();

  return (
    <>
      <Nav middleText="Events" isComp={false} />
      <div className="py-20">
        {data.more_pages.map((item) => (
          <div
            className="flex items-center justify-between py-4"
            onClick={() => router.push(item.route)}
          >
            <span className="text-lg">{item.name}</span>
            <RightIcon />
          </div>
        ))}
      </div>
    </>
  );
};

export default MorePage;
