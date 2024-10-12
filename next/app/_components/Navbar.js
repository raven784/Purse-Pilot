import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7x1 items-center justify-between lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Purse Pilot</span>
              <Image
                src="/images/pursepilot.png"
                alt="Purse Pilot Logo"
                height={50}
                width={100}
                className="h-16 w-auto"
              />
            </a>
          </div>
          <div className="pt-2">
            <a
              href="#"
              class="-mx-3 block rounded-lg px-3 py-5 text-base font-semibold leading-7 text-gray-900 hover:text-green-500"
            >
              {" "}
              Log In{" "}
            </a>
          </div>
        </nav>
      </header>
      <hr className=" shadow-lg border-t border-green-400" />
    </div>
  );
};

export default Navbar;
