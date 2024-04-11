import React from "react";
import Dsh from "../../Components/dsh/Dsh";
import OurServices from "../../Components/services/Services";
import Footer from "../../Components/Footer/Footer";

const Services = () => {
  return (
    <div>
      <Dsh title={"OUR SERVICES"} page="/ services" />
      <div className="">
        <OurServices />
        <Footer />
      </div>
    </div>
  );
};

export default Services;
