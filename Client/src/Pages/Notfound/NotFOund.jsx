import React from "react";
import { Link } from "react-router-dom";

const NotFOund = () => {
  return (
    <div>
      <div className="text-center h-[80vh] flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold ">404 | NOT FOUND</h2>
        <p className="my-10 ">
          Go back to{" "}
          <Link className="text-teal-500 underline" to={"/"}>
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFOund;
