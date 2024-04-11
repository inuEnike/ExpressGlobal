import React from "react";
import { FaTruck } from "react-icons/fa6";
import { IoAirplaneSharp, IoBoatSharp } from "react-icons/io5";
import { GiCargoShip } from "react-icons/gi";
const Services = () => {
  return (
    <div className="flex justify-center items-center flex-col mx-5">
      <div className="my-10 text-center">
        <h2 className=" font-bold text-blue-500 text-xl ">OUR SERVICES</h2>
        <h2 className="font-bold text-3xl md:text-6xl text-[red] py-5">
          Best Logistic Services
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-4 justify-items-center my-10 ">
        <div className="text-center">
          <div className="bg-blue-500 p-10 flex items-center justify-center">
            <IoAirplaneSharp fontSize={30} color="white" />
            <h2 className="text-white text-xl pl-5">Air Freight</h2>
          </div>
          <p className=" text-teal-700 py-5">
            We distribute goods by our own cargo plane
          </p>
        </div>

        <div className="text-center">
          <div className="bg-blue-500 p-10 flex items-center justify-center">
            <IoBoatSharp fontSize={30} color="white" />
            <h2 className="text-white text-xl pl-5">Ocean Freight</h2>
          </div>{" "}
          <p className=" text-teal-700 py-5">
            including cargo ships and containers. Ocean freight is typically
            used for cargo that needs to be transported over large distances,
            such as those between continents.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-blue-500 p-10 flex items-center justify-center">
            <FaTruck fontSize={30} color="white" />
            <h2 className="text-white text-xl pl-5">Land Transport</h2>
          </div>
          <p className=" text-teal-700 py-5">
            The land transport segment comprises the commercial transport of
            goods over land, i.e. by road, rail, inland waterways or pipelines
          </p>
        </div>

        <div className="text-center">
          <div className="bg-blue-500 p-10 flex items-center justify-center">
            <GiCargoShip fontSize={30} color={"white"} />
            <h2 className="text-white text-xl pl-5">Cargo Storage</h2>
          </div>
          <p className="text-teal-700 py-5">
            With large spaces we shipped goods above 132,600 KG
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
