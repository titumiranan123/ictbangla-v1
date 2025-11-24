"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

export type CategoryKey =
  | "digital_marketing"
  | "content_creation"
  | "skill_development"
  | "soft_skill"
  | "others";

export type InstructorKey =
  | "arif_m_rajon"
  | "tahmid_arman"
  | "md_tahmidur_rahman"
  | "tamim_asif_chowdhury";

export type CourseType = "FREE" | "PAID" | null;

export interface FilterState {
  priceMin: number;
  priceMax: number;
  selectedCategories: CategoryKey[];
  selectedInstructors: InstructorKey[];
  levelMin: number;
  courseType: CourseType;
  ratingMin: number;
}

const CATEGORY_META: Record<CategoryKey, { label: string; count: number }> = {
  digital_marketing: { label: "Digital Marketing", count: 29 },
  content_creation: { label: "Content Creation", count: 14 },
  skill_development: { label: "Skill Development", count: 12 },
  soft_skill: { label: "Soft Skill", count: 8 },
  others: { label: "Others", count: 3 },
};

const INSTRUCTOR_META: Record<
  InstructorKey,
  { label: string; sub_title: string }
> = {
  arif_m_rajon: { label: "Arif M Rajon", sub_title: "Soft Skill, Instructor" },
  tahmid_arman: { label: "Tahmid Arman", sub_title: "AI Designer, Instructor" },
  md_tahmidur_rahman: {
    label: "Md. Tahmidur Rahman",
    sub_title: "Excel Expert, Instructor",
  },
  tamim_asif_chowdhury: { label: "Tamim Asif Chowdhury", sub_title: "Design" },
};

const LEVEL_LABELS = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
] as const;

const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

const serializeFilterState = (state: FilterState): Record<string, string> => {
  const params: Record<string, string> = {};
  if (state.priceMin > 0) params.priceMin = String(state.priceMin);
  if (state.priceMax < 5000) params.priceMax = String(state.priceMax);
  if (state.selectedCategories.length)
    params.categories = state.selectedCategories.join(",");
  if (state.selectedInstructors.length)
    params.instructors = state.selectedInstructors.join(",");
  if (state.levelMin > 0) params.levelMin = String(state.levelMin);
  if (state.courseType) params.courseType = state.courseType ?? "FREE";
  if (state.ratingMin > 0) params.ratingMin = String(state.ratingMin);
  return params;
};

const deserializeFilterState = (sp: URLSearchParams): Partial<FilterState> => {
  const state: Partial<FilterState> = {};
  const priceMin = sp.get("priceMin");
  const priceMax = sp.get("priceMax");
  const categories = sp.get("categories");
  const instructors = sp.get("instructors");
  const levelMin = sp.get("levelMin");
  const courseType = sp.get("courseType");
  const ratingMin = sp.get("ratingMin");

  if (priceMin) state.priceMin = clamp(parseInt(priceMin), 0, 5000);
  if (priceMax) state.priceMax = clamp(parseInt(priceMax), 0, 5000);

  if (categories) {
    state.selectedCategories = categories
      .split(",")
      .filter((c): c is CategoryKey => c in CATEGORY_META);
  }
  if (instructors) {
    state.selectedInstructors = instructors
      .split(",")
      .filter((i): i is InstructorKey => i in INSTRUCTOR_META);
  }
  if (levelMin)
    state.levelMin = clamp(parseInt(levelMin), 0, LEVEL_LABELS.length - 1);
  if (courseType === "FREE" || courseType === "PAID")
    state.courseType = courseType;
  if (ratingMin) state.ratingMin = clamp(parseInt(ratingMin), 0, 5);

  return state;
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-[#29AE48]">
      {children}
    </span>
  );
}

