"use client";
import CustomRadio from "@/components/reusable/CustomRadio";
import { BreadcrumbItem, Breadcrumbs, RadioGroup } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

type Props = {};

const Addreses = [
  {
    title: "Office",
    city: "Karabuk",
    district: "100.yil",
    street: "1010",
    zipcode: "78050",
  },
  {
    title: "Home",
    city: "Safranbolu",
    district: "100.yil",
    street: "1023",
    zipcode: "78023",
  },
  {
    title: "Jenny Wilsom",
    city: "California",
    district: "Rnachview",
    street: "3891",
    zipcode: "62639",
  },
];

const Payment = [
  {
    title: "Visa/MasterCard",
    icon: "/card/visa.svg",
  },
  {
    title: "PayPal",
    icon: "/card/paypal.svg",
  },
  {
    title: "ApplePay",
    icon: "/card/applepay.svg",
  },
];

const page = (props: Props) => {
  return (
    <div className="max-w-[1232px] px-[16px] mx-auto my-[20px]">
      <div className="py-1">
        <Breadcrumbs
          separator="/"
          itemClasses={{
            separator: "px-2",
          }}
        >
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Cart</BreadcrumbItem>
          <BreadcrumbItem>Checkout</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <h1 className="mt-[25px] text-2xl font-semibold">Shipping Address</h1>
      <div className="flex md:flex-row flex-col gap-[20px] mt-[15px]">
        <div className="max-w-[900px] w-full">
          <RadioGroup className=" w-full">
            {Addreses.map((address) => {
              return (
                <CustomRadio
                  icon=""
                  edit={true}
                  key={address.title}
                  className=" border-2 border-gray-200"
                  description={`${address.street} ${address.district}, ${address.city} ${address.zipcode}`}
                  value={address.title}
                >
                  {address.title}
                </CustomRadio>
              );
            })}
          </RadioGroup>
          <div>
            <h1 className="mt-[25px] text-2xl font-semibold">Payment Method</h1>

            <RadioGroup className=" w-full mt-[15px]">
              {Payment.map((payment) => {
                return (
                  <CustomRadio
                    icon={payment.icon}
                    edit={false}
                    key={payment.title}
                    className=" border-2 border-gray-200"
                    description=""
                    value={payment.title}
                  >
                    {payment.title}
                  </CustomRadio>
                );
              })}
            </RadioGroup>
          </div>
        </div>
        <div className="md:max-w-[332px] w-full flex flex-col items-center">
          <div className="border-2 border-gray-300 rounded-xl gap-[15px] w-full py-4 px-3 flex justify-center flex-col">
            <h1>*We will contact you to confirm the order</h1>
            <input
              type="email"
              placeholder="enteryouremail@gmail.com"
              className="p-2 rounded-lg border-2 border-gray-300"
            />
          </div>
          <div className="border-2 border-gray-300 rounded-xl w-full mt-[25px] gap-[15px] py-4 px-3 flex justify-center items-center flex-col">
            <h1 className="text-center bg-gray-100 w-[90%] flex justify-center items-center rounded-lg h-[40px] font-semibold">
              Order Summary
            </h1>
            <div className="flex flex-col justify-start gap-[20px] w-full px-4 items-start">
              {[0, 1, 2].map((product) => {
                return (
                  <div className="flex flex-row justify-evenly w-full mt-[35px] ">
                    <Image
                      width={50}
                      height={50}
                      src={"/card/creatine.jpg"}
                      alt=""
                    />
                    <div>
                      <h1 className="font-semibold">Creatine</h1>
                      <p className="text-gray-500 text-[16px]">30 servis</p>
                    </div>
                    <h1 className="font-semibold">$23.99</h1>
                  </div>
                );
              })}
            </div>
            <div className="w-full h-[2px] bg-gray-300 mt-[35px]" />
            <div className="flex flex-row justify-between w-full px-4">
              <div className="font-semibold">
                <h1>Sub Total:</h1>
                <h1>Delivery:</h1>
                <h1>Grand Total:</h1>
              </div>
              <div>
                <h1>$87.99</h1>
                <h1>$15.00</h1>
                <h1>$102.00</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
