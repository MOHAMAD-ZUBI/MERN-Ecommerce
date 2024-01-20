import React from "react";
import ProductCard from "./reusable/ProductCard";
import BestSelling from "./BestSelling";
import { GoArrowRight } from "react-icons/go";
import CategoryCard from "./reusable/CategoryCard";

type Props = {};

const Products = [
  {
    title: "Pre Workout",
    price: "23.99",
    img: "/card/preworkout.jpg",
    description:
      "Antrenman öncesi kullanım için tasarlanan kompleks ve etkili bir formülasyona sahiptir.  ",
  },
  {
    title: "Creatine Monohydrate",
    price: "34.00",
    img: "/card/creatine.jpg",
    description:
      "Creatine; üzerinde en çok araştırma yapılmış spor takviyesidir. ",
  },
  {
    title: "Peanut Butter",
    price: "14.95",
    img: "/card/fistik.png",
    description:
      "Katkı maddesi içermez ve %100 fıstıktan üretilmiştir. Pratik ve lezzetli öğün olarak kullanılabilir.  ",
  },
];
const Categories = (props: Props) => {
  return (
    <>
      <div className="text-center my-[100px]">
        <h1 className="text-[32px] font-bold">Categories</h1>
        <h2 className="text-[18px]">Find what you are looking for</h2>
      </div>

      <div className="max-w-[1500px] px-[18px] mx-auto mt-[10px]">
        <div className="lg:gid lg:grid-cols-3 gap-12 grid grid-cols-2 justify-between items-center pb-[113px]">
          {Products.map((product) => {
            return (
              <div className="">
                <CategoryCard
                  title={product.title}
                  img={product.img}
                  description={product.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
