import Link from "next/link";
import React from "react";
interface prop {
  className: string;
  title: string;
  isIcon?: boolean;
  hoverColor?: string;
  href?: string;
}
const Button: React.FC<prop> = ({
  className,
  title,
  isIcon = true,
  hoverColor,
  href,
}) => {
  return (
    <>
      {href ? (
        <Link
          href={`${href}`}
          className={`flex overflow-hidden items-center justify-center group/icon ${className} before:absolute before:right-0 before:-top-2 before:h-[80px]  before:w-6 before:translate-x-20 before:rotate-[20deg]  before:bg-white before:opacity-60 before:blur-[3px] before:duration-700 hover:before:-translate-x-56 relative before:content-['']`}
        >
          {title}
          {isIcon && (
            <svg
              style={{ strokeWidth: "4px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`ml-2 fill-current  w-4 h-3 `}
            >
              <path d="M22,0H10V2h10.586L.043,22.543l1.414,1.414L22,3.414V14h2V2c0-1.103-.897-2-2-2Z" />
            </svg>
          )}
          <style>
            {`
          .group:hover/icon svg {
           fill : ${hoverColor}
          }
          `}
          </style>
        </Link>
      ) : (
        <button
          className={`flex items-center justify-center group/icon ${className}`}
        >
          {title}
          {isIcon && (
            <svg
              style={{ strokeWidth: "4px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`ml-2 fill-current   w-4 h-3 `}
            >
              <path d="M22,0H10V2h10.586L.043,22.543l1.414,1.414L22,3.414V14h2V2c0-1.103-.897-2-2-2Z" />
            </svg>
          )}
          <style>
            {`
            .group:hover/icon svg {
             fill : ${hoverColor}
            }
            `}
          </style>
        </button>
      )}
    </>
  );
};

export default Button;
