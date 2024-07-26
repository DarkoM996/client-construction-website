import Footer from "@/app/components/Footer";
import HotelAbout from "@/app/components/HotelAbout";
import HotelGrid from "@/app/components/HotelGrid";
import HotelHero from "@/app/components/HotelHero";
import React from "react";

const page = () => {
  return (
    <div>
      <HotelHero />
      <HotelAbout />
      <HotelGrid />
      <Footer />
    </div>
  );
};

export default page;
