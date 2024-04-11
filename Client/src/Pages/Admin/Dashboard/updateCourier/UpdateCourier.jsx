import React, { useEffect, useState } from "react";
import { Base } from "../../../../axios/axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCourier = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState("");
  const [TrackingId, setId] = useState("");
  const [USPS, setUSPS] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const formData = {
    TrackingId,
    USPS,
    firstName,
    lastName,
    email,
  };

  useEffect(() => {
    const getCourier = async () => {
      const response = await Base.get(`/courier/${id}`);
      const { TrackingId, USPS, firstName, lastName, email } =
        response.data.courier;

      setData(response.data.courier);
      setId(TrackingId);
      setUSPS(USPS);
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
    };
    getCourier();
  }, []);

  const UpdateCourier = async (e) => {
    e.preventDefault();
    const response = await Base.patch(`/courier/${id}`, formData);
    alert("Success");
    navigate("/admin");
  };

  return (
    <div className=" flex justify-center items-center flex-col shadow-lg w-[90%] md:w-[50%] m-auto">
      <div className="mt-5">
        <h2 className="font-bold text-2xl text-blue-600">Update Courier</h2>
      </div>
      <form action="" className="w-[80%]" onSubmit={UpdateCourier}>
        <div className="my-5 ">
          <label className="" htmlFor="">
            Tracking ID
          </label>
          <input
            type="text"
            value={TrackingId}
            disabled
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            USPS
          </label>
          <input
            type="text"
            value={USPS}
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
            value={firstName}
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
            value={lastName}
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
            value={email}
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

export default UpdateCourier;
