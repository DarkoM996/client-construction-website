import React from "react";
import Link from "next/link";

const WorkInProgress = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-screen relative px-6 py-4 md:px-12 md:py-10 lg:px-28">
      <div className="flex flex-col justify-center items-center w-full h-[80%] gap-6">
        <h1 className="text-5xl md:text-6xl lg:text-8xl">Work In Progress</h1>
        <Link
          href="/projects"
          className="px-6 py-4 bg-white text-black rounded-full"
        >
          Back to projects
        </Link>
      </div>
    </section>
  );
};

export default WorkInProgress;
