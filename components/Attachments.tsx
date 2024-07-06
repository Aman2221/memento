"use client";
import React from "react";
import Image from "next/image";
import data from "@/json/index.json";

const Attachments = ({
  show = false,
  hide,
}: {
  show?: boolean;
  hide: () => void;
}) => {
  const menu_classes = {
    show: "animate__animated animate__fadeInUp flex flex-col rounded-md py-10 px-6 gap-6 z-10 fixed bg-white w-full bottom-0 post-bg left-0",
    hide: "animate__animated animate__fadeInUp flex flex-col rounded-md py-10 px-6 gap-6 z-10 fixed bg-white w-full -bottom-96 post-bg left-0",
  };

  return (
    <div className={show ? menu_classes.show : menu_classes.hide}>
      <div className="grid grid-cols-3 gap-x-4 gap-y-6 gap place-items-center">
        {data.attachments.map((item) => (
          <div
            onClick={hide}
            key={item.name}
            className="flex-center flex-col gap-2    w-20 h-20 bg-white rounded-full"
          >
            <Image src={item.imgUrl} height={22} width={22} alt="calendar" />
            <span className="text-xs font-medium capitalize">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attachments;
