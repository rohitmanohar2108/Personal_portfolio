import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex p-6">
      {/* Left Column */}
      <div className="w-1/4 bg-gray-800 p-6 rounded-lg flex flex-col items-center">
        {/* Profile Photo */}
        <img
          src="https://media-sin6-3.cdn.whatsapp.net/v/t61.24694-24/453603651_520834290411384_6429731950094255849_n.jpg?ccb=11-4&oh=01_Q5AaIEGfLjFtBOFfDF1YPFoYWR-OdQzMAMTPXB2Sta2rfey_&oe=66E120FF&_nc_sid=5e03e0&_nc_cat=102" // Replace with your actual profile photo URL
          alt="Profile"
          className="w-60 h-60 object-cover mb-4 rounded-lg"
        />
        
        <h2 className="text-white text-2xl mb-2">Rohit Manohar</h2>
        <div className="bg-gray-700 text-white px-4 py-2 rounded-lg mb-4">
          Software Engineer
        </div>

        {/* Horizontal Line */}
        <hr className="w-44  border-gray-600 mb-4" />

        {/* Icons and Contact Details */}
        <div className="bg-gray-700 p-4 rounded-lg w-full">
          {/* Email */}
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-white mr-2" size={20} />
            
            <p className="text-white">rohit@example.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-center mb-4">
            <FaPhone className="text-white mr-2" size={20} />
            <p className="text-white">+123 456 7890</p>
          </div>

          {/* Location */}
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-white mr-2" size={20} />
            <p className="text-white">Surathkal, India</p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-3/4 bg-gray-700 p-6 ml-6 rounded-lg">
        {/* Add your right side content here */}
        <h1 className="text-white text-3xl">Welcome to My Portfolio</h1>
        <p className="text-gray-300 mt-4">This is where you can add more content, such as a brief introduction or any other details you want to showcase.</p>
      </div>
    </div>
  );
};

export default Home;
