import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  img: string;
  description: String;
};

const CategoryCard = (props: Props) => {
  return (
    <div className=" flex flex-col max-w-[350px] ">
      <div className="flex justify-center">
        <Image
          width={249}
          height={313}
          src={props.img}
          alt="frame9"
          className=" aspect-square scale-[90%] hover:scale-[105%] ease-in duration-500"
        />
      </div>
      <h1 className="text-[18px] pt-[12px]  font-bold">{props.title}</h1>
      <p className="text-gray-600 text-[14px]">{props.description}</p>
    </div>
  );
};

export default CategoryCard;
