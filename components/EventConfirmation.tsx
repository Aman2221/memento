import React from "react";
import Nav from "./Nav";
import Image from "next/image";

const EventConfirmationPg = () => {
  return (
    <>
      <Nav
        middleText="Confirmation"
        isComp={false}
        showBack={false}
        PorpCom={
          <div className="flex items-center gap-3">
            <Image
              className="rounded-full shadow-md"
              src="/img/y-user.png"
              height={50}
              width={50}
              alt="user img"
            />
          </div>
        }
      />
      <div className="py-20 flex-center flex-col">
        <Image
          src="/img/Confirmed.png"
          height="150"
          width="150"
          className="w-full rounded"
          alt="success img"
        />
        <span className="font-bold text-blue-400 text-2xl mt-2">
          Thank You !
        </span>
        <span className="font-semibold text-lg mt-2">
          Registration Successfully
        </span>
        <span className="font-normal text-center mt-2">
          Our Team will contact you shortly regarding your interest in
          Volunteering for your Event
        </span>
      </div>
    </>
  );
};

export default EventConfirmationPg;
