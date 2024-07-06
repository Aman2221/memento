import React from "react";

const BackIcon = ({ onClick }: { onClick?: () => void }) => {
  return (
    <i onClick={onClick} className="bx bx-arrow-back font-bold text-lg"></i>
  );
};

export const RightIcon = ({ onClick }: { onClick?: () => void }) => {
  return (
    <i onClick={onClick} className="bx bx-chevron-right font-bold text-lg"></i>
  );
};

export default BackIcon;
