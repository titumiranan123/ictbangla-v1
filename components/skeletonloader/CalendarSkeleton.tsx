const ClassScheduleSkeleton = () => {
  return (
    <div className="animate-pulse  gap-4">
      <div className="mx-auto  bg-white ">
        <h2 className="text-2xl font-bold text-center mb-10">
          📅 Weekly Class Schedule
        </h2>
        {/* Calendar Grid - Enhanced Design */}

        <div className="flex items-center justify-center space-x-4 mt-5 mb-5">
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Previous week"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="text-center">
            <div className="font-medium  w-20 bg-slate-300 h-7 rounded-lg"></div>
          </div>

          <button
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Next week"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mb-6">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-500 py-2"
            >
              {day}
            </div>
          ))}
        </div>
        {
          <div className="grid grid-cols-7 gap-3">
            <div
              className={`relative flex flex-col items-center p-2 rounded-lg transition-all duration-200 border h-14 border-green-500 bg-green-5 `}
            >
              <span
                className={`text-sm  bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium }`}
              ></span>
            </div>
            {
                [...Array(6)].map((_,i)=><div
                key={i}
                className={`relative flex flex-col items-center p-2 rounded-lg transition-all duration-200 border h-14 border-slate-400 `}
              >
                <span
                  className={`text-sm  bg-slate-300 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium }`}
                ></span>
              </div>)
            }
          </div>
        }
        {/* Class Schedule Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`p-4 rounded-md shadow-md transition-all duration-200 `}
            >
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <span className="mr-2">📚</span>
                <p className="w-32 h-5 bg-slate-300 rounded-lg"></p>
              </h3>
              <p className="text-sm text-gray-600 flex items-center">
                <span className="mr-2">📅</span>
                <p className="w-28 h-5 bg-slate-300 rounded-lg"></p>
              </p>
              <p className="text-sm text-gray-600 flex items-center mt-2">
                <span className="mr-2">⏰</span>
                <p className="w-24 h-5 bg-slate-300 rounded-lg"></p>
              </p>
              <p className="text-red-600 text-sm mt-2 flex items-center">
                  <span className="mr-2">❌</span>
                  <p className="w-32 h-5 bg-red-300 bg-opacity-40 rounded-lg"></p>
                </p>
              {/*      
                   {isUpcoming && (
                     <div className="mt-3">
                       <div className="w-full bg-gray-200 rounded-full h-2">
                         <div
                           className="bg-primary h-2 rounded-full"
                           style={{ width: `${progress}%` }}
                         ></div>
                       </div>
                       <p className="text-sm mt-1 text-primary">
                         {isUpcoming ? "Starts in: " : "Join before: "}
                         {formatTime(timeLeft || 0)}
                       </p>
                     </div>
                   )} */}

              {/* {isOngoing && (
                     <button
                       className={`mt-3 px-4 py-2 w-full rounded-md text-sm font-semibold bg-primary hover:bg-primary text-white
                       `}
                       disabled={isJoinDisabled}
                       onClick={() => window.open(cls.link, "_blank")}
                     >
                       Join Now {formatTime(timeLeft || 0)}
                     </button>
                   )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassScheduleSkeleton;
