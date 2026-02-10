import React from "react";

const ContactUs = () => {
  return (
    <div className="mt-12 mx-auto px-6 max-w-6xl mb-20">
      {/* Section Title */}
      <h1 className="text-xl font-bold text-blue-900 uppercase">Contact Us</h1>
      <hr className="my-2 border-gray-300" />

      {/* Contact Form and Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-bold text-blue-900">GET IN TOUCH WITH US!</h3>
          <form className="mt-4 space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email" 
              placeholder="E-mail" 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              placeholder="Message" 
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition"
            >
              Submit Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold text-blue-900">
            YOU CAN ALSO GET IN TOUCH WITH US THROUGH THE FOLLOWING MEANS
          </h3>
          <p className="text-gray-700 mt-3">
            <strong>Phone:</strong> (+232) 346-122-95, (+1) 301-245-7892
          </p>
          <p className="text-gray-700 mt-2">
            <strong>E-mail:</strong> info@ccisimpact.org
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Instagram:</strong> CCIS_Sustainability
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
