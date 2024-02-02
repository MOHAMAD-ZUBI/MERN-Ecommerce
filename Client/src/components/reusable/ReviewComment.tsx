import React from "react";
import { GoStarFill } from "react-icons/go";

type Props = {
  name: string;
  comment: string;
  date: string;
};

const ReviewComment = (props: Props) => {
  return (
    <div className=" bg-gray-200 rounded-2xl p-6 max-w-[700px] w-full m-[20px]">
      <div className="flex flex-row">
        <div className="flex flex-row justify-center items-center mx-[15px]">
          {[0, 1, 2, 3].map((star) => {
            return (
              <div className="px-[3px]">
                <GoStarFill size={22} color="orange" />
              </div>
            );
          })}
        </div>
        <div className="font-semibold text-xl">{props.name}</div>
      </div>
      <div className="flex md:flex-row flex-col justify-between text-center mt-[15px]  mx-[15px]">
        <p className="">{props.comment}</p>
        <h1 className="text-center font-semibold">{props.date}</h1>
      </div>
    </div>
  );
};

export default ReviewComment;
