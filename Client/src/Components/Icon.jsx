import React from "react";
import { LiaFedex } from "react-icons/lia";
import { FaDhl } from "react-icons/fa6";
import icon from "../assets/iconbg.png";

const Icon = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center items-center ">
      <LiaFedex fontSize={100} />
      <FaDhl fontSize={100} />
      <img src={icon} alt="" className="w-20" />
    </div>
  );
};

export default Icon;
