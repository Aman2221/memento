"use client";
import React from "react";
import data from "@/json/index.json";
import Image from "next/image";

const PostMenu = ({
  showMenu = false,
  hideMenu,
}: {
  hideMenu: () => void;
  showMenu?: boolean;
}) => {
  const menu_classes = {
    show: "animate__animated animate__fadeInUp flex flex-col rounded-md py-10 px-6 gap-6 z-10 fixed bg-white w-full bottom-0 shadow left-0",
    hide: "animate__animated animate__fadeInUp flex flex-col rounded-md py-10 px-6 gap-6 z-10 fixed bg-white w-full -bottom-72 shadow left-0",
  };

  return (
    <div className={showMenu ? menu_classes.show : menu_classes.hide}>
      {data.post_menu.map((item) => (
        <div
          onClick={hideMenu}
          key={item.name}
          className="flex items-center gap-3"
        >
          <Image src={item.imgUrl} height={20} width={20} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PostMenu;
