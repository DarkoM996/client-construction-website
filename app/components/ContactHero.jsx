import React from "react";

const ContactHero = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-2/3 relative px-6 py-4 lg:px-28">
      <div className="flex flex-col justify-center items-center w-full h-full gap-12 md:gap-16 ">
        <h1 className="text-5xl md:text-6xl lg:text-8xl text-transform: uppercase">
          Contact
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center text-xl gap-8">
          {/* Links that would go to the client's socials */}
          <h2 className="text-base">Facebook</h2>
          <h2 className="text-base">Instagram</h2>
          <h2 className="text-base">YouTube</h2>
          <h2 className="text-base">Twitter</h2>
          <h2 className="text-base">Pinterest</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
