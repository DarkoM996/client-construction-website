import CorporateAbout from "@/app/components/CorporateAbout";
import CorporateGrid from "@/app/components/CorporateGrid";
import CorporateHero from "@/app/components/CorporateHero";
import Footer from "@/app/components/Footer";
import React from "react";

const page = () => {
  return (
    <>
      <CorporateHero />
      <CorporateAbout />
      <CorporateGrid />
      <Footer />
    </>
  );
};

export default page;
