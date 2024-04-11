import React, { useContext } from "react";
import "../App.css";

const Header = (props) => {
  return (
    <div className="grid md:grid-cols-2 gap-2 justify-items-center md:mx-10 text-center md:text-left md:h-[50vh] items-center my-10">
      <div className=" md:mx-5 w-full m-auto">
        <h2 className="text-4xl md:text-7xl font-extrabold text-blue-500">
          {props.title}
        </h2>
        <p className="py-5 md:text-md text-sm">{props.text}</p>
      </div>

      {props.form}
    </div>
  );
};

export default Header;
