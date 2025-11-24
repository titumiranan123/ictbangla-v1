import React from "react";
import Image from "next/image";
import {  FaUserGraduate, FaBookOpen } from "react-icons/fa";
import Link from "next/link";

interface Instructor {
  _id: string;
  image: string;
  first_name: string;
  last_name: string;
  total_students: number;
  total_courses: number;
  rating?: number;
}

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <div className="w-full lg:max-w-xs rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      {/* Instructor Image */}
      <Link href={`/instructors/${instructor._id}`} className="block">
        <div className="relative h-60 w-full">
          <Image
            src={instructor?.image ?? ""}
            alt={`${instructor.first_name} ${instructor.last_name}`}
            fill
            className="object-cover"
            sizes="(max-width: 320px) 100vw, 320px"
          />
        </div>
      </Link>

      {/* Instructor Info */}
      <div className="p-4">
        

        {/* Stats */}
        <div className="flex justify-between  text-sm text-[#585d69]">
          <div className="flex items-center gap-2">
            <FaUserGraduate className="" />
            <span>{instructor.total_students || 0} Students</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBookOpen className="" />
            <span>{instructor.total_courses || 0} Courses</span>
          </div>
        </div>

       <Link href={`/instructors/${instructor._id}`} className="mt-2 block">
          <h3 className="text-lg font-semibold text-red-500 hover:text-[#1cab55] transition-colors">
            {instructor.first_name} {instructor.last_name}
          </h3>
        </Link>

        
      </div>
    </div>
  );
};

export default InstructorCard;