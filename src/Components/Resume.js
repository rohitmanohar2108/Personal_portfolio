import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="p-6 rounded-lg shadow-lg mt-14">
      {/* Header Section */}
      <div className="mb-6 -mt-20 -mx-6">
        <h1 className="text-white text-3xl font-nano">Resume</h1>
        <hr className="w-32 border-2 border-green-500 mb-6 mt-3 rounded-full" />
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h2 className="text-2xl text-white flex items-center mb-2">
          <FaGraduationCap className="text-green-500 text-3xl mr-2" /> Education
        </h2>
        <div className="bg-teal-950  p-6 rounded-lg shadow-md">
          <h3 className="text-xl text-gray-100 font-nano mb-2">National Institute of Technology Karnataka (NITK)</h3>
          <p className="text-gray-400">B.Tech in Computer Science and Engineering</p>
          <p className="text-gray-500">2021 - Present</p>
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-2xl text-white flex items-center mb-2">
          <FaBriefcase className="text-green-500 text-3xl mr-2" /> Experience
        </h2>
        <div className="bg-teal-950  p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-xl text-gray-100 font-nano mb-2">TEDx NITK Surathkal Media Team</h3>
          <p className="text-gray-400">Media Team Member</p>
          <p className="text-gray-500">July 2023 - Present</p>
          <p className="text-gray-300 mt-2">
            • Designing posters and promotional materials for TEDx events.<br />
            • Collaborating with the team to create engaging content.
          </p>
        </div>

        <div className="bg-teal-950  p-6 rounded-lg shadow-md">
          <h3 className="text-xl text-gray-100 font-nano mb-2">React Projects</h3>
          <p className="text-gray-400">React Developer</p>
          <p className="text-gray-500">June 2023 - Present</p>
          <p className="text-gray-300 mt-2">
            • Developed and maintained a portfolio website with React.<br />
            • Implemented animations and interactive features using GSAP and Framer Motion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
