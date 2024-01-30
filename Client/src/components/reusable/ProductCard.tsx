import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoStarFill } from "react-icons/go";

type Props = {
  title: string;
  price: string;
  img: string;
  description: String;
  slug: string;
};

const ProductCard = (props: Props) => {
  return (
    <div className=" flex flex-col max-w-[350px] ">
      <div className=" flex justify-center">
        <Link href={`/product/${props.slug}`}>
          <Image
            width={249}
            height={313}
            src={props.img}
            alt="frame9"
            className=" aspect-square scale-[90%] hover:scale-[105%] ease-in duration-500"
          />
        </Link>
      </div>
      <h1 className="text-[18px] pt-[12px] text-center  font-bold">
        {props.title}
      </h1>
      <p className="text-gray-600 text-center  text-[12px]">
        {props.description}
      </p>

      <div className="flex flex-row items-center justify-center mt-[15px]">
        {[0, 1, 2, 3].map((star) => {
          return (
            <div className="px-[4px]">
              <GoStarFill size={18} className="text-[#FFD200]" />
            </div>
          );
        })}
      </div>
      <p className="text-gray-600 text-center  text-[14px] mt-[10px]">
        132 comments
      </p>
      <div className="flex justify-center">
        <h2 className="text-[18px] mt-[12px] text-gray-600 px-[15px] bg-gray-100  text-center rounded-xl">
          {props.price} TL
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
