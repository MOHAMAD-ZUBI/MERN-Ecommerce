"use client";
import React, { FC, useState } from "react";
import ProductDetails from "../reusable/ProductDetails";
import SimilarProducts from "./SimilarProducts";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { LiaCommentSolid, LiaShippingFastSolid } from "react-icons/lia";
import { BsArrowThroughHeart, BsCart2 } from "react-icons/bs";
import { SlWallet } from "react-icons/sl";
import { GoArrowRight, GoStarFill } from "react-icons/go";
import Image from "next/image";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { mutateCart } from "@/hooks/useCart";

type Props = {
  product: Product;
};
interface Product {
  _id: string;
  title: string;
  description: string;
  img?: string;
  comments: Comment[];
  categories: string[];
  variants: Variant[];
  status: string;
  nutrition: object;
}

interface Comment {}

interface Variant {
  _id: string;
  flavors: Flavor[];
  size: any;
  price: number;
  weight?: string;
  img: string;
}

interface Flavor {
  _id: string;
  title: string;
  color: string;
}

const Reviews = [
  {
    name: "Mohamad Z.",
    comment: "Fiyatına göre çok iyi teşekkürler",
    date: "01/02/24",
  },
  {
    name: "Mustafa E.",
    comment: "Tam bir fiyat performans ürünü.",
    date: "04/01/24",
  },
  {
    name: "Seyit S.",
    comment: "Harika bir urun",
    date: "30/12/2023",
  },
];

const SingleProduct: FC<Props> = ({ product }) => {
  const [itemCart, setItemToCart] = useState();
  const [selectedSize, setSelectedSize] = useState<string>(
    product.variants[0].size
  );
  const [selectedFlavor, setSelectedFlavor] = useState<string>(
    product.variants[0].flavors[0].title
  );
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    product.variants[0]
  );

  const { mutate: AddToCart, isPending } = mutateCart({
    variantToAdd: selectedVariant._id,
    flavor: selectedFlavor,
  });
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
              src={product?.img ? product.img : "/card/creatine.jpg"}
              className="object-center aspect-square scale-[90%] hover:scale-[105%] ease-in duration-500"
              objectFit="cover"
              height={400}
              width={500}
              alt=""
            />
          </div>
          <div className="flex flex-row justify-evenly my-2 max-w-[500px]">
            {product?.variants.map((variant) => {
              return variant.img ? (
                <Image
                  src={variant?.img ? variant.img : "/card/fistik.jpg"}
                  width={100}
                  height={100}
                  className=""
                  alt=""
                />
              ) : (
                <></>
              );
            })}
          </div>
        </div>

        <div className="py-2 max-md:px-2">
          <h1 className="text-[38px] font-bold max-w-[400px]">
            {product?.title}
          </h1>
          <div className="flex flex-row items-center mt-[35px]">
            {[0, 1, 2, 3].map((star) => {
              return (
                <div className="px-[8px]">
                  <GoStarFill size={22} color="orange" />
                </div>
              );
            })}
            <h1 className="text-[17px] text-[#807D7E] ">190</h1>
            <div className="mx-[20px] flex flex-row text-[#807D7E] text-[17px]">
              <LiaCommentSolid size={23} color="#807D7E" />
              <h2 className="px-[15px]">123 comment</h2>
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
            {product?.variants.map((variant) => {
              return (
                <div className="pr-[20px] mt-[25px]">
                  <button
                    onClick={() => {
                      setSelectedSize(variant.size);
                      setSelectedVariant(variant);
                    }}
                    className={`border-[1.5px]  border-[#BEBCBD] rounded-[12px] h-[48px] w-[94px] ${
                      selectedSize === variant.size &&
                      "bg-[#3C4242] border-[#3C4242] animate-appearance-in transition-colors duration-500 text-white"
                    }
                    }`}
                    key={Math.random()}
                  >
                    {variant.size} servis
                  </button>
                </div>
              );
            })}
          </div>

          <div>
            <h1 className="font-bold pt-[35px]">Flavours Available</h1>
            <div className="flex flex-row flex-wrap">
              {selectedVariant?.flavors.map((flavor) => {
                return (
                  <div className="pr-[20px] mt-[25px]">
                    <button
                      onClick={() => setSelectedFlavor(flavor.title)}
                      className={`min-w-[120px] h-[40px] rounded-md bg-gray-100 border-2 flex justify-between items-center  hover:border-gray-600 ${
                        selectedFlavor === flavor.title &&
                        "bg-[#3C4242] border-[#3C4242] animate-appearance-in transition-colors duration-500 text-black"
                      }`}
                    >
                      <h1 className="text-center pl-[5px]">{flavor.title}</h1>
                      <div
                        className={` h-full w-[20px]`}
                        style={{ backgroundColor: flavor.color }}
                      ></div>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="pt-[35px] flex flex-row flex-wrap gap-[25px]">
              <button
                onClick={() => AddToCart()}
                disabled={isPending}
                className={`bg-primary py-[12px] px-[24px] rounded-[8px] flex justify-between items-center`}
              >
                <BsCart2 size={20} />{" "}
                <h1 className="px-[12px] font-semibold text-white">
                  Add to cart
                </h1>
              </button>
              <div className="text-center border-2 font-semibold border-black rounded-xl py-[12px] px-[40px]">
                {selectedVariant.price}TL
              </div>
              <div className="text-center py-[12px] px-[40px] font-semibold">
                {(selectedVariant.price / selectedVariant.size).toFixed(2)} TL /
                Servis
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
      <ProductDetails
        review={Reviews}
        description={product.description}
        nutrition={product.nutrition}
      />
      <SimilarProducts />
    </div>
  );
};

export default SingleProduct;
