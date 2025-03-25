import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram  } from "react-icons/fa"; // Import icons
import rounded from "../../assets/rounded.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16">
      {/* Upper Footer */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
        {/* Company Section */}
        <div>
          <h2 className="font-semibold text-lg">Company</h2>
          <ul className="mt-3 space-y-2">
            <Link to="/"><li>Home</li></Link>
            <Link to="/about-us"><li>About Us</li></Link>
            <Link to="/"><li>Our Work</li></Link>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/gallery"><li>Gallery</li></Link>
            <Link to="/more/contact-us"><li>Contact Us</li></Link>
            <Link to="/donate"><li>Make A Donation</li></Link>
          </ul>
        </div>
        
        {/* Our Work Section */}
        <div>
          <h2 className="font-semibold text-lg">Our Work</h2>
          <ul className="mt-3 space-y-2">
            <Link to="/programs"><li>Programs</li></Link>
            <Link to="/"><li>Events</li></Link>
            <Link to="/"><li>Impact</li></Link>
            <Link to="/"><li>Success Stories</li></Link>
            <Link to="/gallery"><li>Gallery</li></Link>
          </ul>
        </div>
        
        {/* About Us Section */}
        <div>
          <h2 className="font-semibold text-lg">About Us</h2>
          <ul className="mt-3 space-y-2">
            <Link to="/"><li>Our Story</li></Link>
            <Link to="/about-us/vision-mission"><li>Vision & Mission</li></Link>
            <Link to="/about-us/founder-message"><li>Message From Founder</li></Link>
            <Link to="/about-us/our-team"><li>Our Team</li></Link>
            <Link to="/about-us/objectives"><li>Objectives</li></Link>
            <Link to="/about-us/partners-sponsors"><li>Partnerships & Sponsors</li></Link>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <img src={rounded} alt="" className="w-24 md:w-32 mx-auto md:mx-0 mb-4" />
          <p>Phone: (+232) 73418867</p>
          <p>(+232) 31550385</p>
          <p>Email: info@ccisimpact.org</p>
          <p>Address: 33 Macdonald street, Freetown, Sierra Leone.</p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://www.linkedin.com/company/the-center-for-community-impact-and-sustainibility/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/share/15qdhP7jmF/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/ccis_sustainability?igsh=MXI4Z3FnZjVrc3k4eQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      
      {/* Lower Footer */}
      <div className="bg-[#02193A] mt-6 border-t border-blue-500 py-4 text-center text-sm flex flex-col md:flex-row items-center md:justify-between md:px-10 h-auto md:h-[80px]">
        <p>Copyright 2025 CCIS All Rights Reserved</p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-2 md:gap-6 mt-2 md:mt-0">
          <p>Privacy policy</p>
          <p>Terms of Service and Agreement</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
