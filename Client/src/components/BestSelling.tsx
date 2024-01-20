"use client";
import React from "react";
import ProductCard from "./reusable/ProductCard";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";

const Products = [
  {
    title: "Pre Workout",
    price: "23.99",
    img: "/card/preworkout.jpg",
    description:
      "Antrenman öncesi kullanım için tasarlanan kompleks ve etkili bir formülasyona sahiptir.  ",
  },
  {
    title: "Creatine Monohydrate",
    price: "34.00",
    img: "/card/creatine.jpg",
    description:
      "Creatine; üzerinde en çok araştırma yapılmış spor takviyesidir. ",
  },
  {
    title: "Pre Workout",
    price: "23.99",
    img: "/card/preworkout.jpg",
    description:
      "Antrenman öncesi kullanım için tasarlanan kompleks ve etkili bir formülasyona sahiptir.  ",
  },
];
type Props = {
  color: string;
};

const BestSelling = (props: Props) => {
  const router = useRouter();
  return (
    <div className="max-w-[1500px] px-[18px] mx-auto mt-[100px]">
      <div className="lg:gid lg:grid-cols-4 gap-12 grid grid-cols-2 items-center pb-[113px]">
        <div className="flex flex-col pt-[96px]">
          <h1 className="text-[32px] font-bold lg:text-start text-center">
            Best Selling
          </h1>
          <h1 className="text-[32px] font-bold lg:text-start text-center">
            Supplements
          </h1>
          <h1 className="text-[18px]  text-gray-700  lg:text-start text-center">
            Easiest way to healthy life by buying your favorite supplements
          </h1>

          <div className="max-lg:flex max-lg:justify-center py-2">
            <button
              onClick={() => router.push("/products")}
              className={`bg-${props.color} text-white py-[12px] px-[24px] rounded-[8px] flex justify-between items-center`}
            >
              <h1 className="mx-[5px]">See more</h1> <GoArrowRight />
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
                description={product.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSelling;
