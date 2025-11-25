/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Image from "next/image";

const gallery = [
  {
    category: "Bdjobs Fresher's Career Fair Khulna",
    catData: [
      "https://i.postimg.cc/DzF7f24n/481259418-1558182218275366-8269687671384825377-n.jpg",
      "https://i.postimg.cc/vB2yvfqZ/481261458-1558182251608696-7997655259735492225-n.jpg",
      "https://i.postimg.cc/pTLx8qBS/481311128-1558182444942010-2933309907819403584-n.jpg",
      "https://i.postimg.cc/TP9fpZnm/481765435-1558182261608695-3437346795488777743-n.jpg",
    ],
  },
  {
    category: "NUSDF Development Summit & Job Fair 2024",
    catData: [
      "https://i.postimg.cc/x8Kcp6WP/1.png",
      "https://i.postimg.cc/ZY3BqqCy/2.png",
      "https://i.postimg.cc/vmNg4gr5/3.png",
      "https://i.postimg.cc/qqfNGPZR/4.png",
    ],
  },
];

export default function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState(gallery[0]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'category'

  const handleCategorySelect = (category: any) => {
    setActiveCategory(category);
    setViewMode("category");
    setShowSidebar(false);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 container mx-auto px-4">
      {/* Mobile menu button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-green-600 text-white p-2 rounded-md shadow-lg hover:bg-green-700 transition-colors"
      >
        {showSidebar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`w-full lg:w-72 bg-white  p-4 space-y-2 fixed lg:static z-40 h-full lg:h-auto transition-all duration-300 ease-in-out transform
          ${
            showSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } lg:transform-none`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Media Center</h2>
          <button
            onClick={() => setViewMode("grid")}
            className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md transition-colors"
          >
            View All
          </button>
        </div>
        <div className="space-y-1">
          {gallery.map((item) => (
            <button
              key={item.category}
              onClick={() => handleCategorySelect(item)}
              className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 flex items-center
                ${
                  activeCategory.category === item.category &&
                  viewMode === "category"
                    ? "bg-green-600 text-white shadow-md"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
            >
              <span className="truncate">{item.category}</span>
              {activeCategory.category === item.category &&
                viewMode === "category" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
            </button>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 lg:p-8  mt-16 lg:mt-0">
        {viewMode === "grid" ? (
          <>
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Media Gallery
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleCategorySelect(item)}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <Image
                      src={item.catData[0]}
                      alt={`Cover ${item.category}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                      {item.category}
                    </h3>
                    <p className="text-green-600 text-sm font-medium flex items-center">
                      View Gallery
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {activeCategory.category}
              </h1>
              <button
                onClick={() => setViewMode("grid")}
                className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Gallery
              </button>
            </div>

            <div className="mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {activeCategory.catData.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-200 relative group"
                  >
                    <Image
                      src={img}
                      alt={`Image ${i}`}
                      fill
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
