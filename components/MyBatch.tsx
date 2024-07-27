"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import SearchInput from "@/Buttons/SearchInput";
import Image from "next/image";
import data from "@/json/index.json";

const MyBatchPg = () => {
  const [batchmates, setBatchMates] = useState(data.my_batchmates);
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let target: any = e.target;
    let val = target.value;
    if (val.length > 3)
      setBatchMates(
        batchmates.filter((i) =>
          i.name.toLowerCase().includes(val.toLowerCase())
        )
      );
    else {
      setBatchMates(data.my_batchmates);
    }
  };
  return (
    <div>
      <Nav showBack={true} showRightSide={false} middleText="My Batchmates" />
      <div className="pt-20">
        <div>
          <SearchInput handleInputChange={handleInputChange} />
        </div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 gap place-items-center mt-6">
          {batchmates.map((item) => (
            <div key={item.name} className="flex-center flex-col">
              <Image
                src="/img/y-user.png"
                alt="user img"
                height={50}
                width={50}
              />
              <span className="text-sm font-semibold capitalize">
                {item.name}
              </span>
              <span className="text-sm font-normal">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBatchPg;
