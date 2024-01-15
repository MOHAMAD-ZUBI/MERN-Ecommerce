import React from "react";
import ProductCard from "./reusable/ProductCard";
import { GoArrowRight } from "react-icons/go";

const Products = [
  {
    title: "Natural Plants",
    price: "1,400.00",
    img: "/card/frame9.png",
  },
  {
    title: "Artificial Plants",
    price: "900.00",
    img: "/card/frame8.png",
  },
  {
    title: "Artificial Plants",
    price: "3,500.00",
    img: "/card/frame7.png",
  },
];

const BestSelling = () => {
  return (
    <div className="flex flex-row items-start ">
      <div className="flex flex-col pt-[96px]">
        <h1 className="text-[32px] font-bold">Best Selling</h1>
        <h1 className="text-[32px] font-bold">Plants</h1>
        <p className="w-[200px] py-[12px] text-[18px] text-gray-700">
          Easiest way to healthy life by buying your favorite plants
        </p>
        <button className="bg-[#C1DCDC] py-[12px] px-[24px] rounded-[8px] flex justify-between items-center">
          See more <GoArrowRight />
        </button>
      </div>
      {Products.map((product) => {
        return (
          <ProductCard
            title={product.title}
            img={product.img}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default BestSelling;
