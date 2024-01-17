import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  title: string;
  link: string;
};

const CategoryLink = (props: Props) => {
  return (
    <div className=" px-4 py-3">
      <Link
        className="flex flex-row justify-between items-center"
        href={props.link}
      >
        <button>{props.title}</button>
        <MdKeyboardArrowRight size={22} />
      </Link>
    </div>
  );
};

export default CategoryLink;
