import React from "react";
import featuers from "../../assets/feature.jpg";

const Why = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center w-[80%] md:w-full m-auto">
      <div className="">
        <img src={featuers} alt="why us" className="" />
      </div>
      <div className="w-[90%] pb-10">
        <h2 className=" font-bold text-blue-500 text-xl py-3">Why Choose US</h2>
        <h2 className="text-4xl md:text-6xl font-[600] text-red-600 py-3">
          Faster, Safe and Trusted Logistics Services
        </h2>
        <p className=" text-teal-700 text-lg place-items-center md:py-3 py-5">
          Nothern Nights. is a low-cost shipping service that delivers to
          businesses and is faster to more locations than UPS Ground
        </p>
        <button className="bg-blue-500 btn text-white">Learn More</button>
      </div>
    </div>
  );
};

export default Why;
