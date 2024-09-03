import React, { useEffect } from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { gsap } from 'gsap';

const Resume = () => {
  useEffect(() => {
    // Animate the headers
    

    // Animate the education and experience sections
    gsap.fromTo(
      ".resume-section",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out", stagger: 0.4 }
    );
  }, []);

  return (
    <div className="p-6 rounded-lg shadow-lg mt-14">
      {/* Header Section */}
      <div className="mb-6 -mt-20 -mx-6 resume-header">
        <h1 className="text-white text-3xl font-acme">Resume</h1>
        <hr className="w-32 border-2 border-amber-400 mb-6 mt-3 rounded-full" />
      </div>

      {/* Education Section */}
      <div className="mb-8 resume-section">
        <h2 className="text-3xl  flex items-center mb-2 font-acme text-amber-400">
          <FaGraduationCap className="text-amber-500 text-3xl mr-2" /> Education
        </h2>
        <div className="bg-purple-800/50 p-6 rounded-lg shadow-md  ">
          <h3 className="text-xl text-gray-100 font-acme mb-2">National Institute of Technology Karnataka (NITK)</h3>
          <p className="text-gray-400 ">B.Tech in Computer Science and Engineering</p>
          <p className="text-gray-500">2021 - Present</p>
        </div>
      </div> 

      {/* Experience Section */}
      <div className="resume-section">
        <h2 className="text-3xl text-amber-400 flex items-center mb-2 font-acme">
          <FaBriefcase className="text-amber-500 text-3xl mr-2" /> Experience
        </h2>
        <div className="bg-purple-800/50 p-6 rounded-lg shadow-md mb-4  ">
          <h3 className="text-xl text-gray-100 mb-2 font-acme">TEDx NITK Surathkal Media Team</h3>
          <p className="text-gray-400">Media Team Member</p>
          <p className="text-gray-500">July 2023 - Present</p>
          <p className="text-gray-300 mt-2 text-sm">
            • Designing posters and promotional materials for TEDx events.<br />
            • Collaborating with the team to create engaging content.
          </p>
        </div>

        <div className="bg-purple-800/50 p-6 rounded-lg shadow-md  ">
          <h3 className="text-xl text-gray-100 mb-2 font-acme">React Projects</h3>
          <p className="text-gray-400">React Developer</p>
          <p className="text-gray-500">June 2023 - Present</p>
          <p className="text-gray-300 mt-2 text-sm ">
            • Developed and maintained a portfolio website with React.<br />
            • Implemented animations and interactive features using GSAP and Framer Motion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
