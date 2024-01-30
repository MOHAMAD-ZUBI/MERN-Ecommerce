"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductCard from "../reusable/ProductCard";

interface Product {
  _id: string;
  title: string;
  description: string;
  img: string;
  variants: any;
  slug: string;
}
type Props = {};

const FetchProducts = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const limit = 3;
        const response = await axios.get(
          `http://localhost:3060/product/all/${limit}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-[18px] mt-[69px]">
      {products.map((product) => {
        return (
          <div className="" key={product._id}>
            <ProductCard
              slug={product.slug}
              title={product.title}
              img={product.img}
              price={product.variants[0].price}
              description={product.description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FetchProducts;
