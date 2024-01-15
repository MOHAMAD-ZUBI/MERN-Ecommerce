import AboutUs from "@/components/AboutUs";
import BestSelling from "@/components/BestSelling";
import AdCart from "@/components/reusable/AdCart";
import ProductCard from "@/components/reusable/ProductCard";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between ">
      <AdCart color="black" heading="Buy your dream plants" imgLink="sss" />
      <BestSelling />
      <AboutUs />
    </main>
  );
}
