import React from "react";

const Features = () => {
  return (
    <div>
      <section id="features" className="bg-white py-8">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800">
            FEATURES
          </h3>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="ml-5 p-6 bg-gray-50 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600">
                Track Expenses
              </h4>
              <p className="text-gray-600 mt-4">
                Easily Track where your money goes.
              </p>
            </div>
            <div className=" p-6 bg-gray-50 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600">
                Budget Management
              </h4>
              <p className="text-gray-600 mt-4">
                Stay on top of your budget effortlessly
              </p>
            </div>
            <div className="mr-5 p-6 bg-gray-50 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600">
                Visual Reports
              </h4>
              <p className="text-gray-600 mt-4">
                Get insights with charts and graphs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