function Checkbox({
  checked,
  onChange,
  label,
  right,
  disabled,
  sub_title,
  isBorder,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: React.ReactNode;
  right?: React.ReactNode;
  disabled?: boolean;
  sub_title?: string;
  isBorder?: boolean;
}) {
  return (
    <label
      className={`flex items-center   justify-between gap-3  cursor-pointer select-none  ${
        isBorder ? "border border-[#D2D8D3] px-2 py-1.5 rounded-lg" : ""
      } ${disabled ? "opacity-60 cursor-not-allowed" : "hover:opacity-95"}`}
    >
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />

        <span
          className={`
            relative h-5 w-5 p-[2px] rounded-[6px] border-2 bg-white
            transition-all
            ${checked ? "border-primary" : "border-gray-300"}
            peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-300
          `}
          aria-hidden
        >
          <span
            className={`
              block h-full w-full rounded-[4px] transition-transform
              ${checked ? "bg-primary scale-100" : "scale-0"}
            `}
          />
        </span>

        {label ? (
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-medium text-[#707070]">{label}</span>
            {sub_title && (
              <span className="text-[8px] text-[#8A8A8A] ">{sub_title}</span>
            )}
          </span>
        ) : null}
      </div>
      <button
        className="button-primary w-fit text-xs leading-[18px] font-semibold px-3"
        type="button"
      >
        দেখুন
        <IconImage
          fileName="eye_open_white_icon.svg"
          className="!w-2 !h-2"
        />{" "}
      </button>
    </label>
  );
}

export interface FilterSidebarProps {
  defaultState?: Partial<FilterState>;
  onChange?: (state: FilterState) => void;
  className?: string;
}

export default function FilterSidebar({
  defaultState,
  onChange,
  className,
}: FilterSidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [state, setState] = useState<FilterState>({
    priceMin: 0,
    priceMax: 5000,
    selectedCategories: [],
    selectedInstructors: [],
    levelMin: 0,
    courseType: null,
    ratingMin: 0,
    ...defaultState,
  });

  useEffect(() => {
    const urlState = deserializeFilterState(searchParams);
    setState((prev) => ({ ...prev, ...urlState }));
  }, [searchParams?.toString()]);

  const updateURL = (next: FilterState) => {
    const params = new URLSearchParams(searchParams.toString());
    [
      "priceMin",
      "priceMax",
      "categories",
      "instructors",
      "levelMin",
      "courseType",
      "ratingMin",
    ].forEach((k) => params.delete(k));
    const serialized = serializeFilterState(next);
    Object.entries(serialized).forEach(([k, v]) => params.set(k, v));
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.push(newUrl, { scroll: false });
  };

  const emit = (next: FilterState) => {
    setState(next);
    updateURL(next);
    onChange?.(next);
  };

  const resetAll = () => {
    const reset: FilterState = {
      priceMin: 0,
      priceMax: 5000,
      selectedCategories: [],
      selectedInstructors: [],
      levelMin: 0,
      courseType: null,
      ratingMin: 0,
    };
    emit(reset);
  };

  return (
    <aside className={`w-full  space-y-6  ${className ?? ""}`}>
      <DropDownSection
        containerClass="border-b border-[#D2D8D3] pb-4"
        className="px-4 py-4"
        title="ক্যাটাগরি শর্টিং"
        defaultOpen
      >
        <RadioRowForFiltering />

        <div className=" mt-4">
          <h3 className="2xl:text-lg text-[16px] 2xl:leading-[20px] leading-[18px] font-semibold text-black-color bg-[#F3F4F6] py-2 ps-[48px]">
            Review
          </h3>

          <div className="py-3 px-11 lg:px-4 mt-10">
            <ReviewSlider
              value={state.ratingMin}
              onChange={(v) => emit({ ...state, ratingMin: v })}
            />
            <div className="pb-3 text-right text-xs text-gray-500">
              {state.ratingMin}.0+
            </div>
          </div>
        </div>
      </DropDownSection>

      <DropDownSection
        title={
          <>
            <div className="flex items-center justify-between  w-full">
              <div>
                <h5 className="2xl:text-lg text-[16px] 2xl:leading-[20px] leading-[18px] font-semibold text-black-color">
                  প্রি-রেকর্ডেড ভিডিও
                </h5>
                <p className="text-xs leading-[20px] font-medium text-[#8A8A8A]">
                  ৬০টি ভিডিও
                </p>
              </div>
              <button
                className="button-primary w-fit text-xs font-semibold px-3"
                type="button"
              >
                সব দেখুন
                <IconImage
                  fileName="eye_open_white_icon.svg"
                  className="!w-3.5 !h-3.5"
                />{" "}
              </button>
            </div>
          </>
        }
        defaultOpen
        className=""
        containerClass="ps-4 border-b border-[#D2D8D3] pb-4"
      >
        <div className="max-h-52 overflow-auto pr-1 mt-5 space-y-2">
          {Object.entries(CATEGORY_META).map(([key, meta]) => {
            const k = key as CategoryKey;
            const checked = state.selectedCategories.includes(k);
            return (
              <Checkbox
                key={k}
                checked={checked}
                onChange={(v) => {
                  const next = v
                    ? [...state.selectedCategories, k]
                    : state.selectedCategories.filter((x) => x !== k);
                  emit({ ...state, selectedCategories: next });
                }}
                label={meta.label}
                right={
                  <Chip>
                    <span className="tabular-nums">{meta.count}</span>
                  </Chip>
                }
                isBorder={true}
              />
            );
          })}
        </div>
      </DropDownSection>

      <DropDownSection
        title={
          <h4 className="2xl:text-lg text-[16px] 2xl:leading-[20px] leading-[18px] font-semibold text-black-color">
            Instructors
          </h4>
        }
        defaultOpen
        containerClass="ps-4 border-b border-[#D2D8D3] pb-4"
      >
        <div className="max-h-48 overflow-auto space-y-2 mt-4">
          {Object.entries(INSTRUCTOR_META).map(([key, meta]) => {
            const k = key as InstructorKey;
            const checked = state.selectedInstructors.includes(k);
            return (
              <Checkbox
                key={k}
                checked={checked}
                onChange={(v) => {
                  const next = v
                    ? [...state.selectedInstructors, k]
                    : state.selectedInstructors.filter((x) => x !== k);
                  emit({ ...state, selectedInstructors: next });
                }}
                label={meta.label}
                sub_title={meta?.sub_title}
              />
            );
          })}
        </div>
      </DropDownSection>

      <DropDownSection
        title={
          <h4 className="2xl:text-lg text-[16px] 2xl:leading-[20px] leading-[18px] font-semibold text-black-color mb-5">
            Course Level
          </h4>
        }
        defaultOpen
        containerClass="ps-4 border-b border-[#D2D8D3] "
      >
        <div className="py-1 mb-4">
          <StepSlider
            steps={LEVEL_LABELS as unknown as string[]}
            value={state.levelMin}
            onChange={(idx) => emit({ ...state, levelMin: idx })}
          />
        </div>
      </DropDownSection>

      <DropDownSection
        title={
          <h4 className="2xl:text-lg text-[16px] 2xl:leading-[20px] leading-[18px] font-semibold text-black-color">
            Course Type
          </h4>
        }
        defaultOpen
        containerClass="px-4"
      >
        <div className="flex items-center gap-0.5 rounded-lg  mt-6 bg-[#BDE6C6]/60">
          <button
            onClick={() => emit({ ...state, courseType: "FREE" })}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              state.courseType === "FREE"
                ? "bg-[#29AE48] text-white"
                : "text-primary"
            }`}
          >
            Free Courses
          </button>
          <button
            onClick={() => emit({ ...state, courseType: "PAID" })}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              state.courseType === "PAID"
                ? "bg-[#29AE48] text-white "
                : "text-primary "
            }`}
          >
            Paid Courses
          </button>
        </div>
      </DropDownSection>

      <button
        type="button"
        onClick={resetAll}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg border-2 border-red-500 bg-white px-3 py-2 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors"
      >
        RESET ALL FILTERS <RefreshCcw className="h-4 w-4" />
      </button>
    </aside>
  );
}

