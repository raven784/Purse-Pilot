import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="bg-slate-300 shadow-md py-4 ">
        <nav className="container mx-auto flex justify-between items-center">
          <img src="../_images/pursepilot.png" />
          <div>
            <a href="#features" className="text-gray-800 mx-4 relative group">
              Features
              <span className="absolute left-0 bottom-[-5px] w-full h-1.5 bg-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
            <a href="#pricing" className="text-gray-800 mx-4 relative group">
              Pricing
              <span className="absolute left-0 bottom-[-5px] w-full h-1.5 bg-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
            <a
              href="/login"
              className="bg-lime-500 text-white px-4 py-2 mx-4 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-lime-500"
            >
              LOGIN
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
