import CategoryLink from "@/components/Products/reusable/CategoryLink";
import ProductCard from "@/components/reusable/ProductCard";
import { GiSettingsKnobs } from "react-icons/gi";
import React from "react";
import Filters from "@/components/reusable/Filters";
import FetchProducts from "@/components/Products/FetchProducts";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="max-w-[1232px] px-[16px] mx-auto my-[20px]">
      <h1 className="mt-[35px] text-[38px] font-bold my-[16px] border-l-4 border-primary pl-[10px]">
        All Products
      </h1>
      <div className="md:flex md:flex-row">
        <div className="max-w-[300px] w-full max-md:hidden border-3 border-gray-100 mx-[15px]">
          <div className="w-full">
            <h1 className="text-2xl text-start py-3 font-semibold px-4 border-b-3 flex flex-row justify-between border-gray-100">
              Filter <GiSettingsKnobs className=" rotate-90" />
            </h1>
            <Filters />
          </div>
        </div>
        <div>
          <FetchProducts />
        </div>
      </div>
    </div>
  );
};

export default page;
