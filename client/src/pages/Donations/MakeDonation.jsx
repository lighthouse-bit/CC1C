import React from "react";
import donate1 from "../../assets/donate1.png";
import { Link } from "react-router-dom";

const MakeDonation = () => {
  return (
    <div className="mt-12 mx-auto px-6 max-w-6xl mb-20">
      {/* Section Title */}
      <h1 className="text-xl font-bold text-blue-900 uppercase">Make a Donation</h1>
      <hr className="my-2 border-gray-300" />

      {/* Support Heading */}
      <h3 className="text-lg font-bold text-blue-900 mt-4">SUPPORT  US TODAY!</h3>

      {/* Donation Image */}
      <div className="mt-4">
        <img
          src={donate1} // Change to actual image path
          alt="People making a donation"
          className="w-full rounded-lg"
        />
      </div>

      {/* Description Content */}
      <div className="mt-6 text-gray-700 space-y-4">
        <h4 className="text-lg font-bold text-900 mt-4">Donate Now and Empower Lasting Change</h4>
        <p>
        Help us amplify youth voices, equip young leaders, and transform communities. Your support will:

        - Provide education and resources to marginalized youth
        - Foster innovative climate solutions
        - Rebuild resilient communities
        </p>
        <h4 className="text-lg font-bold text-900 mt-4">Every gift counts. Donate now and join us in shaping a sustainable future!</h4>
      </div>

      {/* Donate Button */}
      <div className="mt-6">
        <Link to='/transfer-page'>
        <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition">
          Donate Now
        </button></Link>
      </div>
    </div>
  );
};

export default MakeDonation;
