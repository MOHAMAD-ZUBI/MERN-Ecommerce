import AboutUs from "@/components/AboutUs";
import AdCart from "@/components/reusable/AdCart";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between ">
      <AdCart color="black" heading="Buy your dream plants" imgLink="sss" />
      <AboutUs />
    </main>
  );
}
