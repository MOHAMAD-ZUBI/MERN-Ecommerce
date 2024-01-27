import SingleProduct from "@/components/Products/SingleProduct";
import axios from "axios";
import { notFound } from "next/navigation";

async function fetchProduct(slug: string) {
  try {
    const { data } = await axios.get(
      `http://localhost:3060/product/getSingle/${slug}`
    );
    return data;
  } catch (error) {
    return undefined;
  }
}

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const product = await fetchProduct(params.slug);
  if (!product) {
    notFound();
  }
  return <SingleProduct product={product} />;
}
