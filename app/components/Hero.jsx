import Image from "next/image";
import React from "react";
import hero from "../../public/images/hero.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-4 lg:px-28">
      {/* Image Container */}
      {/* Test for change */}
      <div className="relative w-full h-1/3 md:h-2/3 ">
        <Image
          priority
          height={720}
          width={1080}
          src={hero}
          alt="hero image"
          // just experiment with different height of the image at different width sizes. The original h-[600px] can also work.
          className="w-full h-full object-cover rounded-3xl bg-center aspect-square"
        />
      </div>
      {/* Text */}
      <div className="h-full w-full flex flex-col justify-center items-center md:flex-row md:justify-between gap-4 py-5">
        <div className="w-full md:w-1/2 lg:w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-wrap w-full lg:w-2/3 h-full">
            Hotel Construction Amplified
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 lg:gap-6 w-full md:w-1/2 lg:w-1/3 h-1/2  ">
          <p className="text-wrap w-full h-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            aliquid rerum beatae, non ea officia repellat architecto? Alias
            tenetur natus aspernatur earum quibusdam perspiciatis, est error
            minus eveniet beatae sunt.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <Link
              href="/projects"
              className="px-8 py-4 bg-white hover:bg-primary_lighterColor-200 text-black rounded-full border border-black w-full sm:w-[160px] text-center"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary_backgroundColor-900 hover:bg-primary_backgroundColor-800 text-white rounded-full border border-white w-full  sm:w-[160px] text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
