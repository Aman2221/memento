"use client";
import BackIcon from "@/Buttons/BackIcon";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Nav = ({
  middleText = "Memento",
  showBack = false,
  isComp = false,
  PorpCom = <></>,
  showRightSide = true,
}: {
  middleText?: string;
  showBack?: boolean;
  isComp?: boolean;
  PorpCom?: React.ReactNode;
  showRightSide?: boolean;
}) => {
  const router = useRouter();
  const handleMessage = () => {
    router.push("/messages");
  };

  const handleNotification = () => {
    router.push("/notifications");
  };

  return (
    <div className="z-20 flex items-center justify-between py-3 px-2 shadow-md fixed top-0 left-0 right-0 w-full bg-white ">
      {isComp ? (
        PorpCom
      ) : showBack ? (
        <BackIcon onClick={() => router.push("/home")} />
      ) : (
        <Image
          className="rounded-full shadow-md"
          src="/img/y-user.png"
          height={50}
          width={50}
          alt="user img"
        />
      )}

      <h1 className="font-bold text-black text-2xl">{middleText}</h1>
      {showRightSide ? (
        <div className="flex items-center gap-4">
          <i onClick={handleMessage} className="bx bxs-message text-2xl"></i>
          <i onClick={handleNotification} className="bx bxs-bell text-2xl"></i>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Nav;
