import React from "react";
import Image from "next/image";
import gridimg1 from "../../public/images/picture5.jpg";

const CorporateGrid = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 relative px-6 py-4 lg:px-28">
      {/* Project #1 */}
      <div className="relative w-full h-[420px]">
        <Image
          priority={true}
          src={gridimg1}
          alt="picture1"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      {/* Project #2 */}
      <div className="relative w-full h-[420px]">
        <Image
          priority={true}
          src={gridimg1}
          alt="picture1"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      {/* Project #3 */}
      <div className="relative w-full h-[420px]">
        <Image
          priority={true}
          src={gridimg1}
          alt="picture1"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      {/* Project #4 */}
      <div className="relative w-full h-[420px]">
        <Image
          priority={true}
          src={gridimg1}
          alt="picture1"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      {/* Project #5 */}
      <div className="relative w-full h-[420px]">
        <Image
          priority={true}
          src={gridimg1}
          alt="picture1"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      {/* Project #6 */}
      <div className="relative w-full h-[420px]">
        <Image
          priority={true}
          src={gridimg1}
          alt="picture1"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default CorporateGrid;
