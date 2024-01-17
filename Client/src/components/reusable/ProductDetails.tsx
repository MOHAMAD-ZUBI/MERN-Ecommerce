import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

type Props = {};

const ProductDetails = (props: Props) => {
  return (
    <div className="flex w-full flex-col ">
      <h1 className="px-4 text-3xl mb-[20px] font-[600]">
        Product Information
      </h1>
      <Tabs variant="underlined" aria-label="Options" color="primary">
        <Tab key="descriptions" title="Descriptions">
          <p className="p-2.5 text-[#807D7E]">
            Creatine; üzerinde en çok araştırma yapılmış spor takviyesidir.
          </p>
        </Tab>
        <Tab key="additional-information" title="Nutrition Facts">
          <div className=" pointer-events-none text-start">
            <p className="p-2.5 text-[#807D7E]">Servis 3 g</p>
            <div className="w-[300px] bg-gray-500 h-[2px]"></div>
            <p className="p-2.5 text-[#807D7E]">Kreatin Monohidrat 3000 mg</p>
            <div className="w-[300px] bg-gray-500 h-[2px]"></div>
          </div>
        </Tab>
        <Tab key="reviews" title="Reviews">
          <p className="p-2.5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            doloribus qui consequatur commodi alias mollitia, eaque non. Minima
            necessitatibus facere doloremque ipsam animi ullam optio voluptatem.
            Dolorum ea autem repellendus! Omnis explicabo tempore molestias
            commodi quae suscipit aliquid eos,
          </p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductDetails;
