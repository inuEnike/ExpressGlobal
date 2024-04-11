import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Base } from "../axios/axios";
import { UserContext } from "../Hooks/context/userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { USERLOGIN_URI } from "../Hooks/URI/UseURI";

const Form = (props) => {
  const [TrackingId, setTID] = useState("");
  const [message, setmessage] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await Base.post(USERLOGIN_URI, {
        TrackingId,
      });

      const { token, message } = response.data;
      if (message) {
        setmessage(message);
        toast(message);
      } else {
        setUser({ TrackingId, token });

        localStorage.setItem("token", token);
        navigate(`/dashboard`);

        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="lg:w-[60%] md:w-[80%] w-[90%] mx-2 md:mx-0 py-10 px-5 md:px-10 m-auto bgs">
      {message && <ToastContainer />}{" "}
      <label htmlFor="">Input Tracking Number:</label>
      <form
        action=""
        className="flex justify-center items-center"
        onSubmit={handleForm}
      >
        <input
          type="text"
          className="px-10 py-3 outline-none my-2 mr-3 w-[100%] text-slate-500"
          placeholder="e.g 22323ed....."
          required
          onChange={(e) => {
            setTID(e.target.value);
          }}
        />

        <button className="bg-blue-300 btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
