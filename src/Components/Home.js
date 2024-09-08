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
            radial-gradient(circle at center, rgba(255, 105, 180, 0.5) 10%, rgba(18, 18, 18, 1) 30%),
            radial-gradient(circle at center, rgba(255, 105, 180, 0.5) 10%, rgba(18, 18, 18, 1) 30%)`,
          backgroundSize: '100% 0%, 100% 90%',
        }}
      >
        {/* Top-right Navigation */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <button
            onClick={() => handleSectionChange("About")}
            className={`px-4 py-2 rounded-full bg-purple-700/50 hover:bg-violet-900 text-base ${
              currentSection === "About" ? "text-amber-400" : "text-white"
            } hover:text-amber-400 font-roboto transition duration-300 ease-in-out transform hover:scale-105`}
          >
            About
          </button>
          <button
            onClick={() => handleSectionChange("Resume")}
            className={`px-4 py-2 rounded-full bg-purple-700/50 hover:bg-violet-900 text-base ${
              currentSection === "Resume" ? "text-amber-400" : "text-white"
            } hover:text-amber-400 font-roboto transition duration-300 ease-in-out transform hover:scale-105`}
          >
            Education
          </button>
          <button
            onClick={() => handleSectionChange("Portfolio")}
            className={`px-4 py-2 rounded-full bg-purple-700/50 hover:bg-violet-900 text-base ${
              currentSection === "Portfolio" ? "text-amber-400" : "text-white"
            } hover:text-amber-400 font-roboto transition duration-300 ease-in-out transform hover:scale-105`}
          >
            Portfolio
          </button>
          <button
            onClick={() => handleSectionChange("Blog")}
            className={`px-4 py-2 rounded-full bg-purple-700/50 hover:bg-violet-900 text-base ${
              currentSection === "Blog" ? "text-amber-400" : "text-white"
            } hover:text-amber-400 font-roboto transition duration-300 ease-in-out transform hover:scale-105`}
          >
            Blog
          </button>
          <button
            onClick={() => handleSectionChange("Contact")}
            className={`px-4 py-2 rounded-full bg-purple-700/50 hover:bg-violet-900 text-base ${
              currentSection === "Contact" ? "text-amber-400" : "text-white"
            } hover:text-amber-400 font-roboto transition duration-300 ease-in-out transform hover:scale-105`}
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
