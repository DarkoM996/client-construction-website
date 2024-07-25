import Image from "next/image";
import Hero from "./components/Hero";
import HoverImageLinks from "./components/HoverImageLinks";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Hero />
      <HoverImageLinks />
    </>
  );
}
