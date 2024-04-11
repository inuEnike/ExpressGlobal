import { Base } from "../../axios/axios";
import React, { useState, createContext, useEffect } from "react";
import { USER_URI, DETAILS_URI, SOLO_URER } from "../URI/UseURI";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [Admin, setAdmin] = useState({});
  const [Details, setDetails] = useState([]);
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  const token = localStorage.getItem("token");
  const Atoken = localStorage.getItem("Atoken");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await Base.get(USER_URI, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching user profile", error);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await Base.get(DETAILS_URI, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.message) {
          setMessage(message);
        } else {
          setDetails(response.data.Tinfo);
          // console.log(response.data.Tinfo);
        }
      } catch (error) {
        console.error("Error fetching user profile", error);
      }
    };

    fetchUserDetails();
  }, []);

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const response = await Base.get(SOLO_URER, {
          headers: {
            Authorization: `Bearer ${Atoken}`,
          },
        });
        setAdmin(response.data);
      } catch (error) {
        console.error("Error fetching user profile", error);
      }
    };

    fetchAdminProfile();
  }, []);

  const openModal = () => {
    setModal(!modal);
    console.log("clicked");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        Details,
        setDetails,
        message,
        setMessage,
        Admin,
        setAdmin,
        setModal,
        modal,
        openModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
