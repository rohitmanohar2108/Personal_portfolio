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
      {/* Right Column */}
      <div
        className="w-full p-6 rounded-lg"
        style={{
          background: `
            linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(21, 32, 43, 0.9) 100%),
            url('https://www.transparenttextures.com/patterns/dark-mosaic.png')`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          color: 'white',
        }}
        
        
        
        
        
        
        
        
        
        
        
      >
        {/* Top-right Navigation */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 -my-4 justify-end relative z-20">
        <button
            onClick={() => handleSectionChange("About")}
            className={`px-4 py-2 rounded-full  bg-black border border-blue-900 hover:border-blue-500 text-base ${
              currentSection === "About" ? "text-blue-600" : "text-white"
            } hover:text-blue-500 font-dm-sans transition duration-300 ease-in-out transform hover:scale-105`}
          >
            About
          </button>

          <button
            onClick={() => handleSectionChange("Resume")}
            className={`px-4 py-2 rounded-full bg-black border border-zinc-800 hover:border-white text-base ${
              currentSection === "Resume" ? "text-rose-600" : "text-white"
            } hover:text-rose-600 font-dm-sans transition duration-300 ease-in-out transform hover:scale-105 `}
          >
            Resume
          </button>
          <button
            onClick={() => handleSectionChange("Portfolio")}
            className={`px-4 py-2 rounded-full bg-black border border-zinc-800 hover:border-white text-base ${
              currentSection === "Portfolio" ? "text-rose-600" : "text-white"
            } hover:text-rose-600 font-dm-sans transition duration-300 ease-in-out transform hover:scale-105`}
          >
            Portfolio
          </button>
          <button
            onClick={() => handleSectionChange("Blog")}
            className={`px-4 py-2 rounded-full bg-black border border-zinc-800 hover:border-white text-base ${
              currentSection === "Blog" ? "text-rose-600" : "text-white"
            } hover:text-rose-600 font-dm-sans transition duration-300 ease-in-out transform hover:scale-105`}
          >
            Blog
          </button>

          <button
            onClick={() => handleSectionChange("Contact")}
            className={`px-4 py-2 rounded-full bg-black border border-zinc-800 hover:border-white text-base ${
              currentSection === "Contact" ? "text-rose-600" : "text-white"
            } hover:text-rose-600 font-dm-sans transition duration-300 ease-in-out transform hover:scale-105`}
          >
            Contact
          </button>
        </div>

        {/* Right Column Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;