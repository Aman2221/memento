"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import data from "@/json/index.json";

const SelectLanguagePg = () => {
  const [selectedLang, setSelectedLang] = useState("english");

  const handleUnblockUser = (lang: string) => {
    setSelectedLang(lang);
  };
  return (
    <div>
      <Nav showBack={true} showRightSide={false} middleText="Language" />
      <div className="pt-20">
        {data.languages.map((item, i) => (
          <div
            className={`${i !== 0 ? "mt-3" : ""} flex items-center gap-3`}
            key={item.code}
            onClick={() => handleUnblockUser(item.name.toLowerCase())}
          >
            {selectedLang == item.name.toLowerCase() ? (
              <i className="bx bx-check text-2xl font-bold"></i>
            ) : (
              <i className="invisible bx bx-check text-2xl"></i>
            )}

            <span className="text-base">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectLanguagePg;
