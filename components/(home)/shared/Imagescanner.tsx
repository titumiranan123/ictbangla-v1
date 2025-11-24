import Image from "next/image";
import React, { useRef, useState } from "react";
import shop from "@/public/assets/shop/shop-1.png";
const Imagescanner = () => {
  const zoomfactor = 2;
  const imgRef = useRef<HTMLDivElement>(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [zoomBoxPosition, setZoomBoxPosition] = useState({ x: 0, y: 0 });

  const [isZoomActive, setIsZoomActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    const xp = e.clientX - left;
    const yp = e.clientY - top;
    setZoomPosition({ x, y });
    setZoomBoxPosition({ x: xp, y: yp });
  };
  return (
    <div className="relative">
      <div
        ref={imgRef}
        onMouseEnter={() => setIsZoomActive(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsZoomActive(false)}
        className="lg:w-[686px] lg:h-[644px] border w-full h-auto rounded-[16px] lg:px-[98px] px-10 overflow-hidden relative"
      >
        <Image
          className="flex justify-center items-center w-full h-full"
          src={shop}
          alt=""
        />
        {isZoomActive && (
          <div
            className={`bg-red-500 hidden lg:block lg:absolute `}
            style={{
              width: "120px",
              height: "120px",
              left: `${zoomBoxPosition.x - 120 / 2}px`,
              top: `${zoomBoxPosition.y - 120 / 2}px`,
            }}
          ></div>
        )}
      </div>
      {isZoomActive && (
        <div
          className="hidden lg:block lg:absolute left-[686px] top-0 w-[486px] h-[644px]"
          style={{
            backgroundImage: `url(${shop.src})`,
            backgroundSize: `${zoomfactor * 100}%`,
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
          }}
        ></div>
      )}
    </div>
  );
};

export default Imagescanner;
