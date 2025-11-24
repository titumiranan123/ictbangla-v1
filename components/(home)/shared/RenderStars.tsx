import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export const RenderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-[#131836] text-[12px]" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-[#131836] text-[12px]" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} className="text-[#131836] text-[12px]" />
      ))}
    </>
  );
};
