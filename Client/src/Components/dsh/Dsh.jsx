import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header";

const Dsh = (props) => {
  return (
    <div>
      {" "}
      <div className=" bg2 text-lg md:h-[50vh] w-full bg-cover text-white py-5">
        <Nav />
        <div className="flex flex-col justify-center h-[20vh] items-center text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-400 uppercase">
            {props.title}
          </h2>
          <p className="py-5 uppercase text-sm">
            <Link to={"/"} className="hover:underline hover:text-blue-300">
              Home
            </Link>{" "}
            {props.page}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dsh;
