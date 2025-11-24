import Image from "next/image";
import React from "react";

interface IconImageProps {
  fileName: string;
  className?: string;
}

const IconImage: React.FC<IconImageProps> = ({ fileName, className }) => {
  return (
    <Image
      src={`/assets/icon/${fileName}`}
      alt="ict-bangla"
      width={24}
      height={24}
      className={`${className} w-6 h-6 object-fill`}
    />
  );
};

export default IconImage;
