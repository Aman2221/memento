"use client";
import React from "react";
import Image from "next/image";
import data from "@/json/index.json";

const SchedulePost = ({ showSchedule = false }: { showSchedule?: boolean }) => {
  const menu_classes = {
    show: "animate__animated animate__fadeInUp flex flex-col rounded-md py-10 px-6 gap-6 z-10 fixed bg-white w-full bottom-0 post-bg left-0",
    hide: "animate__animated animate__fadeInUp flex flex-col rounded-md py-10 px-6 gap-6 z-10 fixed bg-white w-full -bottom-96 post-bg left-0",
  };

  return (
    <div className={showSchedule ? menu_classes.show : menu_classes.hide}>
      <h3 className="text-lg font-semibold">Schedule</h3>
      {data.schedule_post.map((item) => (
        <div key={item.name} className="flex flex-col my-3 gap-1 w-full">
          <span className=" font-medium capitalize">{item.name}</span>
          <div className="bg-white flex justify-between p-2">
            <input type="text" className="flex-1" name={item.name} />
            <Image src={item.imgUrl} height={20} width={20} alt="calendar" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SchedulePost;
