const BlogCardSkeleton = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white animate-pulse">
      <div className="relative w-full h-48 bg-gray-200"></div>
      <div className="p-5">
        <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded mt-2"></div>
        <div className="mt-4 flex items-center justify-between">
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
          <div className="flex items-center space-x-2">
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
