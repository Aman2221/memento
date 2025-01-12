import React from "react";

const BgPurple = ({
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
      className={`max-w-max bg-purple-400 border-2 px-8 py-2 rounded-md mt-10${extraClasses}`}
    >
      {buttonText}
    </button>
  );
};

export default BgPurple;
