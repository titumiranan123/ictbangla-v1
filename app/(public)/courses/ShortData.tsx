"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SortDropdown = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get current sort from URL, or fallback to "default"
  const [sortOption, setSortOption] = useState(
    searchParams.get("sort") || "default"
  );

  // Update URL when sortOption changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (sortOption === "default") {
      params.delete("sort"); // remove param if default
    } else {
      params.set("sort", sortOption);
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.replace(newUrl, { scroll: false });
  }, [sortOption, router]);

  return (
    <div className="relative w-full md:w-auto">
      <select
        className="w-full md:w-48 p-2 border border-[#d1fadf] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1cab55]/50 text-[#1D2939]"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        aria-label="Sort courses by"
      >
        <option value="default">Default Sorting</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="ratingHighToLow">Rating: High to Low</option>
        <option value="ratingLowToHigh">Rating: Low to High</option>
      </select>
    </div>
  );
};

export default SortDropdown;
