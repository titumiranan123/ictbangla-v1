/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";




interface InstructorCardProps {
  instructor: any;
}

const TeampInstructorcard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <div className="w-full max-w-[260px] border rounded-lg overflow-hidden p-2 shadow-lg hover:shadow-md transition-shadow bg-white">
      {/* Instructor Image */}
      <div className="block">
        <div className="relative h-[290px] w-full">
          <Image
            src={instructor?.image ?? ""}
            alt={`${instructor.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 320px) 100vw, 320px"
          />
        </div>
      </div>

      {/* Instructor Info */}
      <div className="">
        


       <div className="mt-2 block">
          <h3 className="text-[21px] text-center font-semibold text-red-500 hover:text-[#1cab55] transition-colors">
            {instructor.name} 
          </h3>
          <h3 className="text-[16px] text-center  text-[#3f3f3f] hover:text-[#1cab55] transition-colors">
            {instructor.specialize} 
          </h3>
        </div>

        
      </div>
    </div>
  );
};

export default TeampInstructorcard;
