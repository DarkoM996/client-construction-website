export default function NotFound() {
  return (
    <main className="text-center">
      <h1>Error 404</h1>
    </main>
  );
}

// if you are creating a not found page with the short rfce.. you have to rename the initial stuff because it will throw an error for some reason. There's also NetNinja style of writing an error 404 page which works, I will stick to this method which works for me better.

// import Image from "next/image";
// import React from "react";
// import hero from "../public/images/picture8.jpg";
// import Link from "next/link";

// const NotFound = () => {
//   return (
//     <main className="max-w-screen-3xl mx-auto w-full md:min-h-screen relative px-6 py-4 lg:px-28">
//       <div className="flex flex-col justify-center items-start">
//         {/* Test for change */}
//         {/* Image Container */}
//         <div className="hidden sm:flex relative w-full h-1/4 sm:h-[500px] md:h-[600px] ">
//           <Image
//             priority
//             height={600}
//             width={1280}
//             src={hero}
//             alt="hero image"
//             // just experiment with different height of the image at different width sizes. The original h-[600px] can also work.
//             className="w-full h-full object-cover rounded-3xl bg-center aspect-square"
//           />
//         </div>
//         {/* Text */}
//         <div className="h-full w-full flex flex-col justify-center items-center md:flex-row md:justify-between gap-8 py-5">
//           <div className="w-full md:w-1/2 lg:w-full">
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-wrap w-full lg:w-2/3 h-full">
//               Error 404. Something went wrong!
//             </h1>
//           </div>
//           <div className="flex flex-col justify-center items-center gap-4 lg:gap-6 w-full md:w-1/2 lg:w-1/3 h-1/2  ">
//             <p className="text-wrap w-full h-full">
//               Unfortunately something went wrong. The page that you were looking
//               doesn't exist. You can go back to the homepage from here or go to
//               the projects to select other projects.
//             </p>
//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row w-full gap-4">
//               <Link
//                 href="/"
//                 className="px-8 py-4 bg-white hover:bg-primary_lighterColor-200 text-black rounded-full border border-black w-full sm:w-[160px] text-center"
//               >
//                 Homepage
//               </Link>
//               <Link
//                 href="/projects"
//                 className="px-8 py-4 bg-primary_backgroundColor-900 hover:bg-primary_backgroundColor-800 text-white rounded-full border border-white w-full  sm:w-[160px] text-center"
//               >
//                 Projects
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default NotFound;
