import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

type Props = {
  description: string;
  nutrition: object;
};

const ProductDetails = (props: Props) => {
  return (
    <div className="flex w-full flex-col ">
      <h1 className="px-4 text-3xl mb-[20px] font-[600]">
        Product Information
      </h1>
      <Tabs variant="underlined" aria-label="Options" color="primary">
        <Tab key="descriptions" title="Descriptions">
          <p className="p-2.5 text-[#807D7E]">{props.description}</p>
        </Tab>
        <Tab
          key="additional-information"
          title="Nutrition Facts"
          className="max-w-[400px] "
        >
          <div className=" pointer-events-none text-start w-full">
            <div className="py-2.5 text-[#807D7E] flex flex-row uppercase justify-between items-center">
              <p className="py-2.5 text-gray-600 font-semibold">
                Nuritional Facts
              </p>
              <p>Per Serving</p>
            </div>

            {Object.keys(props.nutrition).map((key) => {
              return (
                <div key={key}>
                  <div className="p-2.5 text-[#807D7F] flex flex-row uppercase justify-between">
                    <p className="text-gray-600">{key}</p>{" "}
                    <p> {(props.nutrition as Record<string, string>)[key]}</p>
                  </div>
                  <div className="w-[400px] bg-gray-500 h-[2px]"></div>
                </div>
              );
            })}
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
