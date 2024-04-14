import React, { useEffect, useRef, useState } from "react";

const Counter = ({ initialValue, step, duration }) => {
  const [count, setCount] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let currentCount = 0;
          const interval = setInterval(() => {
            currentCount += step;
            if (currentCount >= initialValue) {
              setCount(initialValue);
            } else {
              setCount(currentCount);
            }
          }, duration);

          return () => {
            clearInterval(interval);
          };
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the target is visible
    );

    observer.observe(targetRef.current);

    return () => {
      observer.unobserve(targetRef.current);
    };
  }, []);

  return <span ref={targetRef}>{count}</span>;
};

const Quote = () => {
  return (
    <div className="grid md:grid-cols-2 justify-items-center md:mx-10 items-center m-auto text-white py-5 ">
      <div className="md:text-left text-center">
        <h2 className=" font-bold text-blue-500 text-xl">GET A QUOTE</h2>
        <h2 className="md:font-bold text-2xl md:text-6xl text-[red]">
          Request A Free Quote
        </h2>
        <div className=" text-black mt-10 py-5 grid md:grid-cols-3 grid-cols-2 md:gap-2 gap-6">
          <div className="">
            <h2 className="text-4xl font-bold text-blue-500">
              <Counter initialValue={223} step={1} duration={5} />
            </h2>
            <p className="text-xl ">Skilled Expert</p>
          </div>

          <div className="">
            <h2 className="text-4xl font-bold text-blue-500">
              <Counter initialValue={99} step={1} duration={5} />
            </h2>
            <p className="text-xl ">Finish Project</p>
          </div>

          <div className="">
            <h2 className="text-4xl font-bold text-blue-500">
              <Counter initialValue={1050} step={1} duration={10} />
            </h2>
            <p className="text-xl ">Happy Clients</p>
          </div>

          <div className="md:pt-4">
            <h2 className="text-4xl font-bold text-blue-500">
              <Counter initialValue={1050} step={1} duration={10} />
            </h2>
            <p className="text-xl ">Happy Clients</p>
          </div>
        </div>
      </div>
      <div className="md:w-[60%] w-[90%] mx-2 my-10 md:mx-0 py-10 px-5 md:px-10 m-auto bgs">
        <form action="" className="flex flex-col justify-center items-center">
          <input
            type="text"
            className="px-10 py-3 my-2  w-[100%] text-black"
            placeholder="First Name"
          />
          <br />
          <input
            type="text"
            className="px-10 py-3 my-2  w-[100%] text-black"
            placeholder="Last Name"
          />
          <br />
          <input
            type="text"
            className="px-10 py-3 my-2  w-[100%] text-black"
            placeholder="Email"
          />

          <button className="bg-blue-300 btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quote;
