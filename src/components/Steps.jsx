import React from "react";
import { FaSearch, FaHandshake, FaKey } from "react-icons/fa"; 

const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
   
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl w-72">
        <FaSearch className="mb-4 text-4xl text-primary" />
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">Research Phase</h2>
        <p className="text-center text-gray-600">
          We begin by researching the best properties that fit your needs and preferences.
        </p>
      </div>

      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl w-72">
        <FaHandshake className="mb-4 text-4xl text-primary" />
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">Close the Deal</h2>
        <p className="text-center text-gray-600">
          After finding the perfect home, we help you close the deal and finalize the purchase.
        </p>
      </div>

      {/* Step 3: Key Delivery */}
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl w-72">
        <FaKey className="mb-4 text-4xl text-primary" />
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">Key Delivery</h2>
        <p className="text-center text-gray-600">
          Once everything is set, we deliver the keys to your new home, making it yours.
        </p>
      </div>
    </div>
  );
};

export default Steps;
