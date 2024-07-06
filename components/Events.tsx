"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import EventsTab from "./EventsTab";

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  return (
    <div className="py-20">
      <Nav middleText="Events" isComp={false} />
      <div className=" flex justify-between">
        {["upcoming", "past"].map((item) => (
          <div
            className={`${
              item == activeTab ? "border-purple-400" : ""
            } flex-1 flex-center py-2 border-b-2 ease-in`}
            onClick={() => setActiveTab(item)}
          >
            <span
              className={`${
                item == activeTab ? "text-purple-400" : "text-black"
              } text-lg font-semibold capitalize ease-in`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item}>
          <EventsTab date={item} />
        </div>
      ))}
    </div>
  );
};

export default EventsPage;
