import React from "react";

const SmBgPurpleRounded = ({
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
      className={`max-w-max bg-purple-500 border-2 py-2 px-3 text-sm rounded-full ${extraClasses}`}
    >
      {buttonText}
    </button>
  );
};

export default SmBgPurpleRounded;
