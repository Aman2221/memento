"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import Image from "next/image";
import SmBgPurple from "@/Buttons/SmBgPurple";
import Post from "./Post";
import Footer from "./Footer";

const AlumniProfilePg = () => {
  const [showMenu, setShowMenu] = useState(false);
  const showPostMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="py-20">
      <Nav showBack={true} middleText={"Alumni"} />
      <div className="post-bg h-32 flex-col flex justify-end items-center">
        <Image
          className="rounded-full"
          src="/img/y-user.png"
          height={100}
          width={100}
          alt="user name"
        />
      </div>
      <div className="flex-center flex-col py-6">
        <h1 className="text-lg font-semibold">John</h1>
        <h2 className="text-md">Commerce Department</h2>
        <h2 className="text-sm">Batch 2020- 2022</h2>
        <SmBgPurple
          buttonText="Connect"
          extraClasses="mt-4 bg-drk-pk text-white"
        />
      </div>
      <div className="flex flex-col border p-3 ">
        <h1 className="text-md font-medium">About</h1>
        <span className="text-sm mt-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock...
        </span>
      </div>
      <Post showPostMenu={showPostMenu} classes="bg-white" />
    </div>
  );
};

export default AlumniProfilePg;
