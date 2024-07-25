import Image from "next/image";
import React from "react";
import hero from "../../public/images/hero.jpg";

const Hero = () => {
  return (
    <main className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-4 lg:px-28">
      {/* Image Container */}
      <div className="relative h-2/3">
        <Image
          priority={true}
          src={hero}
          alt="hero image"
          // just experiment with different height of the image at different width sizes. The original h-[600px] can also work.
          className="w-full h-[420px] sm:h-[600px] object-cover rounded-3xl bg-center"
        />
      </div>
    </main>
  );
};

export default Hero;
