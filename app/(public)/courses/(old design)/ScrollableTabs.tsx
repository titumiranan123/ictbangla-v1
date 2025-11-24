import React, { useRef, useState, useEffect } from "react";

interface Tab {
  section_title: string;
  section_content: string;
}

interface ScrollableTabsProps {
  tabs: Tab[];
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

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scrollByTabWidth = (direction: "left" | "right") => {
    const el = tabListRef.current;
    if (!el) return;

    // ধরুন প্রতিটি child হচ্ছে একটা tab button
    const children = Array.from(el.children) as HTMLButtonElement[];

    if (children.length === 0) return;

    // ধরে নিচ্ছি active tab থেকে scroll হবে
    const activeTab = children[activeIndex];
    const amount = activeTab?.offsetWidth || 150;

    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkForScrollPosition();
    // Optional: check on window resize
    window.addEventListener("resize", checkForScrollPosition);
    return () => window.removeEventListener("resize", checkForScrollPosition);
  }, []);

  const onScroll = () => {
    checkForScrollPosition();
  };

  return (
    <div className="border-b w-full flex justify-center items-center">
      <button
        onClick={() => scrollByTabWidth("left")}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
        style={{
          cursor: canScrollLeft ? "pointer" : "not-allowed",
          opacity: canScrollLeft ? 1 : 0.3,
          display: !canScrollLeft ? "none" : "block",
          border: "none",
          background: "transparent",
          fontSize: "24px",
          userSelect: "none",
        }}
      >
        &#8592;
      </button>

      <div
        ref={tabListRef}
        onScroll={onScroll}
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          flexGrow: 1,
          margin: "0 8px",
          scrollbarWidth: "none", // Firefox
        }}
        className="hide-scrollbar"
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => onTabClick(i)}
            style={{
              display: "inline-block",
              padding: "10px 20px",
              marginRight: 8,
              borderBottom: activeIndex === i ? "" : "",
              background: "none",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            className={`
                ${
                  activeIndex === i
                    ? "font-semibold after:scale-x-100 text-primary"
                    : "normal after:scale-x-0"
                }
                relative
                after:content-['']
                after:block
                after:w-full
                after:h-[2px]
                after:bg-green-500
                after:absolute
                after:bottom-0
                after:left-0
                after:origin-left
                after:transition-transform
                after:duration-700
                hover:after:scale-x-100
                md:text-[22px]
                text-[18px]
                
                bg-red-50
              `}
          >
            {tab.section_title}
          </button>
        ))}
      </div>

      <button
        onClick={() => scrollByTabWidth("right")}
        disabled={!canScrollRight}
        aria-label="Scroll right"
        style={{
          cursor: canScrollRight ? "pointer" : "not-allowed",
          opacity: canScrollRight ? 1 : 0.3,
          border: "none",
          background: "transparent",
          fontSize: "24px",
          userSelect: "none",
          display: !canScrollRight ? "none" : "block",
        }}
      >
        &#8594;
      </button>
    </div>
  );
};

export default ScrollableTabs;
