"use client";
import SearchInput from "@/Buttons/SearchInput";
import React from "react";

const AlumniSearch = ({
  handleInputChange,
  handleSearchYear,
  searchYear,
}: {
  handleInputChange: (a: any) => void;
  handleSearchYear: (a: string) => void;
  searchYear: string;
}) => {
  return (
    <div className="flex flex-col mt-24">
      <h1 className="text-lg font-semibold">Look for your Alumnis</h1>
      <SearchInput handleInputChange={handleInputChange} />
      <h1 className="text-lg font-semibold mt-3">Batch Year</h1>
      <div className="flex items-center gap-2 mt-2">
        {[2021, 2022, 2023, 2024].map((item) => (
          <div
            key={item}
            onClick={() => handleSearchYear(item.toString())}
            className={`${
              item.toString() == searchYear ? "post-bg" : ""
            } border py-1 px-3 rounded-md`}
          >
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniSearch;
