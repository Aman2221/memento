import React from "react";
import Nav from "./Nav";
import Image from "next/image";

const TermsAndCondition = () => {
  return (
    <div>
      <Nav middleText="Terms & Conditions" />
      <div className="py-20 flex-center flex-col">
        <Image
          className="w-full object-contain"
          src="/img/terms.png"
          height={0}
          width={0}
          sizes="100vw"
          alt="terms and condition image"
        />
        <span className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum
        </span>
      </div>
    </div>
  );
};

export default TermsAndCondition;
