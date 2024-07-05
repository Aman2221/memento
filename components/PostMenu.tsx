"use client";
import React, { useRef } from "react";
import data from "@/json/index.json";
import Image from "next/image";

const PostMenu = ({ showMenu = false }: { showMenu?: boolean }) => {
  return (
    <div
      className={`${
        showMenu ? "bottom-0" : "-bottom-72"
      } animate__animated animate__fadeInUp flex flex-col rounded-md py-10 px-6 gap-6 z-10 fixed bottom-0 bg-white w-full`}
    >
      {data.post_menu.map((item) => (
        <div key={item.name} className="flex items-center gap-3">
          <Image src={item.imgUrl} height={20} width={20} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PostMenu;
