import React from "react";
import { BiSolidTruck } from "react-icons/bi";
import { Link } from "react-router-dom";
import { data } from "./data";

const MNav = () => {
  return (
    <nav className="">
      <div className="">
        <ul className=" flex flex-col items-center justify-center md:hidden font-bold text-sm capitalize">
          {data.map((id) => (
            <li className="py-5 hover:text-blue-300 ">
              {" "}
              <Link to={id.link}>{id.name} </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MNav;