import IconImage from "@/common/iconImages";
import { RefreshCcw } from "lucide-react";
import { useRef } from "react";
import DropDownSection from "./DropDownSection";
import RadioRowForFiltering from "./RadioRowForFiltering";
import { ReviewSlider } from "./ReviewSlider";

function StepSlider({
  steps,
  value,
  onChange,
  className = "",
}: {
  steps: string[];
  value: number;
  onChange: (idx: number) => void;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);

  const max = steps.length - 1;
  const pct = useMemo(() => (value / Math.max(max, 1)) * 100, [value, max]);

  const posToIndex = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return value;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const ratio = x / rect.width;
    const idx = Math.round(ratio * max);
    return Math.min(Math.max(idx, 0), max);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    setDragging(true);
    onChange(posToIndex(e.clientX));
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!dragging) return;
    onChange(posToIndex(e.clientX));
  };

  const onPointerUp = () => setDragging(false);

  useEffect(() => {
    if (!dragging) return;
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [dragging]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      onChange(Math.min(value + 1, max));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      onChange(Math.max(value - 1, 0));
    } else if (e.key === "Home") {
      e.preventDefault();
      onChange(0);
    } else if (e.key === "End") {
      e.preventDefault();
      onChange(max);
    }
  };

  return (
    <div className={`w-[90%] mx-auto ${className}`}>
      <div className="relative h-6 mb-1 z-30" aria-hidden>
        <div
          className="absolute -top-1 left-[calc(var(--pct)*1%)] -translate-x-1/2 transition-all"
          style={{ "--pct": pct } as React.CSSProperties}
        >
          <div className="px-2 py-0.5 bg-emerald-50 text-[#29AE48] text-xs font-medium rounded ">
            {steps[value]}
          </div>
          <div className="w-2 h-2 bg-emerald-50 rotate-45 mx-auto -mt-1" />
        </div>
      </div>

      <div
        ref={trackRef}
        className="relative h-3 cursor-pointer select-none"
        onPointerDown={onPointerDown}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label="Course level"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div className="absolute inset-y-0 left-0 right-0 rounded-full bg-gray-200" />
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-[#29AE48]"
          style={{ width: `${pct}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -ml-4 h-4 w-10 rounded-full bg-[#29AE48] shadow"
          style={{ left: `calc(${pct}% )` }}
          onPointerDown={onPointerDown}
        />
      </div>
    </div>
  );
}
