import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';
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
    <div className="min-h-screen bg-black flex p-6">
      {/* Left Column */}
      <div
        className="w-1/4 p-6 rounded-lg flex flex-col items-center"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/brown-fine-metal-textured-background_53876-103913.jpg?t=st=1725281891~exp=1725285491~hmac=e0244e30f6bc7e605bbbf1d4f5d23a187e384322eb249dc35eb4adb9a678aafc&w=1480)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Profile Photo */}
        <img
          src="https://media-sin6-3.cdn.whatsapp.net/v/t61.24694-24/453603651_520834290411384_6429731950094255849_n.jpg?ccb=11-4&oh=01_Q5AaIEGfLjFtBOFfDF1YPFoYWR-OdQzMAMTPXB2Sta2rfey_&oe=66E120FF&_nc_sid=5e03e0&_nc_cat=102" // Replace with your actual profile photo URL
          alt="Profile"
          className="w-60 h-60 object-cover mb-4 rounded-full border-double border-4 border-black"
        />
        
        <h2 className="text-white text-2xl mb-2 font-courier-prime">Rohit Manohar</h2>
        <div className="bg-black text-white text-sm px-4 py-2 rounded-lg mb-4 hover:text-amber-500 hover:bg-stone-700 font-courier-prime">
          Software Engineer
        </div>

        {/* Horizontal Line */}
        <hr className="w-44 border-gray-300 mb-4" />

        {/* Icons and Contact Details */}
        <div className="bg-black hover:bg-stone-800 p-4 rounded-lg w-full ">

          {/* Email */}
          <div className="mb-4">
            <p className="text-gray-400 mb-1 font-courier-prime">Email</p>
            <div className="flex items-center">
              <FaEnvelope className=" mr-2 text-amber-500" size={20} />
              <p className="text-white font-courier-prime text-sm">rohit@example.com</p>
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
              <p className="text-white font-courier-prime text-sm">Surathkal, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div
        className="w-3/4 p-6 ml-6 rounded-lg relative"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/brown-fine-metal-textured-background_53876-103913.jpg?t=st=1725281891~exp=1725285491~hmac=e0244e30f6bc7e605bbbf1d4f5d23a187e384322eb249dc35eb4adb9a678aafc&w=1480)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Top-right Navigation */}
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <div className="flex space-x-4">
            <button
              onClick={() => handleSectionChange('About')}
              className={`px-4 py-2 rounded-full  bg-black  hover:bg-stone-800 ${currentSection === 'About' ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-400 font-courier-prime`}
            >
              About
            </button>
            <button
              onClick={() => handleSectionChange('Resume')}
              className={`px-4 py-2 rounded-full  bg-black  hover:bg-stone-800 ${currentSection === 'Resume' ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-400 font-courier-prime`}
            >
              Resume
            </button>
            <button
              onClick={() => handleSectionChange('Portfolio')}
              className={`px-4 py-2 rounded-full  bg-black  hover:bg-stone-800  ${currentSection === 'Portfolio' ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-400 font-courier-prime`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleSectionChange('Blog')}
              className={`px-4 py-2 rounded-full  bg-black  hover:bg-stone-800 ${currentSection === 'Blog' ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-400 font-courier-prime`}
            >
              Blog
            </button>
            <button
              onClick={() => handleSectionChange('Contact')}
              className={`px-4 py-2 rounded-full bg-black  hover:bg-stone-800 ${currentSection === 'Contact' ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-400 font-courier-prime`}
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
