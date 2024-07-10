"use client";
import React from "react";
import Nav from "./Nav";
import data from "@/json/index.json";
import SmBgPurple from "@/Buttons/SmBgPurple";
import Link from "next/link";

const HelpPg = () => {
  const handleUnblockUser = () => {};
  return (
    <div>
      <Nav showBack={true} showRightSide={false} middleText="help" />
      <div className="pt-20">
        {data.help_questions.map((item, i) => (
          <div key={i} className={`${i !== 0 ? "mt-6" : ""}`}>
            <span className="text-base font-normal">{item}</span>
          </div>
        ))}
        <div className="flex justify-end mt-6">
          <Link href="/help-ask">
            <SmBgPurple
              buttonText="Contact Us"
              extraClasses="text-white bg-drk-pk"
              onClick={handleUnblockUser}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpPg;
