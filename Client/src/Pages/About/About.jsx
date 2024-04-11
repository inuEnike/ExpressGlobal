import React from "react";
import Dsh from "../../Components/dsh/Dsh";
import AboutUs from "../../Components/about/About";
import Why from "../../Components/Why/Why";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <div>
      <Dsh title={"About US"} page="/ about" />
      <div className="">
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
};

export default About;
