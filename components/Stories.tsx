import Image from "next/image";
import React from "react";
import data from "@/json/index.json";

const Stories = () => {
  return (
    <div className="flex pt-4 overflow-y-scroll gap-4 w-dvw">
      {data.user_stories.map((item) => (
        <div
          key={item.name}
          className="flex-center flex-col border"
          style={{ width: "150px" }}
        >
          <Image
            className="rounded-full shadow-md"
            src={item.imgUrl}
            height={50}
            width={50}
            alt={item.name}
          />
          <span className="text-sm text-black">{item.name}</span>
        </div>
      ))}
      {/* <div className="flex gap-2 overflow-y-scroll w-dvw mb-3">
        {data.user_stories.map((item) => {
          return (
            <div className="flex-center flex-col w-48">
              <Image
                className="rounded-full shadow-md"
                src={item.imgUrl}
                height={100}
                width={100}
                alt={item.name}
              />
              <span className="text-sm text-black">{item.name}</span>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Stories;
