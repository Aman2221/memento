"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import data from "@/json/index.json";
import SmBgPurple from "@/Buttons/SmBgPurple";
import Link from "next/link";
import SmBgPurpleRounded from "@/Buttons/SmBgPurpleRounded";
import LeaveModel from "./LeaveModel";

const HelpAskPg = () => {
  const [helpText, setHelpText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleInputChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    let target: any = e.target;
    setHelpText(target.value);
  };

  return (
    <div>
      <Nav showBack={true} showRightSide={false} middleText="Help" />
      <div className="pt-20">
        <div>
          <textarea
            onChange={handleInputChange}
            className="w-full border rounded-md outline-none bg-transparent p-3"
            id="w3review"
            name="w3review"
            rows={4}
            placeholder="Tell us how we can help"
            value={helpText}
          ></textarea>
          <LeaveModel showModal={showModal} setShowModal={setShowModal} />
        </div>
        <div className="flex items-center absolute bottom-0 px-3 py-3">
          <span>We will respond to you in Memento notification</span>
          <SmBgPurpleRounded
            buttonText="Next"
            extraClasses="text-white bg-drk-pk px-4"
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default HelpAskPg;
