"use client";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import data from "@/json/index.json";
import Link from "next/link";

const MyActivityPg = () => {
  return (
    <div>
      <Nav showBack={true} showRightSide={false} middleText="My Batchmates" />
      <div className="pt-20">
        <div className="flex flex-col">
          {data.my_activity.map((item) => (
            <Link
              href={item.route}
              key={item.name}
              className={`flex items-center gap-4 ${
                item.name.toLowerCase() !== "likes" ? "mt-4" : ""
              } `}
            >
              <Image src={item.imgUrl} alt="user img" height={20} width={20} />
              <span className="text-base font-semibold capitalize">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyActivityPg;
