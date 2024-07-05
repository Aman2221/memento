import React from "react";

const SmBgPurple = ({
  onClick,
  buttonText,
  extraClasses,
}: {
  buttonText: string;
  onClick?: () => void;
  extraClasses?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`max-w-max bg-purple-500 border-2 py-2 px-3 text-sm rounded-md ${extraClasses}`}
    >
      {buttonText}
    </button>
  );
};

export default SmBgPurple;
