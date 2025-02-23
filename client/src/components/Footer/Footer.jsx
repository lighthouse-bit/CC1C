import React from "react";
import rounded from "../../assets/rounded.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 ">
      {/* Upper Footer */}
      <div className=" container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
        {/* Company Section */}
        <div>
          <h2 className="font-semibold text-lg">Company</h2>
          <ul className="mt-3 space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Work</li>
            <li>Blog</li>
            <li>Gallery</li>
            <li>Contact Us</li>
            <li>Make A Donation</li>
          </ul>
        </div>
        
        {/* Our Work Section */}
        <div>
          <h2 className="font-semibold text-lg">Our Work</h2>
          <ul className="mt-3 space-y-2">
            <li>Programs</li>
            <li>Events</li>
            <li>Impact</li>
            <li>Success Stories</li>
            <li>Gallery</li>
          </ul>
        </div>
        
        {/* About Us Section */}
        <div>
          <h2 className="font-semibold text-lg">About Us</h2>
          <ul className="mt-3 space-y-2">
            <li>Our Story</li>
            <li>Vision & Mission</li>
            <li>Message From Founder</li>
            <li>Our Team</li>
            <li>Objectives</li>
            <li>Partnerships & Sponsors</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
            <img src={rounded} alt="" />
          <p>Phone: (+232) 346-122-95</p>
          <p>(+1) 301-245-7892</p>
          <p>Email: info@ccisimpact.org</p>
          <p>Instagram: CCIS_Sustainability</p>
        </div>
      </div>
      
      {/* Lower Footer */}
      <div className="bg-[#02193A] mt-6 border-t border-blue-500 items-center py-4 text-center h-[80px] text-sm md:flex md:justify-between md:px-10">
        <p>Copyright 2025 CCIS All Rights Reserved</p>
        <div className="flex justify-center space-x-6">
          <p>Privacy policy</p>
          <p>Terms of Service and Agreement</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
