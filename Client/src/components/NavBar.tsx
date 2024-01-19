"use client";
import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const NavBar = () => {
  return (
    <div className="bg-white">
      <div className="h-[100px] max-w-[1500px] px-[18px] flex flex-row justify-between items-center mx-auto">
        {/* logo and navlinks */}

        <div className="flex flex-row gap-[96px]">
          <div className=" text-2xl font-bold">GREENMIND</div>
          <div className="flex max-md:hidden gap-[44px]">
            <div className="font-semibold">Home</div>
            <div>Products</div>
            <div>Contacts</div>
          </div>
        </div>

        {/* cart and user icons */}
        <div className="flex justify-between md:gap-[48px] gap-6 ">
          <div>
            <BsCart size={24} />
          </div>
          <div>
            <FaRegUser size={23} />
          </div>
          <div className=" bg-black w-[2px] text-white h-[28px]"></div>
          <div>
            <HiOutlineBars3BottomRight size={29} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
