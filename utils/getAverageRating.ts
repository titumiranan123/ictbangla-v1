export const getAverageRating = (ratings: { rating: number }[]) => {
  if (ratings.length === 0) return 0;

  const total = ratings.reduce((sum, item) => sum + item.rating, 0);
  return (total / ratings.length).toFixed(1);
};
