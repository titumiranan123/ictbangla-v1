"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

interface ScrollableTabsProps {
  tabs: string[];
  activeIndex: number;
  onTabClick: (index: number) => void;
}

const ScrollableTabs: React.FC<ScrollableTabsProps> = ({
  tabs,
  activeIndex,
  onTabClick,
}) => {
  const tabListRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkForScrollPosition = () => {
    const el = tabListRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  const scrollByTabWidth = (direction: "left" | "right") => {
    const el = tabListRef.current;
    if (!el) return;
    const amount = 150; // scroll amount
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkForScrollPosition();
    window.addEventListener("resize", checkForScrollPosition);
    return () => window.removeEventListener("resize", checkForScrollPosition);
  }, []);

  const onScroll = () => {
    checkForScrollPosition();
  };

  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <div className="flex items-center w-full">
        {/* Left Scroll Arrow */}
        <button
          onClick={() => scrollByTabWidth("left")}
          disabled={!canScrollLeft}
          className={`text-2xl px-2 transition-opacity ${
            canScrollLeft ? "opacity-100" : "disabled:text-slate-400"
          }`}
        >
          <ArrowLeft />
        </button>

        {/* Tab List */}
        <div
          ref={tabListRef}
          onScroll={onScroll}
          className="flex-1 overflow-hidden whitespace-nowrap  relative"
        >
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => onTabClick(i)}
              className={`relative px-5 py-3 md:text-[18px] text-[16px] font-semibold whitespace-nowrap transition-colors duration-300
                ${
                  activeIndex === i
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
            >
              {tab}
              {/* Active underline */}
              <span
                className={`absolute left-0 bottom-0 h-[6px] rounded-full bg-primary transition-all duration-500 z-10 ${
                  activeIndex === i ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Right Scroll Arrow */}
        <button
          onClick={() => scrollByTabWidth("right")}
          disabled={!canScrollRight}
          className={`text-2xl px-2  transition-opacity ${
            canScrollRight ? "opacity-100" : "disabled:text-slate-500"
          }`}
        >
          <ArrowRight />
        </button>
      </div>
      <div className="relative md:w-[90%] w-[80%] h-[6px] bg-gray-200 rounded-full -mt-1.5 overflow-hidden "></div>
      {/* Scroll progress bar */}
    </div>
  );
};

export default ScrollableTabs;
