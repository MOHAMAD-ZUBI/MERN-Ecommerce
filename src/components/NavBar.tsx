import React from "react";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const NavBar = () => {
  return (
    <div>
      <div className="h-[100px] bg-white">
        <div className="text-black h-full flex items-center">
          <div className="flex w-full justify-between items-center">
            {/* logo and navlinks */}

            <div className="flex">
              <div className="px-[98px] text-2xl font-bold">HELLO</div>
              <div className="flex gap-[44px]">
                <div className="font-semibold">Home</div>
                <div>Products</div>
                <div>Contacts</div>
              </div>
            </div>

            {/* cart and user icons */}
            <div className="flex justify-between gap-[48px] px-[96px]">
              <div>
                <BsCart size={24} />
              </div>
              <div>
                <FaRegUser size={23} />
              </div>
              <div className=" bg-black w-[2px] h-[28px]"></div>
              <div>
                <HiOutlineBars3BottomRight size={29} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
