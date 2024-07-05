"use client";
import React, { useState } from "react";

const AlumniSearch = () => {
  const [search, setSearch] = useState({
    searchkey: "",
    searchYear: "",
  });

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let target: any = e.target;
    setSearch({
      ...search,
      searchkey: target.value,
    });
  };

  const handleSearchYear = (year: string) => {
    setSearch({
      ...search,
      searchYear: year,
    });
  };

  return (
    <div className="flex flex-col mt-24">
      <h1 className="text-lg font-semibold">Look for your Alumnis</h1>
      <div className="flex items-center border rounded-md px-2 mt-2">
        <i className="bx bx-search-alt-2 text-2xl text-gray-400"></i>
        <input
          placeholder="Search here"
          type="text"
          className="border-none bg-transparent p-2 text-sm"
          onChange={handleInputChange}
        />
      </div>
      <h1 className="text-lg font-semibold mt-3">Batch Year</h1>
      <div className="flex items-center gap-2 mt-2">
        {[2021, 2022, 2023, 2024].map((item) => (
          <div
            onClick={() => handleSearchYear(item.toString())}
            className={`${
              item.toString() == search.searchYear ? "post-bg" : ""
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
