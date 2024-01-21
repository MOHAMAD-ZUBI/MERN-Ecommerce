"use client";
import { Accordion, AccordionItem, Checkbox, Slider } from "@nextui-org/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Filters = () => {
  const categories = [
    "Men",
    "Women",
    "Kids",
    "Bags",
    "Accessories",
    "Winter Wear",
  ];
  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

  return (
    <div className="mr-6">
      <Accordion defaultSelectedKeys={"all"} selectionMode="multiple">
        <AccordionItem
          indicator={<IoIosArrowForward className="text-black" />}
          key="1"
          aria-label="Filter By Category"
          title="Filter By Category"
        >
          {categories.map((category) => (
            <div className="mb-2" key={category}>
              <Checkbox radius="sm">{category}</Checkbox>
            </div>
          ))}
        </AccordionItem>
        <AccordionItem
          key="2"
          indicator={<IoIosArrowForward className="text-black" />}
          aria-label="Filter by Price"
          title="Filter by Price"
        >
          <Slider
            label="Price Range"
            step={50}
            showOutline={true}
            minValue={0}
            size="sm"
            maxValue={2000}
            defaultValue={[0, 2000]}
            formatOptions={{ style: "currency", currency: "USD" }}
            className="max-w-full overflow-hidden"
          />
        </AccordionItem>
        <AccordionItem
          indicator={<IoIosArrowForward className="text-black" />}
          key="3"
          aria-label="Filter By Colors"
          title="Filter By Colors"
        >
          {categories.map((category) => (
            <div className="mb-2" key={category}>
              <Checkbox radius="sm">{category}</Checkbox>
            </div>
          ))}
        </AccordionItem>
        <AccordionItem
          indicator={<IoIosArrowForward className="text-black" />}
          key="4"
          aria-label="Filter By Size"
          title="Filter By Size"
        >
          {sizes.map((size) => (
            <div className="mb-2" key={size}>
              <Checkbox radius="sm">{size}</Checkbox>
            </div>
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filters;
