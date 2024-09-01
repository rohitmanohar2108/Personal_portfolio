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
          className="w-52 h-52 object-cover mb-4 rounded-lg"
        />
        {/* Contact Details */}
        <div className="text-white text-center">
          <p className="mb-2 flex items-center justify-center">
            <FaEnvelope className="mr-2" /> 
            rohit@example.com
          </p>
          <p className="mb-2 flex items-center justify-center">
            <FaPhone className="mr-2" />
            +123 456 7890
          </p>
          <p className="mb-2 flex items-center justify-center">
            <FaMapMarkerAlt className="mr-2" />
            Surathkal, India
          </p>
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

