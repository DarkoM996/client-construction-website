import React from "react";
import Image from "next/image";
import gridimg1 from "../../public/images/hotel picture 1.jpg";
import gridimg2 from "../../public/images/hotel picture 2.jpg";
import gridimg3 from "../../public/images/hotel picture 3.jpg";
import gridimg4 from "../../public/images/hotel picture 4.jpg";
import gridimg5 from "../../public/images/hotel picture 5.jpg";

const LuxuryGrid = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full min-h-screen grid grid-cols-1 md:grid-cols-6 gap-6 relative px-6 py-4 lg:px-28">
      {/* Project #1 */}
      <div className="relative w-full h-[420px] lg:col-span-2 hover:scale-90  duration-500 transition-transform">
        <Image
          priority={true}
          src={gridimg1}
          alt="picture1"
          className="w-full h-full object-cover rounded-3xl "
        />
      </div>
      {/* Project #2 */}
      <div className="relative w-full h-[420px] lg:col-span-4 hover:scale-90  duration-500 transition-transform">
        <Image
          priority={true}
          src={gridimg2}
          alt="picture1"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      {/* Project #3 */}
      <div className="relative w-full h-[420px] lg:col-span-4 hover:scale-90  duration-500 transition-transform">
        <Image
          priority={true}
          src={gridimg3}
          alt="picture1"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      {/* Project #4 */}
      <div className="relative w-full h-[420px] lg:col-span-2 hover:scale-90  duration-500 transition-transform">
        <Image
          priority={true}
          src={gridimg4}
          alt="picture1"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      {/* Project #5 */}
      <div className="relative w-full h-[420px] lg:col-span-2 hover:scale-90  duration-500 transition-transform">
        <Image
          priority={true}
          src={gridimg5}
          alt="picture1"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      {/* Project #6 */}
      <div className="relative w-full h-[420px] lg:col-span-4 hover:scale-90  duration-500 transition-transform">
        <Image
          priority={true}
          src={gridimg1}
          alt="picture1"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </section>
  );
};

export default LuxuryGrid;
