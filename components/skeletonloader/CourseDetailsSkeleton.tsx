const CourseDetailsSkeleton = () => {
    return (
      <div className="rounded-[12px] md:h-[1080px] h-[1000px] lg:w-[460px] w-full shadow-md md:p-5 flex flex-col bg-white">
        {/* Thumbnail Skeleton */}
        <div className="w-full h-[250px] rounded-[12px] overflow-hidden bg-slate-300 animate-pulse"></div>
  
        <div className="p-4">
          {/* Price Skeleton */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <div className="w-20 h-8 bg-slate-300 animate-pulse rounded"></div>
              <div className="w-16 h-6 bg-slate-300 animate-pulse rounded"></div>
            </div>
            <div className="w-12 h-6 bg-slate-300 animate-pulse rounded"></div>
          </div>
  
          {/* Buttons Skeleton */}
          <div className="space-y-4">
            <div className="w-full h-12 bg-slate-300 animate-pulse rounded"></div>
            <div className="w-full h-12 bg-slate-300 animate-pulse rounded"></div>
          </div>
  
          {/* Guarantee Text Skeleton */}
          <div className="w-3/4 h-5 mx-auto my-8 bg-slate-300 animate-pulse rounded"></div>
  
          {/* Course Includes Skeleton */}
          <div>
            <div className="w-1/2 h-6 mb-6 bg-slate-300 animate-pulse rounded"></div>
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-slate-300 animate-pulse rounded-full"></div>
                  <div className={`h-5 bg-slate-300 animate-pulse rounded ${i % 2 === 0 ? 'w-3/4' : 'w-2/3'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Share Section Skeleton */}
        <div className="mt-auto border-t flex flex-col justify-center items-center p-5">
          <div className="w-32 h-5 bg-slate-300 animate-pulse rounded"></div>
          <div className="flex gap-4 mt-5">
            <div className="w-11 h-11 bg-slate-300 animate-pulse rounded-full"></div>
            <div className="w-11 h-11 bg-slate-300 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CourseDetailsSkeleton;