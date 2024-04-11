import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Base } from "../../../axios/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LOGIN_URI } from "../../../Hooks/URI/UseURI";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [msg, setMessage] = useState("");

  //Functionality for the show password
  const showPassword = () => {
    setIsVisible(!isVisible);
  };

  //login funcion
  const login = async () => {
    try {
      const res = await Base.post(LOGIN_URI, {
        email,
        password,
      });
      const { Atoken, msg } = res.data;
      if (msg) {
        setMessage(msg);
        toast(msg);
      } else {
        localStorage.setItem("Atoken", Atoken);
        navigate("/admin");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //function to call the login function and prevent the page from reloading
  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div className="h-[70vh] flex justify-center items-center flex-col shadow-lg w-[90%] md:w-[50%] m-auto">
      {msg && <ToastContainer />}
      <div className="">
        <h2 className="font-bold text-2xl text-blue-600">ADMIN LOGIN</h2>
      </div>
      <form action="" className="w-[80%]" onSubmit={handleLogin}>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-full my-5 p-3 border border-blue-200"
          placeholder="eg george@gmail.com"
        />
        <div className="flex items-center border border-blue-200">
          {isVisible ? (
            <input
              type="text"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              className="w-full  p-3 border  "
            />
          ) : (
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              className="w-full p-3 border "
            />
          )}
          {isVisible ? (
            <span className="" onClick={showPassword}>
              <IoMdEyeOff fontSize={20} />
            </span>
          ) : (
            <span className="" onClick={showPassword}>
              <IoMdEye fontSize={20} />
            </span>
          )}
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

export default Signin;
