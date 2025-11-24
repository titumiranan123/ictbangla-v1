
import { Star } from "lucide-react";
import React, { useMemo } from "react";

export function ReviewSlider({
  value,
  onChange,
  max = 5,
}: {
  value: number;
  onChange: (n: number) => void;
  max?: number;
}) {
  const pct = useMemo(() => (value / max) * 100, [value, max]);

  return (
    <div className="relative w-full">
      <div
        className="absolute -top-7 left-[calc(var(--pct)*1%)] -translate-x-1/2 transition-all"
        style={{ "--pct": pct } as React.CSSProperties}
      >
        <div className="px-2 py-1 rounded-md bg-primary shadow-sm z-40">
          <div className="flex items-center gap-[2px] text-[#FFE100]">
            {Array.from({ length: max }).map((_, i) => (
              <Star key={i} className={`h-3.5 w-3.5 ${i < value ? "fill-current" : ""}`} />
            ))}
          </div>
        </div>
        <div className="w-2.5 h-2.5 bg-primary rotate-45 mx-auto -mt-1" />
      </div>

      <input
        type="range"
        min={0}
        max={max}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full appearance-none h-2 rounded-full bg-gray-200
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-[#29AE48]
                   [&::-webkit-slider-thumb]:shadow
                   [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5
                   [&::-moz-range-thumb]:rounded-full
                   [&::-moz-range-thumb]:bg-[#29AE48] [&::-moz-range-thumb]:border-0"
        style={{
          background: `linear-gradient(to right, #29AE48 0%, #29AE48 ${pct}%, #e5e7eb ${pct}%, #e5e7eb 100%)`,
        }}
      />
    </div>
  );
}
