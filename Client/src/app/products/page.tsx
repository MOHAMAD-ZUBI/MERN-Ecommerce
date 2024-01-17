import CategoryLink from "@/components/Products/reusable/CategoryLink";
import ProductCard from "@/components/reusable/ProductCard";
import { GiSettingsKnobs } from "react-icons/gi";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="max-w-[1232px] px-[16px] mx-auto my-[20px]">
      <h1 className="mt-[35px] text-[38px] font-bold my-[16px] border-l-4 border-primary pl-[10px]">
        All Products
      </h1>
      <div className="md:flex md:flex-row">
        <div className="max-w-[300px] w-full max-md:hidden border-3 border-gray-100 mx-[15px]">
          <div>
            <h1 className="text-2xl text-start py-3 font-semibold px-4 border-b-3 flex flex-row justify-between border-gray-100">
              Filter <GiSettingsKnobs className=" rotate-90" />
            </h1>
          </div>
          <div>
            {[0, 1, 2, 3].map((Link) => {
              return <CategoryLink link="/test" title="Healthy Food" />;
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[18px] mt-[69px]">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((product) => {
            return (
              <ProductCard
                description="this is creatine monohydrate"
                img="/card/creatine.jpg"
                price="12"
                title="Creatine"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
