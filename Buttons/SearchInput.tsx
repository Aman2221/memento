import React from "react";

const SearchInput = ({
  handleInputChange,
}: {
  handleInputChange: (a: any) => void;
}) => {
  return (
    <div className="flex items-center border rounded-md px-2 mt-2">
      <i className="bx bx-search-alt-2 text-2xl text-gray-400"></i>
      <input
        placeholder="Search here"
        type="text"
        className="border-none bg-transparent p-2 text-sm"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
