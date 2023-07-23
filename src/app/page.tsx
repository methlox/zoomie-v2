import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Order } from "@/components/Order";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Order />
      <Discover />
    </>
  );
}
