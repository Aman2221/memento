"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import data from "@/json/index.json";

const SettingsPg = () => {
  const [selectedOpt, setSelectedOpt]: any = useState({
    "Who can see my profile?": "None",
    "Who can see my post?": "My follow",
    "Who can send my message?": "My follow",
    "Who can send my friend request?": "Everyone",
    "Your Accounts": "Private",
  });

  const handleInputSelect = (a: string, b: string) => {
    setSelectedOpt({
      ...selectedOpt,
      [a]: b,
    });
  };

  return (
    <div>
      <Nav showBack={true} showRightSide={false} middleText="Settings" />
      <div className="pt-20">
        <div className="flex flex-col gap-4">
          {data.settings.map((item) => (
            <div
              key={item.question}
              className="border p-3 rounded-lg flex flex-col"
            >
              <span className="text-base font-medium">{item.question}</span>
              <div className="gap-2 flex flex-col mt-3">
                {item.options.map((check) => {
                  let value = selectedOpt[item.question];
                  return (
                    <form
                      key={check}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm font-normal">{check}</span>
                      <input
                        id={check}
                        type="radio"
                        name={check}
                        value={value}
                        onChange={() => handleInputSelect(item.question, check)}
                        checked={check == selectedOpt[item.question]}
                      />
                    </form>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPg;
