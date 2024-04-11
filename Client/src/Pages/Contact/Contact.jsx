import React from "react";
import Footer from "../../Components/Footer/Footer";
import Services from "../../Components/services/Services";
import Dsh from "../../Components/dsh/Dsh";
import Form from "../../Components/Form";

const Contact = () => {
  return (
    <div>
      <Dsh title={"Contact Us"} page="/ contact" />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 m-auto flex flex-col md:flex-row">
          <div className="lg:w-[60%] md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1246.9805626995912!2d6.3098438331992295!3d7.135646474740723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10467c08211cb261%3A0x1b041ffc63d1789b!2sEmiesomieke%20Petrol%20Station!5e0!3m2!1sen!2sng!4v1693010983149!5m2!1sen!2sng"
              width="700"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:w-1/2 md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 px-5 mt-8 md:mt-0 py-5">
            <h2 className="text-blue-900 text-lg mb-1 font-medium title-font py-5">
              We Appreciate Your Comment
            </h2>
            <form onSubmit={"sendEmail"}>
              <input type="hidden" name="contact_number" />
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div className="relative mb-4">
                <div data-netlify-recaptcha="true"></div>
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
