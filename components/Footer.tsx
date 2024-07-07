"use client";
import React from "react";
import { useRouter } from "next/navigation";
import data from "@/json/index.json";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="fixed bottom-0 left-0 border-t p-3 flex justify-between w-full bg-white">
      {data.footer_opt.map((item) => (
        <div
          key={item.name}
          onClick={() => router.push(item.route)}
          className="flex-center flex-col"
        >
          <Image src={item.icon} height={30} width={30} alt={item.name} />
          <span className="text-sm text-black capitalize">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Footer;
