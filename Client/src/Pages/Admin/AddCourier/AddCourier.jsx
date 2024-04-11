import React, { useState } from "react";
import { Base } from "../../../axios/axios";
import { useNavigate } from "react-router-dom";

const AddCourier = () => {
  const [USPS, setUSPS] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const formData = {
    USPS,
    firstName,
    lastName,
    email,
  };

  const addCourier = async (e) => {
    e.preventDefault();
    let response = await Base.post("/courier", formData);
    const { errMsg } = response.data;
    if (errMsg) {
      alert(errMsg);
    } else {
      console.log(response);
      alert("Success");
      navigate("/admin");
    }
  };
  return (
    <div className=" flex justify-center items-center flex-col shadow-lg w-[90%] md:w-[50%] m-auto">
      <div className="mt-5">
        <h2 className="font-bold text-2xl text-blue-600">Add a Tracker</h2>
      </div>
      <form action="" className="w-[80%]" onSubmit={addCourier}>
        <div className="my-5">
          <label className="" htmlFor="">
            USPS
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full p-3 border border-blue-200  "
            onChange={(e) => setUSPS(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            First Name
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full p-3 border border-blue-200  "
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label className="" htmlFor="">
            Last Name
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full p-3 border border-blue-200  "
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label className="" htmlFor="">
            Email
          </label>
          <input
            type="email"
            placeholder=""
            className="w-full p-3 border border-blue-200  "
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <input
          type="submit"
          className="bg-blue-400 text-white px-5 py-3 cursor-pointer"
          value="submit"
        />
      </form>
    </div>
  );
};

export default AddCourier;
