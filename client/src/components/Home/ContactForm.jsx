import React from "react";
import contact from "../../assets/contact.png";

const ContactForm = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-bold text-blue-900 text-center">
        LEAVE US A MESSAGE
      </h2>

      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Illustration */}
        <div className="flex justify-center">
          <img
            src={contact}
            alt="Contact Illustration"
            className="max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right Side - Form */}
        <form className="bg-white shadow-md p-6 rounded-lg w-full">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition duration-300"
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
