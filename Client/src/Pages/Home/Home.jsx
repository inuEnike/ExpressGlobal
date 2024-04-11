import React from "react";
import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header";

import Icon from "../../Components/Icon";
import About from "../../Components/about/About";
import Quote from "../../Components/quote/Quote";
import Services from "../../Components/services/Services";
import Form from "../../Components/Form";
import Why from "../../Components/Why/Why";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  // window.scrollY(top);
  return (
    <div>
      <div className=" bg text-lg md:h-screen w-full bg-cover text-white py-5">
        <Nav />
        <Header
          title={
            <>
              Safe & Faster <br />
              <span className="text-white tracking-wider leading-8">
                Logistics Services
              </span>
            </>
          }
          form={<Form />}
          text={
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse cupiditate consequatur, totam explicabo veritatis ullam natus unde, perspiciatis, earum ab possimus animi a."
          }
        />
        <Icon />
      </div>
      <div className=" md:h-[80vh]">
        <About />
      </div>
      <div className="lg:h-[70vh] md:h-[80vh] bg-[#0000010e]">
        <Quote />
      </div>
      <div className="my-10 ">
        <Services />
      </div>

      <div className=" bg-[#0000010e]">
        <Why />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
