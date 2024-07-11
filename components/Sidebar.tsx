import Image from "next/image";
import React from "react";
import data from "@/json/index.json";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";

const SidebarComp = ({
  showSidebar,
  handleSidebar,
}: {
  showSidebar: boolean;
  handleSidebar: () => void;
}) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSidebar(),
    onSwipedRight: () => handleSidebar(),
    trackMouse: true,
  });

  return (
    <div
      className={`${
        showSidebar ? "left-0" : "-left-80"
      } h-dvh bg-white shadow-md w-76 absolute top-0 z-20 transition-all ease-in animate__animated animate__fadeInLeft`}
      {...handlers}
    >
      <div className="post-bg flex gap-4 p-3">
        <div>
          <Image
            className="rounded-full shadow-md"
            src="/img/y-user.png"
            height={50}
            width={50}
            alt="user img"
          />
        </div>

        <div className="w-full">
          <span className="font-medium text-purple-500">John David</span>
          <div className="flex items-center justify-between w-full mt-1">
            <div className="flex items-center gap-1 ">
              <Image
                className="rounded-full shadow-md"
                src="/img/phone-call.svg"
                height={12}
                width={12}
                alt="user img"
              />
              <span className="text-xs">9876543210</span>
            </div>
            <div className="flex items-center gap-1 ">
              <Image
                className="rounded-full shadow-md"
                src="/img/email-add.svg"
                height={12}
                width={12}
                alt="user img"
              />
              <span className="text-xs">johndavid@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4">
        {data.sidebar_options.map((item) => (
          <Link
            key={item.name}
            href={item.route}
            className="flex items-center mt-6 gap-3"
          >
            <Image
              className="rounded-full shadow-md"
              src={item.imgUrl}
              height={20}
              width={20}
              alt="user img"
            />
            <span className="text-base capitalize">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarComp;
