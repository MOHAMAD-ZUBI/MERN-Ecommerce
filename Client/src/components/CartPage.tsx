"use client";
import CartInput from "@/components/reusable/CartInput";
import CartTable from "@/components/reusable/CartTable";
import { mutateCart } from "@/hooks/useCart";
import { Cart } from "@/types/Cart";
import { Variant } from "@/types/Product";
import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react";

import React, { FC, useState } from "react";

type Props = {
  data: Cart;
};

const CartPage: FC<Props> = ({ data }) => {
  return (
    <div className="max-w-[1232px] px-[16px] mx-auto my-[20px]">
      <div className="py-1">
        <Breadcrumbs
          separator="/"
          itemClasses={{
            separator: "px-2",
          }}
        >
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Cart</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className="mt-[35px]">
        <CartTable products={data.products} />
      </div>
      <div className="bg-gray-200 w-full h-[2px] mt-[35px] mb-[35px]"></div>
      <div className=" w-full  rounded">
        <div className="flex md:flex-row flex-col  justify-between px-[20px]">
          <div>
            <h1 className="font-semibold">Discount Codes</h1>
            <p className=" text-primary">
              Enter your coupon code if you have one
            </p>
            <div>
              <CartInput />
            </div>
            <div className="mt-[35px]">
              <Button
                className="bg-white border-2 font-semibold border-gray-200"
                size="md"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
          <div className="flex flex-col mt-[35px]">
            <div className="flex flex-row justify-between gap-[150px]">
              <div>
                <h1 className="font-semibold">Sub Total</h1>
                <h1 className="font-semibold mt-[15px]">Shipping</h1>
                <h1 className="font-bold mt-[40px]">Grand Total</h1>
              </div>
              <div>
                <h1 className="font-semibold">{data.total} TL</h1>
                <h1 className="font-semibold mt-[15px]">Free</h1>
                <h1 className="font-bold mt-[40px]">{data.total} TL</h1>
              </div>
            </div>
            <div className="w-full bg-gray-200 h-[2px] mt-[20px]"></div>
            <div className="mt-[35px] w-full flex justify-center mb-[35px]">
              <Button
                className="bg-white border-2 font-semibold border-gray-200"
                size="md"
              >
                Proceed To Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
