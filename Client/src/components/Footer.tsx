import React from "react";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { SiVisa } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="">
      <div className="h-full bg-primary w-full text-white">
        <div className="flex max-md:flex-col justify-between max-md:items-center py-[48px] px-[98px]">
          <div className="flex flex-col max-md:items-center max-md:text-center">
            <h1 className="text-[18px] pb-[24px] font-bold">GREENMIND</h1>
            <h1 className="w-[150px] pb-[24px] ">
              We help you find your dream plant
            </h1>
            <div className="flex gap-4 items-center">
              <SlSocialYoutube size={28} />
              <FaXTwitter size={23} />
              <SlSocialInstagram size={23} />
            </div>
            <h1 className="max-md:p-[48px] md:pt-[110px]">
              2023 all Right Reserved Term of use GREENMIND
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 max-md:text-center gap-[48px]">
            <div>
              <h1 className="text-[18px] font-bold">Information</h1>
              <ul className="py-[24px]">
                <li className="pb-[24px]">About</li>
                <li className="pb-[24px]">
                  <Link href="/products">Products</Link>
                </li>
                <li className="pb-[24px]">
                  <Link href="#bestSelling">Best Selling</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[18px] font-bold">Company</h1>
              <ul className="py-[24px]">
                <li className="pb-[24px]">Community</li>
                <li className="pb-[24px]">Career</li>
                <li className="pb-[24px]">Our Story</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[18px] font-bold">Contact</h1>
              <ul className="py-[24px]">
                <li className="pb-[24px]">Getting Started</li>
                <li className="pb-[24px]">Pricing</li>
                <li className="pb-[24px]">Resources</li>
              </ul>
            </div>
            <div className=" flex flex-row justify-end">
              <Image alt="" src={"/card/visa.svg"} height={30} width={46} />
              <Image alt="" src={"/card/maser.svg"} height={30} width={46} />
              <Image alt="" src={"/card/paypal.svg"} height={30} width={46} />
              <Image alt="" src={"/card/applepay.svg"} height={30} width={46} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
