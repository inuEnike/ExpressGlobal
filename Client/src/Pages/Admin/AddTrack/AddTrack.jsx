import React, { useEffect, useState } from "react";
import { Base } from "../../../axios/axios";
import { useNavigate, useParams } from "react-router-dom";

import "leaflet/dist/leaflet.css";

const AddTrack = () => {
  const URI3 = `trackingInfo/`;
  const URI4 = "courier/";
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [courier, setCourier] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [goodsDetails, setDetails] = useState("");
  const [weight, setWeight] = useState(Number);
  const [address, setAddress] = useState("");
  const [recieverName, setRecieverName] = useState("");
  const [goodsImage, setGoodsImage] = useState(null);
  const [recieverNumber, setRecieverNumber] = useState("");
  const [recieverEmail, setRecieverEmail] = useState("");
  const [trackingStatus, setTrackingStatus] = useState("");
  const [seviceMode, setSeviceMode] = useState("");
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState([51.505, -0.09]);

  const formData = new FormData();
  formData.append("courier", courier);
  formData.append("from", from);
  formData.append("to", to);
  formData.append("goodsDetails", goodsDetails);
  formData.append("file", goodsImage);
  formData.append("address", address);
  formData.append("recieverName", recieverName);
  formData.append("recieverNumber", recieverNumber);
  formData.append("recieverEmail", recieverEmail);
  formData.append("weight", weight);
  formData.append("seviceMode", seviceMode);
  formData.append("trackingStatus", trackingStatus);
  formData.append("latitude", position[0]);
  formData.append("longitude", position[1]);

  const AddTracking = async () => {
    setLoading(true); // Start loading

    try {
      const base = await Base.post(URI3, formData);
      console.log(base.data);
      alert("Success");
      // You may not need to reload the entire page, consider other UI updates
    } catch (error) {
      console.error("Error adding tracking:", error);
      alert("Error adding tracking. Please try again.");
    } finally {
      setLoading(false); // Stop loading, whether successful or not
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setGoodsImage(file);
  };

  const HandleSubmit = (e) => {
    try {
      e.preventDefault();
      AddTracking();
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await Base.get(URI4);
      setdata(response.data.courier);
      // console.log(response.data.courier);
    };

    fetchData();
  }, []);

  const handleAddressChange = async (e) => {
    setAddress(e.target.value);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          e.target.value
        )}`
      );
      const data = await response.json();
      if (data.length > 0) {
        setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <div className="absolute text-white w-full transition delay-700 duration-300 ease-in-out bg-[rgba(0,0,0,0.5)] p-10 flex justify-center items-center">
      <form
        action=""
        className="bg-white p-5 text-black"
        onSubmit={HandleSubmit}
        name="goodsImage"
        encType="multipart/form-data"
      >
        <h2 className="text-xl">Add Tracking Details</h2>

        <div className="my-5 ">
          <label className="" htmlFor="">
            Courier
          </label>

          <select
            name=""
            id=""
            className="w-full p-3 border border-blue-200  "
            onChange={(e) => {
              setCourier(e.target.value);
            }}
            value={courier}
          >
            <option value="">Choose </option>
            {data.map((data) => (
              <>
                <option key={data._id} value={data._id}>
                  {data.firstName}
                </option>
              </>
            ))}
          </select>
        </div>

        <div className="my-5 ">
          <label className="" htmlFor="">
            Details
          </label>
          <input
            type="text"
            value={goodsDetails}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter address"
            className="w-full p-3 border border-blue-200"
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Weight
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>
        <div className="my-5">
          <label className="" htmlFor="">
            From
          </label>
          <input
            type="text"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            To
          </label>
          <input
            type="text"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Reciever Name
          </label>
          <input
            value={recieverName}
            type="text"
            onChange={(e) => {
              setRecieverName(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Reciever Number
          </label>
          <input
            type="number"
            value={recieverNumber}
            onChange={(e) => {
              setRecieverNumber(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Reciever Email
          </label>
          <input
            type="email"
            value={recieverEmail}
            onChange={(e) => {
              setRecieverEmail(e.target.value);
            }}
            placeholder=""
            className="w-full p-3 border border-blue-200  "
          />
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Tracking Status
          </label>

          <select
            name=""
            id=""
            value={trackingStatus}
            className="w-full p-3 border border-blue-200  "
            onChange={(e) => {
              setTrackingStatus(e.target.value);
            }}
          >
            <option value="">Choose </option>
            <option value="HOLD">HOLD</option>
            <option value="PENDING">PENDING</option>
            <option value="DELIVERED">DELIVERED</option>
          </select>
        </div>

        <div className="my-5">
          <label className="" htmlFor="">
            Service Mode
          </label>

          <select
            name=""
            id=""
            value={seviceMode}
            className="w-full p-3 border border-blue-200  "
            onChange={(e) => {
              setSeviceMode(e.target.value);
            }}
          >
            <option value="">Choose </option>
            <option value="AIR">AIR</option>
            <option value="SHIP">SHIP</option>
            <option value="LAND">LAND</option>
          </select>
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label htmlFor="fileInput">Goods/ Package</label>

          <input
            type="file"
            name="file"
            accept="/image"
            className="w-full p-3 border border-blue-200  "
            id="goodsImage"
            onChange={handleFileChange}
          />
        </div>

        <br />
        {loading ? (
          <input
            type="submit"
            className="bg-blue-400 text-white px-5 py-3 cursor-pointer"
            value="Loading..."
            disabled
          />
        ) : (
          <input
            type="submit"
            className="bg-blue-400 text-white px-5 py-3 cursor-pointer"
            value="submit"
          />
        )}
      </form>
    </div>
  );
};

export default AddTrack;
