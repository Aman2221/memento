"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import data from "@/json/index.json";

const FAQPg = () => {
  const [currentQue, setCurrentQue] = useState("");
  const [userQst, setUserQst] = useState([
    {
      queIndex: 1,
      que: "How can i connect with others ?",
      time: new Date().toLocaleTimeString(),
    },
  ]);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let target: any = e.target;
    setCurrentQue(target.value);
  };

  const handleAsk = (e: React.FormEvent<HTMLFormElement>) => {
    if (currentQue && currentQue.length) {
      if (e) e.preventDefault();
      setUserQst([
        ...userQst,
        {
          queIndex: userQst.length,
          que: currentQue,
          time: new Date().toLocaleTimeString(),
        },
      ]);
      setCurrentQue("");
    }
  };

  return (
    <>
      <Nav middleText="FAQ" />
      <div className="py-20 relative">
        <div className="ask flex flex-col items-start py-3 w-full gap-3">
          {data.faq.questions.map((item) => (
            <div key={item} className="p-2 border rounded-lg max-w-80">
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="resposonse flex flex-col items-end py-3 w-full gap-3">
          {userQst.map((item) => (
            <div
              key={item.queIndex}
              className="p-2 border rounded-lg max-w-80 bg-lgt-pk"
            >
              <span className="text-sm">{item.que}</span>
            </div>
          ))}
        </div>
        <div className="bg-white fixed bottom-0 w-full pb-20 left-0 right-0">
          <form
            className="mx-3 flex border items-center fixed bottom-0 mb-20 left-0 right-0 bg-white"
            onSubmit={handleAsk}
          >
            <input
              className="w-full p-2  rounded-lg"
              type="text"
              placeholder="Type your Message"
              onChange={handleInputChange}
              value={currentQue}
            />
            <i
              onClick={(e: any) => handleAsk(e)}
              className="bx bx-send text-2xl text-black pr-2"
            ></i>
          </form>
        </div>
      </div>
    </>
  );
};

export default FAQPg;
