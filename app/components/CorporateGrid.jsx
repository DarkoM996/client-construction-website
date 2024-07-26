import React from "react";
import Image from "next/image";
import gridimg1 from "../../public/images/picture16.jpg";

const CorporateGrid = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-screen grid grid-cols-1 gap-6 relative px-6 py-4 lg:px-28">
      {/* Project #1 */}
      <div className="flex flex-col justify-center items-center gap-4 md:col-span-2">
        <div className="relative w-full h-[420px]">
          <Image
            priority={true}
            src={gridimg1}
            alt="picture1"
            className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 gap-2">
          <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
            Furnico
          </h4>
          <p className="text-xl font-light text-primary_customGray-700">
            Ecommerce Full Stack Web App
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorporateGrid;
