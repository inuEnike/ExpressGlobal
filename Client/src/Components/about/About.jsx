import React from "react";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 items-center my-5 mx-10 justify-items-center">
      <div className="">
        <img src={about} alt="" />
        <h2 className="text-3xl text-center bg-blue-500 py-3 text-white font-bold">
          25+ years Experience
        </h2>
      </div>
      <div className="md:my-0 my-10 ">
        <h2 className=" font-bold text-blue-500 text-xl">ABOUT US</h2>
        <h2 className="text-2xl md:text-4xl md:font-bold text-[red] py-5">
          Providing Reliable Transportation Solutions
        </h2>
        <p className=" py-2 text-justify text-teal-700">
          At Express Global Logistics, we understand the importance of timely
          and secure transportation for your goods. With our commitment to
          excellence and safety, we offer dependable logistics services tailored
          to meet your specific needs.
        </p>

        <p className=" py-2 text-justify text-teal-700">
          Our team of experienced professionals ensures that your cargo is
          handled with the utmost care and efficiency, guaranteeing its safe and
          timely delivery to its destination. Whether you require local
          distribution or long-haul transportation, we have the expertise and
          resources to get the job done right.
        </p>
        <p className=" py-2 text-justify text-teal-700">
          With a focus on reliability, efficiency, and customer satisfaction,
          Safe & Faster Logistics is your trusted partner for all your
          transportation needs. Contact us today to learn more about how we can
          help streamline your logistics operations and support your business
          growth.
        </p>
      </div>
    </div>
  );
};

export default About;
