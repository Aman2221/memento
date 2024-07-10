"use client";
import React from "react";
import Nav from "./Nav";
import data from "@/json/index.json";
import Image from "next/image";

const MyLikesPg = () => {
  const handlePostClick = () => {};
  return (
    <div>
      <Nav showBack={true} showRightSide={false} middleText="Likes" />
      <div className="pt-20">
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 gap place-items-center">
          {data.liked_posts.map((item, i) => (
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

export default MyLikesPg;
