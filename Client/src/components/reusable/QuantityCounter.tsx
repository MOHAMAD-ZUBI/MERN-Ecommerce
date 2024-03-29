"use client";
import React, { FC, useState } from "react";

type Props = {
  counter: number;
};

const QuantityCounter: FC<Props> = ({ counter }) => {
  const [quantity, setQuantity] = useState(counter);
  const handleDecrease = () => {
    setQuantity(counter--);
  };
  const handleIncrease = () => {
    setQuantity(counter++);
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
