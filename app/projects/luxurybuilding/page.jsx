import Footer from "@/app/components/Footer";
import LuxuryAbout from "@/app/components/LuxuryAbout";
import LuxuryGrid from "@/app/components/LuxuryGrid";
import LuxuryHero from "@/app/components/LuxuryHero";
import React from "react";

const page = () => {
  return (
    <>
      <LuxuryHero />
      <LuxuryAbout />
      <LuxuryGrid />
      <Footer />
    </>
  );
};

export default page;
