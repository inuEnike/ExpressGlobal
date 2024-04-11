import React from "react";
import { Base } from "../../../../axios/axios";
import { useParams, useNavigate, redirect, Link } from "react-router-dom";
import DeleteFunc from "../../../../Components/DeleteFunc";

const DTrack = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const URI = `trackingInfo/${id}`;

  const Delete = async () => {
    try {
      await Base.delete(URI);
      navigate("/admin");
    } catch (error) {
      console.log(error.message);
    }
  };
  // } else {
  //   redirect("/admin");
  // }
  return (
    <div className="flex justify-center items-center h-[70vh] ">
      <div className="shadow-lg p-20 md:w-[50%] text-center m-auto">
        <DeleteFunc />
        <button
          onClick={Delete}
          className="bg-blue-400 text-white px-5 py-3 rounded-md"
        >
          Delete
        </button>
        <Link to={"/admin"}>
          <button className="bg-red-400 ml-5 text-white px-5 py-3 rounded-md">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DTrack;
