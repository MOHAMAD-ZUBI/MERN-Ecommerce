import React from "react";
import ProductCard from "../reusable/ProductCard";

type Props = {};

const SimilarProducts = (props: Props) => {
  return (
    <div className="max-w-[1232px] px-[16px] mx-auto my-[20px]">
      <div className="mt-[106px]">
        <h1 className="text-[28px] font-bold border-l-4 pl-2 border-primary">
          Similar Products
        </h1>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 mt-[25px] gap-[15px]">
        {[0, 1, 2, 3, 4, 5].map((product) => {
          return (
            <div key={Math.random()}>
              <ProductCard
                title="CREATINE"
                img="/card/creatine.jpg"
                price="14"
                description="this is creatine monoyhydrate"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarProducts;
