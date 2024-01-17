"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

import { LiaCommentSolid } from "react-icons/lia";
import { GoStarFill } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { SlWallet } from "react-icons/sl";
import { BsArrowThroughHeart } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import ProductDetails from "@/components/reusable/ProductDetails";
import SimilarProducts from "@/components/Products/SimilarProducts";

type Props = {};
const product = {
  title: "CREATINE MONOHYDRATE",
  description:
    "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
  price: "12.00",
  flavour: [
    { color: "white", flavour: "Aromasiz" },
    { color: "yellow", flavour: "Limonata" },
    { color: "purple", flavour: "Karadut" },
    { color: "Red", flavour: "Karpuz" },
  ],
  sizes: ["40", "100", "120", "200"],
  totalReviews: "3.6",
  comments: "120",
  images: ["/card/creatine.jpg"],
};

const page = (props: Props) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
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
          <BreadcrumbItem>Category</BreadcrumbItem>
          <BreadcrumbItem>Sub-Category</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2">
        <div className="">
          <div className=" ">
            <Image
              src={"/card/creatine.jpg"}
              className="object-center aspect-square scale-[90%] hover:scale-[105%] ease-in duration-500"
              objectFit="cover"
              height={400}
              width={500}
              alt=""
            />
          </div>
          <div className="flex flex-row justify-between my-2 max-w-[500px]">
            {product.images.map((item) => {
              return (
                <Image
                  src={item}
                  width={100}
                  height={100}
                  className=""
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
          <div className="flex flex-row flex-wrap">
            {product.sizes.map((e) => {
              return (
                <div className="pr-[20px] mt-[25px]">
                  <button
                    onClick={() => setSelectedSize(e)}
                    className={`border-[1.5px]  border-[#BEBCBD] rounded-[12px] h-[48px] w-[94px] ${
                      selectedSize === e &&
                      "bg-[#3C4242] border-[#3C4242] animate-appearance-in transition-colors duration-500 text-white"
                    }
                    }`}
                    key={Math.random()}
                  >
                    {e} servis
                  </button>
                </div>
              );
            })}
          </div>

          <div>
            <h1 className="font-bold pt-[35px]">Flavours Available</h1>
            <div className="flex flex-row flex-wrap">
              {product.flavour.map((e) => {
                return (
                  <div className="pr-[20px] mt-[25px]">
                    <button
                      className={`min-w-[120px] h-[40px] rounded-md bg-gray-100 border-2 flex justify-between items-center  hover:border-gray-600`}
                    >
                      <h1 className="text-center pl-[5px]">{e.flavour}</h1>
                      <div
                        className={` h-full w-[20px]`}
                        style={{ backgroundColor: e.color }}
                      ></div>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="pt-[35px] flex flex-row gap-[25px]">
              <button
                className={`bg-primary py-[12px] px-[24px] rounded-[8px] flex justify-between items-center`}
              >
                <BsCart2 size={20} />{" "}
                <h1 className="px-[12px] font-semibold">Add to cart</h1>
              </button>
              <div className="text-center border-2 font-semibold border-black rounded-xl py-[12px] px-[40px]">
                ${product.price}
              </div>
            </div>
            <div className="w-max-w-[534px] bg-[#BEBCBD] mt-[37px] h-[1px]"></div>
            <div className="grid grid-cols-2 gap-[68px] mt-[20px]">
              <div className="">
                <div className="flex flex-row justify-start items-center gap-[15px] mb-[20px]">
                  <div className="w-[44px]  h-[44px] rounded-full bg-[#F6F6F6] flex justify-center items-center ">
                    <SlWallet size={18} />
                  </div>
                  <h2>Secure Payment</h2>
                </div>
                <div className="flex flex-row justify-start items-center gap-[15px] mb-[20px]">
                  <div className="w-[44px]  h-[44px] rounded-full bg-[#F6F6F6] flex justify-center items-center ">
                    <BsArrowThroughHeart size={18} />
                  </div>
                  <h2>Lovely Taste</h2>
                </div>
              </div>

              <div>
                <div className="flex flex-row justify-start items-center gap-[15px] mb-[20px]">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#F6F6F6] flex justify-center items-center ">
                    <LiaShippingFastSolid size={18} />
                  </div>
                  <h2>Free shipping</h2>
                </div>
                <div className="flex flex-row justify-start items-center gap-[15px] mb-[20px]">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#F6F6F6] flex justify-center items-center ">
                    <HiOutlineReceiptRefund size={18} />
                  </div>
                  <h2>Easy Returns</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDetails />
      <SimilarProducts />
    </div>
  );
};

export default page;
