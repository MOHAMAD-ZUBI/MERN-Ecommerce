import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  price: string;
  img: string;
};

const ProductCard = (props: Props) => {
  return (
    <div className=" flex flex-col ">
      <div className="">
        <Image
          width={299}
          height={363}
          src={props.img}
          alt="frame9"
          className=""
        />
      </div>
      <h1 className="text-[18px] pt-[12px]  font-bold">{props.title}</h1>
      <h2 className="text-[18px] text-gray-600">${props.price}</h2>
    </div>
  );
};

export default ProductCard;
