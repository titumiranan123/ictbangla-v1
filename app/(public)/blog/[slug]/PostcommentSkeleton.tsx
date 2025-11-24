"use client";
import { FaRegCalendarAlt, FaRegComment, FaRegHeart } from "react-icons/fa";

const PostcommentSkeleton = () => {
  return (
    <div className="container mt-10 px-4 animate-pulse">
      {/* Feature Image Skeleton */}
      <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gray-200"></div>

      {/* Meta Information Skeleton */}
      <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-600">
        <div className="flex items-center gap-2">
          <FaRegCalendarAlt />
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>

        <div className="flex items-center gap-2">
          <FaRegComment />
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>

        <div className="flex items-center gap-2">
          <FaRegHeart />
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Title and Subtitle Skeleton */}
      <div className="mt-8 space-y-2">
        <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
        <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
      </div>

      {/* Description Skeleton */}
      <div className="mt-8 space-y-3">
        <div className="h-6 w-1/4 bg-gray-200 rounded"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 w-full bg-gray-200 rounded"></div>
        ))}
      </div>

      {/* Content Images Skeleton */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="h-80 rounded-xl bg-gray-200"></div>
        <div className="h-80 rounded-xl bg-gray-200"></div>
      </div>

      {/* What You'll Learn Skeleton */}
      <div className="mt-12 space-y-4">
        <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
        <div className="grid md:grid-cols-2 gap-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded-full mt-1"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements Skeleton */}
      <div className="mt-8 space-y-4">
        <div className="h-6 w-1/4 bg-gray-200 rounded"></div>
        <div className="space-y-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded-full mt-1"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Like and Comment Section Skeleton */}
      <div className="mt-12 border-t pt-8 space-y-8">
        <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
        
        {/* Comments Section Skeleton */}
        <div className="space-y-4">
          <div className="h-6 w-1/4 bg-gray-200 rounded"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border rounded-lg p-4 bg-white">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="h-4 w-32 bg-gray-200 rounded"></div>
                      <div className="h-3 w-24 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostcommentSkeleton;