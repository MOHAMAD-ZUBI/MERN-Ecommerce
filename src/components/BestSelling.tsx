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
type Props = {
  color: string;
};

const BestSelling = (props: Props) => {
  return (
    <div className="max-w-[1500px] px-[18px] mx-auto mt-[100px]">
      <div className="lg:gid lg:grid-cols-4 gap-12 grid grid-cols-2 items-center pb-[113px]">
        <div className="flex flex-col pt-[96px]">
          <h1 className="text-[32px] font-bold lg:text-start text-center">
            Best Selling
          </h1>
          <h1 className="text-[32px] font-bold lg:text-start text-center">
            Plants
          </h1>
          <h1 className="text-[18px]  text-gray-700  lg:text-start text-center">
            Easiest way to healthy life by buying your favorite plants
          </h1>

          <div className="max-lg:flex max-lg:justify-center py-2">
            <button
              className={`bg-${props.color} py-[12px] px-[24px] rounded-[8px] flex justify-between items-center`}
            >
              See more <GoArrowRight />
            </button>
          </div>
        </div>
        {Products.map((product) => {
          return (
            <div className="">
              <ProductCard
                title={product.title}
                img={product.img}
                price={product.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSelling;
