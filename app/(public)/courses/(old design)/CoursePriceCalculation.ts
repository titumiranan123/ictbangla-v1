/* eslint-disable @typescript-eslint/no-explicit-any */
export const CoursePriceCalculator = (data: any) => {
  const pricing = data.pricing;
  if (!pricing.isFree) {
    const { main, isDiscount, discount, percentage } = pricing?.price;
    if (!isDiscount) return main;
    const totalPrice =
      percentage > 0 ? main * (1 - percentage / 100) : main - discount;
    return totalPrice;
  }
};
