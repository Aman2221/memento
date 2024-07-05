import Image from "next/image";
import React from "react";

const SelectedImages = ({
  files,
  handleRemoveImg,
  imgHeight = 50,
  imgWidth = 50,
  showClose = false,
  imgExtrClass = "",
  divExtrClass = "",
}: {
  files: File[];
  handleRemoveImg: (a: number) => void;
  imgHeight?: number;
  imgWidth?: number;
  showClose?: boolean;
  imgExtrClass?: string;
  divExtrClass?: string;
}) => {
  return (
    <div className={`flex flex-col items-center  ${divExtrClass}`}>
      {files.map((file, index) => {
        const objectUrl = URL.createObjectURL(file);
        return (
          <div
            key={file.name}
            className={`flex items-center justify-start gap-3 mb-3 px-3 relative ${divExtrClass}`}
          >
            {showClose ? (
              <span
                onClick={() => handleRemoveImg(index)}
                className="absolute -top-3 right-0 z-10 w-6 h-6 bg-slate-50 shadow-md left-1 rounded-full flex items-center justify-center"
              >
                <i className="bx bx-x"></i>
              </span>
            ) : (
              <></>
            )}
            <Image
              height={imgHeight}
              width={imgWidth}
              alt="img"
              src={objectUrl}
              className={`shadow-lg -z-20 ${imgExtrClass}`}
              sizes="100vw"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SelectedImages;
