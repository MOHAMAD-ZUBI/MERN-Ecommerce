import React from "react";
import ProductCard from "./reusable/ProductCard";
import BestSelling from "./BestSelling";

type Props = {};

const Categories = (props: Props) => {
  return (
    <>
      <div className="text-center my-[100px]">
        <h1 className="text-[32px] font-bold">Categories</h1>
        <h2 className="text-[18px]">Find what you are looking for</h2>
      </div>

      <div className=" bg-primary w-full text-white mb-[100px] ">
        <div className="w-full max-w-[1500] px-[18px] mx-auto pb-[96px] pt-16">
          <div className="flex justify-center items-center">
            <BestSelling color="white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
