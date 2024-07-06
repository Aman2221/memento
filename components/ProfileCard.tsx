"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProfileCard = ({
  headerText,
  data,
}: {
  headerText?: string;
  data?: { [key: string]: string }[];
}) => {
  const router = useRouter();
  const handleGrid = () => {};

  return (
    <>
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-lg">{headerText}</h1>
        <Image
          onClick={handleGrid}
          src="/img/grid.svg"
          height={20}
          width={20}
          alt="user image"
        />
      </div>
      {data?.map((item) => (
        <div key={item.name} className="flex justify-between items-start mt-6">
          <div
            onClick={() => router.push("/alumni-profile")}
            className="flex gap-6 items-start "
          >
            <Image
              className=" rounded-full"
              src={item.imgUrl}
              height={60}
              width={60}
              alt="user image"
            />
            <div className="flex flex-col justify-start">
              <h1 className="text-md">{item.name}</h1>
              <h2 className="text-sm">Batch&nbsp;{item.batch} </h2>

              <h3 className="text-black text-xs">{item.department}</h3>
            </div>
          </div>

          <span className="text-purple-400">+&nbsp;Connect</span>
        </div>
      ))}
    </>
  );
};

export default ProfileCard;
