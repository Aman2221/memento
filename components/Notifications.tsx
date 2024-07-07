"use client";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";

const NotificationsPg = () => {
  const dummyNotification = [
    "Alexa accepted your freiend request",
    "Amit sent your message",
    "A new event coming soon",
    "Your Workshop registration is confirmed",
    "Priya accepted your freiend request",
  ];

  return (
    <div>
      <Nav middleText="Notifications" showBack={true} />
      <div className="py-20">
        <div>
          {dummyNotification.map((item, i) => (
            <div
              key={item}
              className="flex items-center gap-4 w-full mt-6 border py-2 px-4 rounded-lg"
            >
              <Image
                src="/img/y-user.png"
                alt="user img"
                height={50}
                width={50}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPg;
