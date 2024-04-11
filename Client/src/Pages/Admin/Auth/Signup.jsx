import React, { useState } from "react";
import { Base } from "../../../axios/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { SIGNUP_URI } from "../../../Hooks/URI/UseURI";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRPassword] = useState("");
  const [message, setMessage] = useState("");

  const create = async () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("repeatPassword", repeatPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fetchUser = await Base.post(SIGNUP_URI, {
      username,
      email,
      password,
      repeatPassword,
    });

    const { message } = fetchUser.data;

    if (message) {
      setMessage(message);
      alert(message);
      toast(message);
    } else {
      create();
      alert("Registration Successfull");
      navigate("/admin/signin");
    }
  };

  return (
    <div>
      {message && <ToastContainer />}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />

        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          onChange={(e) => {
            setRPassword(e.target.value);
          }}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Signup;
