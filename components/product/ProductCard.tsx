/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import { RenderStars } from "../(home)/shared/RenderStars";
import Link from "next/link";
interface props {
  product: {
    image: any;
    title: string;
    price: number;
    rating: number;
    review: number;
  };
}
const ProductCard: React.FC<props> = ({ product }: any) => {
  return (
    <div className="w-[260px] group p-5">
      <div className="overflow-hidden">
        <Image
          className="group-hover:scale-110 easeInOut"
          src={product?.image ?? ""}
          alt={product.title}
        />
      </div>
      <div className="flex justify-center items-center flex-col ">
        <p className=" text-primary  text-[18px] mt-3 font-[600]">
          ${product.price}
        </p>
        <Link
          href={`/shop/${product.title.toLowerCase().replace(/\s/g, "-")}`}
          className="block relative  after:absolute after:bg-black after:h-[1px] after:w-full after:bottom-1 after:left-0 after:origin-left group-hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-500 cursor-pointer"
        >
          {product.title}
        </Link>

        <div className="flex gap-1 items-center">
          <span className="text-[16px]">{product.rating}</span>
          {RenderStars(product.rating)}
          <span>{product.review}</span>
        </div>
        <button className="mt-3 w-full rounded-md group-hover:bg-[#131836] group-hover:text-white  duration-500 easeInOut   h-[58px] border text-[16px] ">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
