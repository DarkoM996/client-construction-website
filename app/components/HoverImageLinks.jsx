"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const HoverImageLinks = () => {
  return (
    <section className="max-w-screen-3xl min-h-screen mx-auto px-4 py-4 sm:px-8 sm:py-8 lg:px-28">
      <div className="max-w-screen-3xl mx-auto h-full relative">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold py-12">
          Selected Projects
        </h2>
        <Link
          heading="Luxury Building"
          subheading="Building a luxury building in Ontario"
          imgSrc="/images/hero.jpg"
          href="/projects/luxurybuilding"
        />
        <Link
          heading="Luxury Hotel"
          subheading="Building an elite hotel in Vancouver"
          imgSrc="/images/hotel picture 2.jpg"
          href="/projects/hotel"
        />
        <Link
          heading="Vancouver Residence"
          subheading="Building an elite hotel in Vancouver"
          imgSrc="/images/picture3.jpg"
          href="/projects/residencebuilding"
        />
        <Link
          heading="Luxury Home"
          subheading="Building a modern building in Ottawa"
          imgSrc="/images/picture4.jpg"
          href="/projects/luxuryhome"
        />
        <Link
          heading="Corporate Building"
          subheading="Building a residence in Vancouver"
          imgSrc="/images/picture5.jpg"
          href="/projects/corporatebuilding"
        />
        <Link
          heading="Hotel Elite"
          subheading="Building an elite hotel in Toronto"
          imgSrc="/images/picture6.jpg"
          href="/hotelconstruction"
        />
      </div>
    </section>
  );
};

export default HoverImageLinks;

const Link = ({ heading, subheading, imgSrc, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="whileHover"
      href={href}
      className="group relative flex justify-between items-center border-b border-primary_backgroundColor-700 py-4 transition-colors duration-500 hover:border-neutral-400 md:py-6"
    >
      {/* Link name and subheading */}
      <div className="flex flex-col">
        <span className="relative z-10 py-4 block text-4xl font-bold text-primary_lighterColor-500 transition-colors duration-500 md:text-5xl group-hover:text-primary_customGrey-900">
          {heading}
        </span>
        <span className="relative z-0 bloc text-primary_customGrey-100 transition-colors duration-500 group-hover:text-primary_customGrey-900">
          {subheading}
        </span>
      </div>
      {/* TODO: Add image here */}

      <motion.img
        variants={{
          initial: {
            scale: 0,
            rotate: "-12.5deg",
          },
          whileHover: {
            scale: 1,
            rotate: "12.5deg",
          },
        }}
        style={{
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{
          type: "spring",
        }}
        src={imgSrc}
        alt={`Image representing a link for ${heading}`}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
      />

      {/* Adding the arrow */}
      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{
          type: "spring",
        }}
      >
        <FiArrowRight className="text-4xl text-primary_lighterColor-200" />
      </motion.div>
    </motion.a>
  );
};
