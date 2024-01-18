"use client";
import React, { useState } from "react";

type Props = {};

const QuantityCounter = (props: Props) => {
  const [quantity, setQuantity] = useState(1);
  const handleDecrease = () => {
    setQuantity((prev) => (prev !== 0 ? prev - 1 : 0));
  };
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  return (
    <div>
      <div className="w-[100px] h-[36px] bg-[#F6F6F6] rounded-2xl flex justify-between items-center gap-[16px] p-[16px] flex-row">
        <div>
          <button onClick={handleDecrease}>-</button>
        </div>
        <div className=" pointer-events-none">{quantity}</div>
        <div>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </div>
  );
};

export default QuantityCounter;
