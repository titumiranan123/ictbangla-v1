/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CategoryFilter from "@/components/(home)/course/filter/Categoryfilter";
import { useRouter } from "next/navigation";

const Sidebarfileter = ({
  mobile = false,
  categories,
}: {
  mobile?: boolean;
  categories: any;
}) => {
  const router = useRouter();
  const filterConfig = [
    {
      title: "Category",
      key: "categories",
      data: [...categories],
    },

    {
      title: "Level",
      key: "level",
      data: [
        { _id: "1", title: "BEGINER" },
        { _id: "2", title: "INTERMIDIATE" },
        { _id: "3", title: "ADVANCED" },
      ],
    },
    {
      title: "Rating",
      key: "rating",
      data: [
        { _id: "1", title: "*" },
        { _id: "2", title: "**" },
        { _id: "3", title: "***" },
        { _id: "4", title: "****" },
        { _id: "5", title: "*****" },
      ],
    },
  ];
  const handleResetFilters = () => {
    // remove all filter params from the URL
    router.replace(window.location.pathname);
  };
  return (
    <aside
      className={`${
        mobile
          ? "fixed lg:hidden top-16 w-full left-0 z-50 bg-white p-8 overflow-y-auto"
          : "sticky top-4 max-h-[1100px] h-full lg:col-span-3 col-span-12 md:col-span-4 p-8 border border-[#d1fadf] rounded-lg shadow-md pb-20 z-40 bg-white hidden lg:block"
      }`}
      aria-label="Filter options"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#1D2939]">
          {mobile ? "Filters" : ""}
        </h2>
        {mobile && (
          <button
            className="text-[#1D2939] hover:text-[#e1242c]"
            // onClick={toggleSidebar}
            aria-label="Close filters"
          >
            ✕
          </button>
        )}
      </div>

      <button
        onClick={handleResetFilters}
        className="w-full py-2 text-[16px] border border-[#e1242c] text-[#e1242c] rounded-md transition-colors mb-6 hover:bg-[#f6fef9]"
      >
        Reset All Filters
      </button>

      <div className="space-y-6">
        <CategoryFilter filters={filterConfig} />
      </div>
    </aside>
  );
};

export default Sidebarfileter;
