import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

const Home = () => {
  // State to track the current section, defaulting to 'About'
  const [currentSection, setCurrentSection] = useState('About');

  // Function to handle section change
  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Blog':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      default:
        return <p className="text-gray-300">Welcome to My Portfolio</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex p-6">
      {/* Left Column */}
      <div className="w-1/4 bg-gray-700 p-6 rounded-lg flex flex-col items-center">
        {/* Profile Photo */}
        <img
          src="https://media-sin6-3.cdn.whatsapp.net/v/t61.24694-24/453603651_520834290411384_6429731950094255849_n.jpg?ccb=11-4&oh=01_Q5AaIEGfLjFtBOFfDF1YPFoYWR-OdQzMAMTPXB2Sta2rfey_&oe=66E120FF&_nc_sid=5e03e0&_nc_cat=102" // Replace with your actual profile photo URL
          alt="Profile"
          className="w-60 h-60 object-cover mb-4 rounded-lg"
        />
        
        <h2 className="text-white text-2xl mb-2">Rohit Manohar</h2>
        <div className="bg-gray-800 text-white px-4 py-2 rounded-lg mb-4 hover:text-green-500 hover:bg-teal-950">
          Software Engineer
        </div>

        {/* Horizontal Line */}
        <hr className="w-44 border-gray-300 mb-4" />

        {/* Icons and Contact Details */}
        <div className="bg-gray-800 p-4 rounded-lg w-full">
          {/* Email */}
          <div className="mb-4">
            <p className="text-gray-400 mb-1">Email</p>
            <div className="flex items-center">
              <FaEnvelope className="text-white mr-2" size={20} />
              <p className="text-white">rohit@example.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <p className="text-gray-400 mb-1">Phone</p>
            <div className="flex items-center">
              <FaPhone className="text-white mr-2" size={20} />
              <p className="text-white">+123 456 7890</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-gray-400 mb-1">Location</p>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-white mr-2" size={20} />
              <p className="text-white">Surathkal, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-3/4 bg-gray-700 p-6 ml-6 rounded-lg relative">
        {/* Top-right Navigation */}
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <div className="flex space-x-4">
            <button
              onClick={() => handleSectionChange('About')}
              className={`px-4 py-2 rounded-full  bg-gray-800  hover:bg-teal-950 ${currentSection === 'About' ? 'text-green-500' : 'text-gray-300'} hover:text-green-500`}
            >
              About
            </button>
            <button
              onClick={() => handleSectionChange('Resume')}
              className={`px-4 py-2 rounded-full  bg-gray-800 hover:bg-teal-950 ${currentSection === 'Resume' ? 'text-green-500' : 'text-gray-300'} hover:text-green-500`}
            >
              Resume
            </button>
            <button
              onClick={() => handleSectionChange('Portfolio')}
              className={`px-4 py-2 rounded-full  bg-gray-800 hover:bg-teal-950  ${currentSection === 'Portfolio' ? 'text-green-500' : 'text-gray-300'} hover:text-green-500`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleSectionChange('Blog')}
              className={`px-4 py-2 rounded-full  bg-gray-800 hover:bg-teal-950 ${currentSection === 'Blog' ? 'text-green-500' : 'text-gray-300'} hover:text-green-500`}
            >
              Blog
            </button>
            <button
              onClick={() => handleSectionChange('Contact')}
              className={`px-4 py-2 rounded-full bg-gray-800 hover:bg-teal-950 ${currentSection === 'Contact' ? 'text-green-500' : 'text-gray-300'} hover:text-green-500`}
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
