import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="container mx-auto py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-600">
          Welcome to <span className="text-green-400 ">Purse Pilot</span>
        </h2>
        <p className="text-gray-600 py-2 text-xl mt-4">
          A <span className="text-green-500"> simple</span>,{" "}
          <span className="text-blue-500">effective</span> way to manage your
          finances. Track your expenses easily
        </p>
        <a
          href="#features"
          className="mt-6 text-xl font-semibold inline-block bg-blue-600 text-white px-6 py-3 rounded-lg transition-transform transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
        >
          GET STARTED
        </a>
      </section>
    </div>
  );
};

export default Hero;
