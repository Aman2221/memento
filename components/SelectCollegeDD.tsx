import React from "react";
import data from "@/json/index.json";

const SelectCollegeDD = () => {
  return (
    <select
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
  );
};

export default SelectCollegeDD;
