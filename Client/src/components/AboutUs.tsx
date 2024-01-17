import React from "react";
import { PiPottedPlantLight } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { BsTelephoneOutbound } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="max-w-[1536px] mx-auto  text-center  bg-white w-full ">
      <div className="flex flex-col pt-8">
        <h2 className="text-black font-bold text-[32px]">About us</h2>
        <p className="text-[#1E1E1E80]  text-[18px] ">
          Order now and appreciate the beauty of nature.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:gird lg:grid-cols-3 justify-center gap-[24px] items-center pt-[48px] ">
        <div className="flex flex-col items-center">
          <div className="bg-primary w-[96px] h-[96px] rounded-full flex justify-center items-center">
            <PiPottedPlantLight size={50} color="gray" />
          </div>
          <h1 className="pt-[24px] text-[18px] font-semibold">
            Large Assortment
          </h1>
          <h1 className="w-[360px] text-gray-700 pt-[12px]">
            we offer many different types of products with fewer variations in
            each category.
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-primary w-[96px] h-[96px] rounded-full flex justify-center items-center">
            <BsBoxSeam size={40} color="gray" />
          </div>
          <h1 className="pt-[24px] text-[18px] font-semibold">
            Fast & Free Shipping
          </h1>
          <h1 className="w-[360px] text-gray-700 pt-[12px]">
            4-day or less delivery time, free shipping and an expedited delivery
            option.
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-primary w-[96px] h-[96px] rounded-full flex justify-center items-center">
            <BsTelephoneOutbound size={40} color="gray" />
          </div>
          <h1 className="pt-[24px] text-[18px] font-semibold">24/7 Support</h1>
          <h1 className="w-[360px] text-gray-700 pt-[12px]">
            answers to any business related inquiry 24/7 and in real-time.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
