import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTruckFast } from "react-icons/fa6";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import MNav from "./MNav";
import { UserContext } from "../../../../Hooks/context/userContext";

const Nav = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const { Admin, modal, openModal } = useContext(UserContext);

  const controlNav = () => {
    setNavOpen(!navOpen);
    console.log("clicked");
  };

  const Logout = () => {
    if (confirm("Do you want to logout?")) {
      localStorage.removeItem("Atoken");
      navigate("/admin/signin");
    }
  };

  return (
    <div>
      {" "}
      <nav className=" flex justify-between px-5 md:px-10 py-5 items-center bg-blue-500 text-white">
        <div className="logo flex items-center text-2xl sm:text-xl md:text-4xl font-bold">
          <FaTruckFast color="rgb(147, 197, 253)" />
          <span className="pl-2">Northern Nights</span>
        </div>

        <ul className="hidden md:flex font-bold text-sm capitalize">
          <li className="px-5 cursor-pointer" onClick={openModal}>
            Add Tracking
          </li>

          <li>
            <Link to={"/addCourier"}>Add Courier</Link>
          </li>
        </ul>

        <div className="hidden md:flex text-sm">
          Howdy, <span className="capitalize pl-2"> {Admin.username}</span>
        </div>

        <div className="hidden md:flex text-sm">
          <button className="bg-blue-300 border-none btn" onClick={Logout}>
            Sign out
          </button>
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
      <div className="">{navOpen && <MNav />}</div>
    </div>
  );
};

export default Nav;
