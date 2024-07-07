import React from "react";
import Nav from "./Nav";
import data from "@/json/index.json";

const FAQPg = () => {
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
          {data.faq.answers.map((item) => (
            <div
              key={item}
              className="p-2 border rounded-lg max-w-80 bg-lgt-pk"
            >
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="px-3  fixed w-full bottom-20 left-0 right-0">
          <input
            className="w-full p-2 border rounded-lg"
            type="text"
            placeholder="Type your Message"
          />
        </div>
      </div>
    </>
  );
};

export default FAQPg;
