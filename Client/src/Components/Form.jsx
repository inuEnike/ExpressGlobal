import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Base } from "../axios/axios";
import { UserContext } from "../Hooks/context/userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { USERLOGIN_URI } from "../Hooks/URI/UseURI";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Form = (props) => {
  const [TrackingId, setTID] = useState("");
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Base.post(USERLOGIN_URI, {
        TrackingId,
      });

      const { token, message } = response.data;
      if (message) {
        setmessage(message);
        toast(message);
        setLoading(false);
      } else {
        setLoading(false);
        setUser({ TrackingId, token });
        localStorage.setItem("token", token);
        navigate(`/dashboard`);

        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
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
        {loading ? (
          <button className="bg-blue-300 btn flex justify-center" type="submit">
            {/* <AiOutlineLoading3Quarters /> */}
            loading...
          </button>
        ) : (
          <button className="bg-blue-300 btn" type="submit">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
