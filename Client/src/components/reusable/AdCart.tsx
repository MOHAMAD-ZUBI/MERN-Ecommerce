import Image from "next/image";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";

type Props = {
  color: string;
  heading: string;
  imgLink: string;
};

const AdCart = (props: Props) => {
  return (
    <div className="max-w-[1500px] w-full mx-auto min-h-[512px] bg-primary rounded-[24px] relative lg:p-[48px]">
      <div className=" grid grid-cols-1 lg:grid-cols-2 lg:justify-between w-full">
        <div className="flex flex-col justify-center items-center">
          <div
            className={`text-${props.color} lg:text-[64px] text-[48px] pt-8 lg:text-start text-center font-bold`}
          >
            <span>Buy your</span>
            <h1>dream plants</h1>
          </div>
          <div className="py-[24px]">
            <div className="flex flex-row">
              <div className="text-lg px-8">
                <h1 className="font-semibold">50+</h1>
                <h1>Plant Species</h1>
              </div>
              <div className=" w-[2px] bg-black h-[64px]"></div>
              <div className="text-lg px-8">
                <h1 className="font-semibold">100+</h1>
                <h1>Customers</h1>
              </div>
            </div>
          </div>

          <div className="flex w-[418px] h-[54px] items-center rounded-[12px] p-[8px] bg-white">
            <input
              className="placeholder:text-gray-400 w-[90%] h-full outline-none rounded-[12px] p-[18px]"
              placeholder="What are you looking for?"
            />
            <div className="bg-primary flex items-center justify-center w-[48px] rounded-[12px] h-full">
              <IoSearchSharp size={27} color="#1E1E1E" />
            </div>
          </div>
        </div>
        <div className="lg:absolute flex items-center justify-center lg:right-[24px] bottom-0 z-10">
          <Image
            height={400}
            width={420}
            src={"/card/plant.png"}
            alt="Rectangle.png"
          />
        </div>
        <div className="absolute right-[56px] bottom-0 ">
          <Image
            height={400}
            width={420}
            src={"/card/Rectangle.png"}
            alt="Rectangle.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AdCart;
