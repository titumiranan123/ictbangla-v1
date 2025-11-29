/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import arrow from "@/public/assets/icon/angle-small-right.svg";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterSection {
  title: string;
  key: string; // example: "category", "level", "rating"
  data: {
    _id: string;
    title: string;
    slug?: string;
  }[];
}

interface Props {
  filters: FilterSection[];
}

const CategoryFilter: React.FC<Props> = ({ filters }) => {
  console.log(filters[1]?.data);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string | null>
  >({});

  // initialize from URL
  useEffect(() => {
    const initialFilters: Record<string, string | null> = {};
    filters.forEach((f) => {
      initialFilters[f.key] = searchParams.get(f.key);
    });
    setSelectedFilters(initialFilters);
  }, [searchParams, filters]);

  const formatTitle = (t: string) => t.replace(/\s+/g, "_");

  const handleCheckboxChange = (filterKey: string, value: string) => {
    const formattedValue =
      filterKey === "category" ? value : formatTitle(value);

    const params = new URLSearchParams(searchParams.toString());
    const currentValue = selectedFilters[filterKey];

    if (currentValue === formattedValue) {
      params.delete(filterKey);
      setSelectedFilters({ ...selectedFilters, [filterKey]: null });
    } else {
      params.set(filterKey, formattedValue);
      setSelectedFilters({ ...selectedFilters, [filterKey]: formattedValue });
    }

    router.replace(`${window.location.pathname}?${params.toString()}`);
  };

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="border border-gray-200 rounded-lg divide-y divide-gray-100 text-black">
      {filters.map((filter) => {
        const isOpen = openSections[filter.key] ?? true;
        const selectedValue = selectedFilters[filter.key];
        return (
          <div key={filter.key} className="p-5">
            {/* Header */}
            <div
              onClick={() => toggleSection(filter.key)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h1 className="text-[18px] font-semibold">{filter.title}</h1>
              <Image
                className={`transition-transform duration-300 ${
                  isOpen ? "-rotate-90" : "rotate-90"
                }`}
                src={arrow}
                alt="toggle"
              />
            </div>

            {/* Filter Options */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[400px] mt-3" : "max-h-0"
              }`}
            >
              {filter.data.map((item: any) => {
                const value =
                  filter.key === "categories"
                    ? item.slug
                    : formatTitle(item.title);
                return (
                  <label
                    key={item._id}
                    className="flex items-center gap-3 mb-2 text-[15px] font-[500]"
                  >
                    <input
                      type="checkbox"
                      className="accent-black"
                      checked={selectedValue === value}
                      onChange={() => handleCheckboxChange(filter.key, value)}
                    />
                    <span className="capitalize">{item.title}</span>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
