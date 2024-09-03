import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => {
  // State to track the current section, defaulting to 'About'
  const [currentSection, setCurrentSection] = useState("About");

  // Function to handle section change
  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const renderContent = () => {
    switch (currentSection) {
      case "About":
        return <About />;
      case "Resume":
        return <Resume />;
      case "Portfolio":
        return <Portfolio />;
      case "Blog":
        return <Blog />;
      case "Contact":
        return <Contact />;
      default:
        return <p className="text-gray-300">Welcome to My Portfolio</p>;
    }
  };

  return (
    <div className="min-h-screen bg-black flex p-6">
      
      {/* Left Column */}
      <div
        className="w-1/4 p-6 rounded-lg flex flex-col items-center"
        style={{
          background:
            "linear-gradient(45deg, rgba(106, 13, 173, 0.5), rgba(0, 0, 0, 0.5)), repeating-linear-gradient(135deg, rgba(106, 13, 173, 0.1) 0%, rgba(106, 13, 173, 0.1) 10%, rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.1) 20%)",
        }}
      >
        {/* Profile Photo */}
        <img
          src="https://media-sin6-3.cdn.whatsapp.net/v/t61.24694-24/453603651_520834290411384_6429731950094255849_n.jpg?ccb=11-4&oh=01_Q5AaILKhYIrPaCdMCVYP6V67v8Jv_qHL0yDjTv0_d5FyyYvu&oe=66E4347F&_nc_sid=5e03e0&_nc_cat=102" // Replace with your actual profile photo URL
          alt="Profile"
          className="w-60 h-60 object-cover mb-4 rounded-full border-double border-4 border-purple-700"
        />

        <h2 className="text-white text-3xl mb-2 font-acme">Rohit Manohar</h2>
        <div className="bg-black/30 hover:bg-violet-900 text-white text-sm px-4 py-2 rounded-lg mb-4 hover:text-amber-400 font-roboto">
          Software Engineer
        </div>
        <div className="bg-purple-700/50 hover:bg-violet-900 text-white cursor-pointer text-sm px-4 py-2 rounded-lg mb-4 hover:text-amber-400 font-acme shadow-md shadow-purple-400 transition-transform transform hover:scale-105">
          <a href="#" target="_blank" rel="noopener noreferrer" className="">
            View Resume
          </a>
        </div>

        {/* Horizontal Line */}
        <hr className="w-44 border-gray-300 mb-4" />

        {/* Icons and Contact Details */}
        <div className="bg-purple-800/50 p-4 rounded-lg w-full ">
          {/* Email */}
          <div className="mb-4">
            <p className="text-gray-400 mb-1 font-acme">Email</p>
            <div className="flex items-center">
              <FaEnvelope className=" mr-2 text-amber-500" size={20} />
              <p className="text-white font-roboto text-sm">
                rohit@example.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <p className="text-gray-400 mb-1 font-acme">Phone</p>
            <div className="flex items-center">
              <FaPhone className="text-amber-500 mr-2" size={20} />
              <p className="text-white  text-sm">+123 456 7890</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-400 mb-1 font-acme">Birthday</p>
            <div className="flex items-center">
              <FaBirthdayCake className="text-amber-500 mr-2" size={20} />
              <p className="text-white text-sm">21-08-2004</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-gray-400 mb-1 font-acme">Location</p>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-amber-500 mr-2" size={20} />
              <p className="text-white font-roboto text-sm">Surathkal, India</p>
            </div>
          </div>
          
        </div>
        <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/rohit-manohar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/rohit_manohar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com/rohit_manohar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>
      </div>

      {/* Right Column */}
      <div
        className="w-3/4 p-6 ml-6 rounded-lg relative"
        style={{
          background:
            "linear-gradient(45deg, rgba(106, 13, 173, 0.5), rgba(0, 0, 0, 0.5)), repeating-linear-gradient(135deg, rgba(106, 13, 173, 0.1) 0%, rgba(106, 13, 173, 0.1) 10%, rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.1) 20%)",
        }}
      >
        {/* Top-right Navigation */}
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <div className="flex space-x-4">
            <button
              onClick={() => handleSectionChange("About")}
              className={`px-4 py-2 rounded-full  bg-purple-700/50 hover:bg-violet-900 text-base ${
                currentSection === "About" ? "text-amber-400" : "text-gray-300"
              } hover:text-amber-400 font-roboto`}
            >
              About
            </button>
            <button
              onClick={() => handleSectionChange("Resume")}
              className={`px-4 py-2 rounded-full  bg-purple-700/50 hover:bg-violet-900 text-base ${
                currentSection === "Resume" ? "text-amber-400" : "text-gray-300"
              } hover:text-amber-400 font-roboto`}
            >
              Education
            </button>
            <button
              onClick={() => handleSectionChange("Portfolio")}
              className={`px-4 py-2 rounded-full  bg-purple-700/50 hover:bg-violet-900 text-base ${
                currentSection === "Portfolio"
                  ? "text-amber-400"
                  : "text-gray-300"
              } hover:text-amber-400 font-roboto`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleSectionChange("Blog")}
              className={`px-4 py-2 rounded-full  bg-purple-700/50 hover:bg-violet-900 text-base ${
                currentSection === "Blog" ? "text-amber-400" : "text-gray-300"
              } hover:text-amber-400 font-roboto`}
            >
              Blog
            </button>
            <button
              onClick={() => handleSectionChange("Contact")}
              className={`px-4 py-2 rounded-full bg-purple-700/50 hover:bg-violet-90  hover:bg-violet-900 text-base ${
                currentSection === "Contact"
                  ? "text-amber-400"
                  : "text-gray-300"
              } hover:text-amber-400 font-roboto`}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Right Column Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;