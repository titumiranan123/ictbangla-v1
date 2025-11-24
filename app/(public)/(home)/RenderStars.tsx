import { Star, StarOff } from "lucide-react";
import React from "react";

export const RenderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="text-yellow-500 fill-yellow-500 size-3"
        />
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <div className="relative size-3">
          <Star className="absolute top-0 left-0 text-yellow-500 fill-yellow-500" />
          <StarOff
            className="absolute top-0 left-1/2 text-yellow-500 bg-white"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </div>
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOff key={`empty-${i}`} className="text-[#131836] size-3" />
      ))}
    </div>
  );
};
