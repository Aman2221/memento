"use client";
import React from "react";
import Nav from "./Nav";
import data from "@/json/index.json";
import Image from "next/image";

const MyPostsPg = () => {
  const handlePostClick = () => {};
  return (
    <div>
      <Nav showBack={true} showRightSide={false} middleText="Posts" />
      <div className="pt-20">
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 gap place-items-center">
          {data.liked_posts.map((item) => (
            <div
              onClick={handlePostClick}
              key={item.user_name}
              className="border"
            >
              <Image
                src={item.imgUrl}
                height={100}
                width={100}
                alt="liked img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPostsPg;
