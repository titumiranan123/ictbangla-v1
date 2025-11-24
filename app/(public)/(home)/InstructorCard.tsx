import Image from "next/image";
import React from "react";

const InstructorCard = () => {
  return (
    <div className="border bg-[#F3F4F6] border-[#DFDFDF] rounded-2xl p-5 group hover:border-1 hover:border-primary transition duration-700 ease-in-out">
      <div className="w-full h-[311px] bg-[#F3F4F6]  bg-gradient-to-b from-[#EAF7ED] to-[#BDE6C6] relative rounded-2xl">
        <div className="h-[270px] w-[243px]  absolute bottom-0 left-1/2 -translate-x-1/2">
          <Image
            src="/assets/demo-images/rajon_vai_image.png"
            height={270}
            width={243}
            alt="ict bangla"
            className="w-full h-full"
          />
          <div className="absolute top-0 -z-10 text-[#B3DFBD] group-hover:text-[#48E06C] transition-colors duration-700 ease-in-out w-full flex items-center flex-col pt-2">
            <svg
              width="222"
              height="250"
              viewBox="0 0 222 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_40000619_1322)">
                <path d="M44.4135 0H0V44.5035H44.4135V0Z" fill="currentColor" />
                <path
                  d="M88.506 72.6719H72.5384V120.155C77.4892 118.233 82.8709 117.167 88.506 117.167C88.5145 117.167 88.5145 117.167 88.5229 117.167C89.2072 117.167 89.8746 117.184 90.5421 117.218C90.7364 117.218 90.9223 117.226 91.1166 117.252C91.8178 117.285 92.5106 117.345 93.1864 117.421C94.158 117.522 95.1296 117.658 96.0843 117.827C96.532 117.903 96.9629 117.979 97.3938 118.073C98.3569 118.276 99.3116 118.504 100.258 118.767C100.579 118.86 100.908 118.953 101.229 119.046C101.88 119.241 102.522 119.461 103.156 119.672C120.289 125.724 132.565 142.11 132.565 161.34C132.565 185.725 112.829 205.505 88.4891 205.505C72.1413 205.505 57.8719 196.584 50.2514 183.347C50.243 183.338 50.243 183.33 50.243 183.313C49.8881 182.703 49.5586 182.094 49.2291 181.459C48.8912 180.799 48.5617 180.113 48.2576 179.419C47.9788 178.801 47.7253 178.175 47.4634 177.549C45.4865 172.53 44.3966 167.062 44.3966 161.349C44.3966 161.34 44.3966 161.34 44.3966 161.332V121.585V117.158V72.6719H0V117.175V121.602V161.349C0 162.348 0.0168969 163.346 0.0506907 164.337C1.6221 211.912 40.6202 250.017 88.506 250.017C137.38 250.017 177.004 210.313 177.004 161.349C177.004 112.359 137.38 72.6719 88.506 72.6719Z"
                  fill="currentColor"
                />
                <path
                  d="M104.364 161.357C104.364 152.596 97.2753 145.495 88.5311 145.495C79.787 145.495 72.6987 152.596 72.6987 161.357C72.6987 170.108 79.787 177.21 88.5311 177.21C97.2753 177.21 104.364 170.108 104.364 161.357Z"
                  fill="currentColor"
                />
                <path
                  d="M222 99.68L195.083 92.5703L185.672 104.318C185.672 104.318 175.669 79.1888 156.297 70.3524C156.863 70.801 174.875 85.1305 182.377 109.244L178.465 114.67C166.57 89.4301 143.413 70.5386 115.524 64.5715L115.474 64.5292L129.743 45.5276L117.045 21.1514L184.413 39.4335L222 99.68Z"
                  fill="currentColor"
                />
                <path
                  d="M210.164 95.8457L211.279 126.942H213.349L214.811 95.8457H210.164Z"
                  fill="currentColor"
                />
                <path
                  d="M212.487 133.604C214.512 133.604 216.154 131.959 216.154 129.93C216.154 127.901 214.512 126.257 212.487 126.257C210.462 126.257 208.821 127.901 208.821 129.93C208.821 131.959 210.462 133.604 212.487 133.604Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_40000619_1322">
                  <rect width="222" height="250" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="absolute inset-0 bg-[#ffffff2a] backdrop-blur-[3px] z-0"></div>
          </div>
        </div>
        <div className="h-[82px] bg-gradient-to-b from-[rgba(189,230,198,0)] to-[#BDE6C6] absolute bottom-0 w-full z-20 rounded-b-2xl"></div>
      </div>
      <div className="mt-6 text-center">
        <h4 className="text-[32px] font-bold text-[#FF5457] group-hover:text-primary transition duration-700 ease-in-out">
          Arif M Rajon
        </h4>
        <p className="text-2xl font-medium text-[#8A8A8A] ">
          Soft Skill Instructor
        </p>
      </div>
    </div>
  );
};

export default InstructorCard;
