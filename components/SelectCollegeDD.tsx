import React from "react";
import data from "@/json/index.json";

const SelectCollegeDD = ({
  handleChange,
}: {
  handleChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <>
      <div className="relative w-full">
        <span className="absolute top-2 right-2">
          <i className="bx bx-caret-down text-2xl"></i>
        </span>
      </div>
      <select
        onChange={handleChange}
        name="select_college"
        id="select_college"
        className="w-full bg-transparent border-none shadow-md py-2 px-3 text-gray-400 overflow-hidden border-0"
      >
        <option className=" text-gray-400" value="select your college">
          Select yout college
        </option>
        {data.colleges_list.map((item: string) => (
          <option
            key={item}
            className="w-full bg-none text-gray-400"
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectCollegeDD;
