/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { FiSearch, FiX, FiBook, FiClock, FiStar } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { ICourse } from "@/interface/Course";
import Image from "next/image";
import Link from "next/link";
import { api_url } from "@/hooks/apiurl";
import { createPortal } from "react-dom";

interface SearchProps {
  isSearch: boolean;
  setActiveSearch: (isActive: boolean) => void;
}

const NextSearch: React.FC<SearchProps> = ({ isSearch, setActiveSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState<ICourse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Set mounted to true when component mounts on client
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Debounce search function
  const debounce = (func: any, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const fetchSuggestions = useCallback(async (text: string) => {
    if (!text.trim()) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await api_url.get(`/v1/website/get-course/list`, {
        params: {
          page: 1,
          perPage: 5,
          orderBy: "FROM_NEW",
          searchText: text,
        },
      });
      setSuggestions(response?.data?.response);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Debounced version of fetchSuggestions
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFetch = useCallback(
    debounce((text: string) => fetchSuggestions(text), 300),
    [fetchSuggestions]
  );

  useEffect(() => {
    debouncedFetch(searchText);
  }, [searchText, debouncedFetch]);

  useEffect(() => {
    if (isSearch) {
      document.body.style.overflow = "hidden";
      searchInputRef.current?.focus();
    } else {
      document.body.style.overflow = "auto";
      setSearchText("");
      setSuggestions([]);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSearch]);

  const handleSuggestionClick = (course: ICourse) => {
    if (course?.basicInfo?.slug) {
      router.push(`/courses/${course?.basicInfo.slug}`);
    }
    setActiveSearch(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchText.trim() && suggestions.length > 0) {
      handleSuggestionClick(suggestions[0]);
    }
  };

  // Search Modal Content
  const searchModal = (
    <div
      className={`fixed inset-0 bg-black/70 backdrop-blur-sm w-full h-screen transition-all duration-500 ${
        isSearch ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{ zIndex: 9999 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0  animate-pulse"></div>

      <div className="container mx-auto px-4 h-full flex flex-col items-center pt-32 relative z-10">
        {/* Close Button */}
        <button
          onClick={() => setActiveSearch(!isSearch)}
          className="absolute top-8 right-8 text-white hover:text-[#1cab55] transition-all duration-300 transform hover:scale-110 bg-white/10 backdrop-blur-sm rounded-full p-3"
          aria-label="Close search"
        >
          <FiX size={24} />
        </button>

        {/* Search Form */}
        <div className="w-full max-w-4xl">
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-center bg-black backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
              <div className="pl-6 pr-4">
                <FiSearch className="text-white/70" size={24} />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="py-6 px-4 w-full focus:outline-none text-lg bg-transparent text-white placeholder-white"
                placeholder="What do you want to learn today?"
                autoComplete="off"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#1cab55] to-[#16d43b] lg:w-[70px] h-[80px] hover:from-[#16d43b] hover:to-[#1cab55] text-white p-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
                aria-label="Search"
              >
                <FiSearch size={24} />
              </button>
            </div>

            {/* Suggestions dropdown */}
            {searchText && (
              <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl mt-4 max-h-96 overflow-auto z-50 border border-white/20">
                {isLoading ? (
                  <div className="p-8 text-center">
                    <div className="flex justify-center items-center space-x-3">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1cab55]"></div>
                      <span className="text-gray-600">
                        Searching courses...
                      </span>
                    </div>
                  </div>
                ) : suggestions?.length > 0 ? (
                  <div className="py-4">
                    <div className="px-6 py-2">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Found {suggestions.length} courses
                      </h3>
                    </div>
                    <ul className="space-y-3 px-3 pb-3">
                      {suggestions?.map((course) => (
                        <li
                          key={course?._id}
                          className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 cursor-pointer rounded-xl border border-green-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group"
                          onClick={() => {
                            setActiveSearch(!isSearch);
                            handleSuggestionClick(course);
                          }}
                        >
                          <div className="flex items-center space-x-4">
                            {/* Course Image */}
                            <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                              <Image
                                src={
                                  course?.media?.thumbnail ??
                                  "/api/placeholder/80/80"
                                }
                                alt={course?.basicInfo?.title}
                                width={64}
                                height={64}
                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>

                            {/* Course Info */}
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 text-lg truncate group-hover:text-[#1cab55] transition-colors">
                                {course?.basicInfo?.title}
                              </h3>

                              {/* Course Meta */}
                              <div className="flex items-center mt-2 space-x-4 flex-wrap gap-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1cab55] text-white text-sm font-medium">
                                  {course?.pricing?.isFree
                                    ? "Free"
                                    : `Tk. ${course?.pricing?.price?.main}`}
                                </span>

                                <span className="inline-flex items-center text-sm text-gray-600">
                                  <FiBook className="mr-1" size={14} />
                                  {course?.info?.sections?.length || 0} Sections
                                </span>

                                <span className="inline-flex items-center text-sm text-gray-600">
                                  <FiClock className="mr-1" size={14} />
                                  {course?.basicInfo?.level}
                                </span>

                                {course?.rating?.average && (
                                  <span className="inline-flex items-center text-sm text-amber-600">
                                    <FiStar
                                      className="mr-1 fill-amber-400"
                                      size={14}
                                    />
                                    {course.rating.average}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* View Details Button */}
                            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Link
                                href={`/courses/${course?.basicInfo?.slug}`}
                                className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#1cab55] to-[#16d43b] text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                onClick={() => setActiveSearch(!isSearch)}
                              >
                                View Course
                              </Link>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="text-gray-500 mb-2">
                      <FiSearch size={48} className="mx-auto mb-4 opacity-50" />
                    </div>
                    <p className="text-gray-600 text-lg">
                      No courses found for{" "}
                      <span className="font-semibold text-gray-900">
                        {searchText}
                      </span>
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Try different keywords or browse our categories
                    </p>
                  </div>
                )}
              </div>
            )}
          </form>

          {/* Popular Searches */}
          <div className="text-center mt-8">
            <p className="text-white/60 text-sm font-light mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                🔥 Popular Courses
              </span>
            </p>

            <div className="flex justify-center items-center flex-wrap gap-2 text-sm">
              {[
                "Fiverr Freelancing",
                "AI Content Creation",
                "Canva Mastery",
                "Digital Marketing",
                "Passive Income",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchText(term)}
                  className="text-white/70 hover:text-[#1cab55] transition-all duration-200 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full border border-white/20 hover:border-[#1cab55]/50"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render using portal if mounted and isSearch is true
  if (!mounted || !isSearch) return null;

  return createPortal(searchModal, document.body);
};

export default NextSearch;
