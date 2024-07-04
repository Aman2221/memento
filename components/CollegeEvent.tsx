import React from "react";
import Image from "next/image";
import data from "@/json/index.json";

const CollegeEvent = () => {
  return (
    <div className="flex-center flex-col mt-20">
      <h1 className="text-2xl">College name</h1>
      <div className="flex flex-col w-full">
        {data.college_events.map((item) => (
          <div
            key={item.type}
            className="shadow-md flex items-center justify-between w-full py-2 px-3 mt-6"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold">
                {item.date}&nbsp;
                <span className="text-xs font-normal">April 2024</span>
              </h2>
              <span className="text-sm"> {item.type}</span>
              <span className="text-sm">Venue : {item.venue}</span>
            </div>
            <div>
              <Image src="/img/event.png" height={80} width={80} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeEvent;
