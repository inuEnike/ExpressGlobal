import React from "react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import MNav from "./MNav";
import { useState } from "react";
import { data } from "./data";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const controlNav = () => {
    setNavOpen(!navOpen);
    console.log("clicked");
  };
  return (
    <div className="">
      <nav className=" flex justify-between px-5 md:px-10 py-5 items-center">
        <div className="logo flex items-center text-2xl sm:text-xl md:text-4xl font-bold">
          <FaTruckFast color="rgb(147, 197, 253)" />
          <span className="pl-2">Nothern Nights</span>
        </div>

        <ul className="hidden md:flex font-bold text-sm capitalize">
          {data.map((id, key) => (
            <li className="pl-5 hover:text-blue-300 " key={key}>
              {" "}
              <Link to={id.link}>{id.name} </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex text-sm">
          <button className="bg-blue-300 btn">Request a quote</button>
        </div>
        <div className="md:hidden " onClick={controlNav}>
          {navOpen ? (
            <div className="cursor-pointer">
              <AiOutlineClose fontSize={20} />
            </div>
          ) : (
            <div className="bg-btn cursor-pointer px-4 py-2 rounded-full ">
              <AiOutlineAlignRight fontSize={20} color="black" />
            </div>
          )}
        </div>
      </nav>
      {navOpen && <MNav />}
    </div>
  );
};

export default Nav;
