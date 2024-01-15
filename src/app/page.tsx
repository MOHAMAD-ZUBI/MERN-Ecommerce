import AboutUs from "@/components/AboutUs";
import BestSelling from "@/components/BestSelling";
import Categories from "@/components/Categories";
import AdCart from "@/components/reusable/AdCart";
import ProductCard from "@/components/reusable/ProductCard";

export default function Home() {
  return (
    <main className=" flex flex-col items-center w-full mx-auto min-h-screen bg-white  ">
      <AdCart color="black" heading="Buy your dream plants" imgLink="sss" />
      <BestSelling color="[#C1DCDC]" />
      <AboutUs />
      <Categories />
    </main>
  );
}
