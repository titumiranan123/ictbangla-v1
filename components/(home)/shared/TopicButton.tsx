"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface buttonProp {
  title: string;
  id: string;
  slug: string;
}

const TopicButton: React.FC<buttonProp> = ({ title, id, slug }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ Sync selectedId with searchParams on mount & when params change
  useEffect(() => {
    const paramValue = searchParams.get("categories");
    if (paramValue === slug) {
      setSelectedId(id);
    } else {
      setSelectedId(null);
    }
  }, [searchParams, id, title, slug]);

  const handleSelectChange = (_id: string, slug: string) => {
    const newSelectedId = selectedId === _id ? null : _id;
    setSelectedId(newSelectedId);

    const params = new URLSearchParams(searchParams.toString());

    if (newSelectedId) {
      params.set("categories", slug);
    } else {
      params.delete("categories");
    }

    router.replace(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <button
      onClick={() => handleSelectChange(id, slug)}
      className={`px-5 py-2 rounded-full border transition-all duration-300 ease-in-out
        ${
          selectedId === id
            ? "bg-secondary text-black border-black"
            : "bg-gray-100 text-black border-transparent hover:bg-secondary hover:border-black"
        }`}
    >
      {title}
    </button>
  );
};

export default TopicButton;
