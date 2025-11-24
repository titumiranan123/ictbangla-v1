import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface CartItemProps {
  id: string;
  name: string;
  isDiscount: boolean;
  price: number;
  discount: number;
  percentage: number;
  thumbnail: string;
  removeItem: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  isDiscount,
  discount,
  percentage,
  thumbnail,
  removeItem,
}) => {
  const calculateDiscountedPrice = () => {
    if (!isDiscount) return price;
    return percentage
      ? price * (1 - percentage / 100)
      : price - discount;
  };

  const finalPrice = calculateDiscountedPrice();
  const hasPercentage = isDiscount && percentage > 0;

  return (
    <div className="grid grid-cols-5 md:grid-cols-4 w-full rounded-lg gap-2 md:gap-4 border-b border-gray-200 md:py-4 md:px-2 p-1 hover:bg-gray-50 transition-colors ">
      {/* Product Info */}
      <div className="flex items-center gap-2 md:gap-4 col-span-4 md:col-span-2">
        <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
          <Image
            src={thumbnail}
            alt={name}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 64px, 80px"
          />
        </div>
        <div className=" overflow-hidden">
          <h3 className="text-lg font-medium truncate">{name}</h3>
          <div className="flex items-center gap-2">
            <p
              className={`text-sm md:text-base ${
                hasPercentage ? "text-gray-400 line-through" : "text-gray-600"
              }`}
            >
              Tk {price.toFixed(2)}
            </p>
            {hasPercentage && (
              <span className="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded">
                {percentage}% off
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Price */}
      <div className="hidden md:flex items-center justify-center font-medium">
        <p className="text-gray-800">Tk {finalPrice.toFixed(2)}</p>
      </div>


      {/* Remove Button */}
      <div className="flex items-center justify-end md:justify-center ">
        <button
          onClick={() => removeItem(id)}
          className="p-1 md:p-2 text-gray-500 hover:text-red-500 transition-colors"
          aria-label="Remove item"
        >
          <AiOutlineClose className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
