import React from "react";

const Hero = () => {
  return (
    <div className="bg-orange-100">
      <section className="container mx-auto py-20 text-center">
        <h2 className="text-balance text-4xl tracking-tight font-bold text-gray-600 sm:text-6xl">
          Welcome to <span className="text-green-400 ">Purse Pilot</span>
        </h2>
        <p className="text-gray-600 leading-8 text-lg mt-6">
          A <span className="text-green-500"> simple</span>,{" "}
          <span className="text-blue-500">effective</span> way to manage your
          finances. Track your expenses easily
        </p>

        <div class="flex justify-center items-center mt-6">
          <a
            href="#features"
            className=" rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            GET STARTED
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
