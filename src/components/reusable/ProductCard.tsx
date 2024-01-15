import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  price: string;
  img: string;
};

const ProductCard = (props: Props) => {
  return (
    <div className="pt-[96px] px-[48px]">
      <div className="w-[299px] h-[436px] flex flex-col ">
        <div>
          <Image width={299} height={363} src={props.img} alt="frame9" />
        </div>
        <h1 className="text-[18px] pt-[12px]  font-bold">{props.title}</h1>
        <h2 className="text-[18px] text-gray-600">${props.price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
