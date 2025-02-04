import Image from "next/image";
import React from "react";
import backgroundimage from "../../public/images/hotel picture 1.jpg";
import backgroundimage2 from "../../public/images/hotel picture 2.jpg";

const HotelHero = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full min-h-full relative px-6 py-4 md:px-12 md:py-10 lg:px-28">
      {/* Grid for the entire section */}
      <div className="grid grid-cols-1 gap-6 md:gap-10 lg:gap-16 text-wrap">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl py-6 md:py-12">
          Hotel Elite
        </h1>
        {/* Pictures grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-10">
          {/* Grid within a grid */}
          <div className="relative w-full h-[300px] md:h-[400px] md:col-span-4 ">
            <Image
              src={backgroundimage}
              alt="background image"
              priority
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="relative w-full h-[300px] md:h-[400px] md:col-span-6">
            <Image
              src={backgroundimage2}
              alt="background image"
              priority
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelHero;
