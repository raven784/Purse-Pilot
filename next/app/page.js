import React from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Features from "./_components/Features";

export const metadata = {
  title: "PursePilot",
  description: "Landing page created using Next.js and Tailwind CSS",
};

const Home = () => {
  return (
    <div className="bg-white-600 min-h-screen">
      {/* Navbar*/}
      <Navbar />
      {/*Hero Section*/}
      <Hero />
      {/*Features*/}
      <Features />
      {/**Footer */}
      <footer>
        <div className="bg-gray-800 text-white py-8">
          <div className="container mx-auto text-center">
            <p>Purse Pilot. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
