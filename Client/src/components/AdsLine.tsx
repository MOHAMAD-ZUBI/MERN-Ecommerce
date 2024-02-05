"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const AdsLine = (props: Props) => {
  const messages = [
    "🎊 25% Off New Year New Me Bundle",
    "🚚 Free Shipping US Orders Over $150",
  ];
  const [currentMessage, setCurrentMessage] = useState(0);
  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setCurrentMessage((prev) =>
        prev === messages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentMessage]);

  return (
    <div className="w-full md:h-[40px] h-[50px] bg-primary text-white">
      <div className="flex flex-row h-full items-center justify-center">
        <Marquee direction="right" speed={70} pauseOnHover>
          <h1 className=" animate-pulse  ">{messages[currentMessage]}</h1>
        </Marquee>
      </div>
    </div>
  );
};

export default AdsLine;
