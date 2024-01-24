"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./reusable/ProductCard";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import axios from "axios";

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
    title: "Pre Workout",
    price: "23.99",
    img: "/card/preworkout.jpg",
    description:
      "Antrenman öncesi kullanım için tasarlanan kompleks ve etkili bir formülasyona sahiptir.  ",
  },
];
type Props = {
  color: string;
};
interface Product {
  _id: string;
  title: string;
  description: string;
  img: string;
  variants: any;
}

const BestSelling = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const limit = 3;
        const response = await axios.get("http://localhost:3060/product/all", {
          data: { limit },
        });
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-[1500px] px-[18px] mx-auto mt-[100px]">
      <div className="lg:gid lg:grid-cols-4 gap-12 grid grid-cols-2 items-center pb-[113px]">
        <div className="flex flex-col pt-[96px]">
          <h1 className="text-[32px] font-bold lg:text-start text-center">
            Best Selling
          </h1>
          <h1 className="text-[32px] font-bold lg:text-start text-center">
            Supplements
          </h1>
          <h1 className="text-[18px]  text-gray-700  lg:text-start text-center">
            Easiest way to healthy life by buying your favorite supplements
          </h1>

          <div className="max-lg:flex max-lg:justify-center py-2">
            <button
              onClick={() => router.push("/products")}
              className={`bg-${props.color} text-white py-[12px] px-[24px] rounded-[8px] flex justify-between items-center`}
            >
              <h1 className="mx-[5px]">See more</h1> <GoArrowRight />
            </button>
          </div>
        </div>
        {products.map((product) => {
          return (
            <div className="" key={product._id}>
              <ProductCard
                title={product.title}
                img={product.img}
                price={product.variants[0].price}
                description={product.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSelling;
