const MonthlySkeleton = () => {
    return (
      <div className="animate-pulse px-4 py-6">
        <div className="mx-auto bg-white max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-6">
            📅 Monthly Class Schedule
          </h2>
  
          {/* Navigation & Month-Year Placeholder */}
          <div className="flex items-center justify-between mb-4">
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Previous month">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
  
            <div className="bg-slate-300 w-32 h-6 rounded-md"></div>
  
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Next month">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
  
          {/* Weekday Labels */}
          <div className="grid grid-cols-7 gap-2 text-center mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]?.map((day) => (
              <div key={day} className="text-sm font-medium text-gray-500 py-1">{day}</div>
            ))}
          </div>
  
          {/* Monthly Calendar Grid (6x7 = 42 cells) */}
          <div className="grid grid-cols-7 gap-2">
            {[...Array(42)]?.map((_, i) => (
              <div
                key={i}
                className="h-20 border border-gray-300 bg-slate-100 rounded-lg flex flex-col items-center justify-start p-2"
              >
                <div className="w-6 h-6 rounded-full bg-slate-300 mb-1"></div>
                <div className="w-full h-3 bg-slate-200 rounded-md mt-auto"></div>
              </div>
            ))}
          </div>
  
      
        </div>
      </div>
    );
  };
  
  export default MonthlySkeleton;
  