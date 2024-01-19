import { Input } from "@nextui-org/react";
import React from "react";

type Props = {};

const CartInput = (props: Props) => {
  return (
    <div className="w-[375px] h-[47px] mt-[41px] flex flex-row border-2 rounded-l-2xl rounded-r-2xl border-gray-100 items-center">
      <input
        placeholder="Discount Code"
        className=" outline-none ml-[15px] text-gray-700 placeholder:gray-100 "
      ></input>
      <div className=" rounded-r-2xl flex justify-center items-center bg-primary font-[20%] w-[161px] text-center h-[43px] text-secondary ">
        <button>Apply Coupon</button>
      </div>
    </div>
  );
};

export default CartInput;
