import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
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
          src="https://as1.ftcdn.net/v2/jpg/05/90/59/88/1000_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg" // Replace with your actual profile photo URL
          alt="Profile"
          className="w-60 h-60 object-cover mb-4 rounded-full border-double border-4 border-black"
        />

        <h2 className="text-white text-2xl mb-2 font-courier-prime">
          Rohit Manohar
        </h2>
        <div className="bg-black/30 hover:bg-violet-900 text-white text-sm px-4 py-2 rounded-lg mb-4 hover:text-amber-500 font-courier-prime">
          Software Engineer
        </div>

        {/* Horizontal Line */}
        <hr className="w-44 border-gray-300 mb-4" />

        {/* Icons and Contact Details */}
        <div className="bg-purple-800/50 p-4 rounded-lg w-full ">
          {/* Email */}
          <div className="mb-4">
            <p className="text-gray-400 mb-1 font-courier-prime">Email</p>
            <div className="flex items-center">
              <FaEnvelope className=" mr-2 text-amber-500" size={20} />
              <p className="text-white font-courier-prime text-sm">
                rohit@example.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <p className="text-gray-400 mb-1 font-courier-prime">Phone</p>
            <div className="flex items-center">
              <FaPhone className="text-amber-500 mr-2" size={20} />
              <p className="text-white  text-sm">+123 456 7890</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-400 mb-1 font-courier-prime">Birthday</p>
            <div className="flex items-center">
              <FaBirthdayCake className="text-amber-500 mr-2" size={20} />
              <p className="text-white text-sm">21-08-2004</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-gray-400 mb-1 font-courier-prime">Location</p>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-amber-500 mr-2" size={20} />
              <p className="text-white font-courier-prime text-sm">
                Surathkal, India
              </p>
            </div>
          </div>
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
              className={`px-4 py-2 rounded-full  bg-purple-700/50 hover:bg-violet-900 text-sm ${
                currentSection === "About" ? "text-amber-500" : "text-gray-300"
              } hover:text-amber-400 font-courier-prime`}
            >
              About
            </button>
            <button
              onClick={() => handleSectionChange("Resume")}
              className={`px-4 py-2 rounded-full  bg-purple-700/50 hover:bg-violet-900 text-sm ${
                currentSection === "Resume" ? "text-amber-500" : "text-gray-300"
              } hover:text-amber-400 font-courier-prime`}
            >
              Education
            </button>
            <button
              onClick={() => handleSectionChange("Portfolio")}
              className={`px-4 py-2 rounded-full  bg-purple-700/50 hover:bg-violet-900 text-sm ${
                currentSection === "Portfolio"
                  ? "text-amber-500"
                  : "text-gray-300"
              } hover:text-amber-400 font-courier-prime`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleSectionChange("Blog")}
              className={`px-4 py-2 rounded-full  bg-purple-700/50 hover:bg-violet-900 text-sm ${
                currentSection === "Blog" ? "text-amber-500" : "text-gray-300"
              } hover:text-amber-400 font-courier-prime`}
            >
              Blog
            </button>
            <button
              onClick={() => handleSectionChange("Contact")}
              className={`px-4 py-2 rounded-full bg-purple-700/50 hover:bg-violet-90  hover:bg-violet-900 text-sm ${
                currentSection === "Contact"
                  ? "text-amber-500"
                  : "text-gray-300"
              } hover:text-amber-400 font-courier-prime`}
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
