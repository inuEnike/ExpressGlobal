import React from "react";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 items-center my-5 mx-10 justify-items-center">
      <div className="">
        <img src={about} alt="" />
        <h2 className="text-3xl text-center bg-blue-500 py-3 text-white font-bold">
          25+ years Experience
        </h2>
      </div>
      <div className="md:my-0 my-10 ">
        <h2 className=" font-bold text-blue-500 text-xl">ABOUT US</h2>
        <h2 className="text-2xl md:text-4xl md:font-bold text-[red]">
          Trusted & Faster Logistic Service Provider
        </h2>
        <p className=" py-2 text-justify text-teal-700">
          Nothern Nights is a low-cost shipping service that delivers to
          businesses and is faster to more locations than UPS Ground. we have
          25+ years
        </p>
      </div>
    </div>
  );
};

export default About;
