import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  price: string;
  img: string;
  description: String;
};

const ProductCard = (props: Props) => {
  return (
    <div className=" flex flex-col ">
      <div className="">
        <Image
          width={249}
          height={313}
          src={props.img}
          alt="frame9"
          className=" aspect-square"
        />
      </div>
      <h1 className="text-[18px] pt-[12px]  font-bold">{props.title}</h1>
      <p className="text-gray-600 text-[14px]">{props.description}</p>
      <div className="flex">
        <h2 className="text-[18px] mt-[12px] text-gray-600 px-[15px] bg-gray-100  text-center rounded-xl">
          ${props.price}
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
