import React from "react";

const Features = () => {
  return (
    <div className="relative z-20 py-10 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black mb-12">
          Packed with <span className="text-green-500">awesome</span> features!
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-4 gap-6">
        <div className="bg-green-200 p-6 rounded-lg flex items-center justify-center h-96">
          <h5 className="text-2xl font-semibold">Big Feature</h5>
        </div>

        <div className="grid grid-rows-2 gap-6">
          <div className="bg-blue-200 p-6 rounded-lg flex items-center justify-center h-44">
            <h5 className="text-xl font-semibold">Medium Feature 1</h5>
          </div>

          <div className="bg-purple-200 p-6 rounded-lg flex items-center justify-center h-44">
            <h5 className="text-xl font-semibold">Medium Feature 2</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
