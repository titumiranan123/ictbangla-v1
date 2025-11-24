"use client";
import React from "react";
interface TabItem {
  label: string;
  content: React.ReactNode;
}
interface TabsProps {
  isTabCenter?: boolean;
  tabs: TabItem[];
  activeTab: string;
  setActiveTab: (label: string) => void;
  isLoading?: boolean;
  isClickAble?: boolean;
}
const Tab: React.FC<TabsProps> = ({
  tabs,
  isTabCenter = false,
  activeTab,
  setActiveTab,
  // isClickAble
}) => {
  return (
    <div className="w-full h-auto">
      <div
        className={`flex flex-wrap gap-3 lg:pt-0 pt-5 ${
          isTabCenter ? "justify-center border-b" : "justify-start"
        } items-center `}
      >
        {tabs.map((tab, idx) => (
          <button
          
            className={`md:text-[20px] text-[15px] relative md:ms-5 ms-3 after:absolute hover:text-primary after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary  after:scale-x-0 after:duration-300 after:transition-transform after:ease-in-out hover:after:scale-x-[100%] after:origin-right hover:after:origin-left  ${
              activeTab === tab.label
                ? "text-primary after:scale-x-[100%]"
                : "text-black"
            }`}
            key={idx}
            onClick={() => {
           
                setActiveTab(tab.label)
              
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="ms-5 mt-5 lg:mt-10">
        {tabs.map(
          (tab, idx) =>
            activeTab === tab.label && <div key={idx}>{tab.content}</div>
        )}
      </div>
    </div>
  );
};

export default Tab;
