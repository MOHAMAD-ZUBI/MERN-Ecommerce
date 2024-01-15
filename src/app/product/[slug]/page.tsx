"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

import { LiaCommentSolid } from "react-icons/lia";
import { GoStarFill } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";

type Props = {};
const product = {
  title: "Raven Hoodie With Black colored Design",
  description:
    "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
  price: "63.00",
  colors: ["black", "red", "yellow", "purple"],
  sizes: ["XS", "S", "M", "L", "XL"],
  totalReviews: "3.6",
  comments: "120",
};
const page = (props: Props) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  return (
    <div className="max-w-[1536px] mx-auto my-[20px]">
      <div className="grid gird-cols-1 md:grid-cols-2">
        <div className="max-md:px-2">
          <div className="py-1">
            <Breadcrumbs
              separator="/"
              itemClasses={{
                separator: "px-2",
              }}
            >
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Category</BreadcrumbItem>
              <BreadcrumbItem>Sub-Category</BreadcrumbItem>
            </Breadcrumbs>
          </div>
          <div className="max-w-[600px] w-full min-h-[500px]  relative">
            <Image
              src={"/card/product1.png"}
              className="object-center"
              objectFit="cover"
              fill
              alt=""
            />
          </div>
          <div className="flex flex-row justify-between my-2 max-w-[600px]">
            {[0, 1, 2].map((item) => {
              return (
                <Image
                  src={"/card/product1.png"}
                  width={100}
                  height={100}
                  className="rounded-2xl"
                  alt=""
                />
              );
            })}
          </div>
        </div>
        <div className="py-2 max-md:px-2">
          <h1 className="text-[38px] font-bold max-w-[400px]">
            {product.title}
          </h1>
          <div className="flex flex-row items-center mt-[35px]">
            {[0, 1, 2, 3].map((star) => {
              return (
                <div className="px-[8px]">
                  <GoStarFill size={22} color="orange" />
                </div>
              );
            })}
            <h1 className="text-[17px] text-[#807D7E] ">
              {product.totalReviews}
            </h1>
            <div className="mx-[20px] flex flex-row text-[#807D7E] text-[17px]">
              <LiaCommentSolid size={23} color="#807D7E" />
              <h2 className="px-[15px]">{product.comments} comment</h2>
            </div>
          </div>
          <div className="pt-[35px] flex flex-row gap-[20px]">
            <h1 className="font-bold">Select Size</h1>
            <button className="flex flex-row items-center">
              <h1 className="pr-[15px]">Size Guide</h1>
              <GoArrowRight size={18} />
            </button>
          </div>
          <div className="flex flex-row">
            {product.sizes.map((e) => {
              return (
                <div className="pr-[20px] mt-[25px]">
                  <button
                    onClick={() => setSelectedSize(e)}
                    className={`border-[1.5px]  border-[#BEBCBD] rounded-[12px] h-[38px] w-[38px] ${
                      selectedSize === e &&
                      "bg-[#3C4242] border-[#3C4242] animate-appearance-in transition-colors duration-500 text-white"
                    }
                    }`}
                    key={Math.random()}
                  >
                    {e}
                  </button>
                </div>
              );
            })}
          </div>

          <div>
            <h1 className="font-bold pt-[35px]">Colours Available</h1>
            <div className="flex flex-row">
              {product.colors.map((e) => {
                return (
                  <div className="pr-[20px] mt-[25px]">
                    <button
                      className={`w-[30px] h-[30px] rounded-full hover:border-2 hover:border-gray-600`}
                      style={{ backgroundColor: e }}
                    ></button>
                  </div>
                );
              })}
            </div>
            <div className="pt-[35px] flex flex-row gap-[25px]">
              <button
                className={`bg-[#C1DCDC] py-[12px] px-[24px] rounded-[8px] flex justify-between items-center`}
              >
                <BsCart2 size={20} />{" "}
                <h1 className="px-[12px] font-semibold">Add to cart</h1>
              </button>
              <div className="text-center border-2 font-semibold border-black rounded-xl py-[12px] px-[40px]">
                ${product.price}
              </div>
            </div>
            <div className="w-max-w-[534px] bg-[#BEBCBD] mt-[35px] h-[1px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
