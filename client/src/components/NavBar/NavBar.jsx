import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const moreRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutDropdown(false);
      }
      if (programsRef.current && !programsRef.current.contains(event.target)) {
        setProgramsDropdown(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#F7F7F7] shadow-lg p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-[60px]" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Nav Links + Mobile Donate Button */}
        <ul
          className={`absolute md:relative ml-auto mr-4 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center md:space-x-6 transition-all duration-300 z-50 shadow-lg md:shadow-none ${
            isMenuOpen ? "block p-4 top-16" : "hidden md:flex"
          }`}
        >
          <li>
            <Link to="/" className="block py-2 md:py-0">Home</Link>
          </li>

          {/* About Us Dropdown */}
          <li className="relative" ref={aboutRef}>
            <button
              onClick={() => setAboutDropdown(!aboutDropdown)}
              className="hover:text-blue-500 focus:outline-none flex items-center gap-1 py-2 md:py-0"
            >
              <Link to="/about-us">About Us </Link>
              <FiChevronDown
                className={`transition-transform duration-300 ${
                  aboutDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {aboutDropdown && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md text-gray-700 z-50">
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="about-us/vision-mission">Vision & Mission</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="about-us/founder-message">Message from Founder</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="about-us/our-team">Our Team</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="about-us/objectives">Objectives</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="">Partnership & Sponsors</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Programs Dropdown */}
          <li className="relative" ref={programsRef}>
            <button
              onClick={() => setProgramsDropdown(!programsDropdown)}
              className="hover:text-blue-500 focus:outline-none flex items-center gap-1 py-2 md:py-0"
            >
              <Link to="/programs">Programs </Link>
              <FiChevronDown
                className={`transition-transform duration-300 ${
                  programsDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {programsDropdown && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md text-gray-700 z-50">
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="programs/women-in-climate-resilience">Women in Climate Resilience</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="programs/youth-leadership">Youth Leadership in Climate Action</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="programs/local-conference">Local Conference of Youth(LCOY)</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="programs/youth-consultation">Youth Virtual Consultations</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="programs/affoerestation-projects">Afforestation projects in Zambia</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="programs/hygiene-programs">Hygiene management Program</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="programs/leadership-program">Leadership Program in York Village</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/blog" className="block py-2 md:py-0">Blog</Link>
          </li>

          {/* More Dropdown */}
          <li className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreDropdown(!moreDropdown)}
              className="hover:text-blue-500 focus:outline-none flex items-center gap-1 py-2 md:py-0"
            >
              More
              <FiChevronDown
                className={`transition-transform duration-300 ${
                  moreDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {moreDropdown && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md text-gray-700 z-50">
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="more/contact-us">Contact Us</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="/donate">Make a Donation</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Donate Now Button - Now Visible on Mobile */}
          <li className="block md:hidden mt-4">
            <button
              className="w-full bg-[#052F6B] text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => window.location.href = "/donate"}
            >
              Donate Now
            </button>
          </li>
        </ul>

        {/* Donate Now Button - Desktop */}
        
        <div className="hidden md:block"><Link to="/donate">
          <button
            className="bg-[#052F6B] text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Donate Now
          </button></Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
