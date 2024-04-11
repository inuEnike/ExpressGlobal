import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Hooks/context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { Base } from "../../../axios/axios";
import Nav from "./Nav/Nav";
import AddTrack from "../AddTrack/AddTrack";

const Admin = () => {
  const navigate = useNavigate();
  const URI = "trackingInfo/";
  const URI2 = "courier/";
  const { modal } = useContext(UserContext);

  const [TInfos, setTInfo] = useState([]);
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const base = async () => {
      try {
        setLoading(true);
        const response = await Base.get(URI);
        setTInfo(response.data.info);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    base();

    const base2 = async () => {
      const response = await Base.get(URI2);
      setDetail(response.data.courier);
    };
    base2();
  }, []);

  const handleLogout = () => {
    if (window.confirm("do you want to logout? ")) {
      window.localStorage.removeItem("Atoken");
      navigate("/admin/signin");
    }
  };

  return (
    <div className="relative">
      <Nav />
      {modal && <AddTrack />}

      <div className="" onClick={handleLogout}>
        <button className="p-5 m-5 md:hidden bg-blue-400 text-white px-3 py-2 rounded-md cursor-pointer">
          Logout
        </button>
      </div>
      <div className=" mx-2 md:mx-10 my-10 ">
        <div className="h2 py-5 font-bold">
          <h2 className="text-2xl md:text-4xl">All Tracking Details</h2>
        </div>
        <div className=" overflow-x-scroll">
          <table className=" min-w-full">
            <thead className="text-center border">
              <tr>
                <td scope="col" className="py-2 px-2 border ">
                  ID
                </td>
                <td scope="col" className="py-2 px-2 border ">
                  From
                </td>
                <td scope="col" className="py-2 px-2 border ">
                  To
                </td>
                <td scope="col" className="py-2 px-2 border ">
                  Tracking Status
                </td>
                <td scope="col" className="py-2 px-2 border ">
                  Service Mode
                </td>
                <td scope="col" className="py-2 px-2 border ">
                  Weight
                </td>
                <td scope="col" className="py-2 px-2 border ">
                  Reciever Name
                </td>
                <td scope="col" className="py-2 px-2 border ">
                  Reciever Number
                </td>
                <td scope="col" className="py-2 px-2 border ">
                  Courier
                </td>

                <td scope="col" className="py-2 px-2 border ">
                  Address
                </td>
                <td scope="col" className="py-2 px-2 border ">
                  Action
                </td>
              </tr>
            </thead>
            {loading ? (
              <>Loading...............</>
            ) : (
              <tbody className="border text-center">
                {TInfos.map((data, key) => (
                  <tr key={data._id}>
                    <td className="py-5 px-2">{data._id}</td>
                    <td className="px-5">{data.from}</td>
                    <td className="px-5">{data.to}</td>
                    <td className="px-5">{data.trackingStatus}</td>
                    <td className="px-5">{data.seviceMode}</td>
                    <td className="px-5">{data.weight}</td>
                    <td className="px-5">{data.recieverName}</td>
                    <td className="px-5">0{data.recieverNumber}</td>
                    <td className="px-5">
                      {data.courier.map((courier) => (
                        <div key={courier._id}>{courier.email}</div>
                      ))}
                    </td>
                    <td className="px-5">{data.address}</td>
                    <td className="px-5">
                      <div className="flex items-center text-center justify-center">
                        <Link to={`/ETrack/${data._id}`}>
                          <p className="py-5">Edit</p>
                        </Link>
                        <Link to={`/DTrack/${data._id}`}>
                          <p className="px-5">Delete</p>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>

      <div className=" mx-2 md:mx-10 my-10 ">
        <div className="h2 py-5 font-bold">
          <h2 className="text-2xl md:text-4xl">Sender Details</h2>
        </div>
        <div className=" overflow-x-scroll">
          <table className=" min-w-full">
            <thead className="text-center border">
              <tr>
                <td scope="col" className="py-2 px-2 border ">
                  ID
                </td>
                <td scope="col" className="py-2 px-2 border ">
                  Email
                </td>
                <td scope="col" className="py-2 px-2 border ">
                  USPS
                </td>
                <td scope="col" className="py-2 px-2 border ">
                  First Name
                </td>
                <td scope="col" className="py-2 px-2 border ">
                  Last Name
                </td>

                <td scope="col" className="py-2 px-2 border ">
                  Tracking Id
                </td>

                <td scope="col" className="py-2 px-2 border ">
                  Action
                </td>
              </tr>
            </thead>
            {loading ? (
              <>Loading...............</>
            ) : (
              <tbody className="border text-center">
                {detail.map((data, key) => (
                  <tr key={data._id}>
                    <td className="py-5 px-2">{data._id}</td>
                    <td className="px-5">{data.email}</td>
                    <td className="px-5">{data.USPS}</td>
                    <td className="px-5">{data.firstName}</td>
                    <td className="px-5">{data.lastName}</td>
                    <td className="px-5">{data.TrackingId}</td>
                    <td className="px-5">
                      <div className="flex items-center text-center justify-center">
                        <Link to={`/updateCourier/${data._id}`}>
                          <p className="py-5">Edit</p>
                        </Link>
                        <Link to={`/deleteCourier/${data._id}`}>
                          <p className="px-5">Delete</p>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
