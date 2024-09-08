import React, { useEffect } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { gsap } from "gsap";

const Resume = () => {
  useEffect(() => {
    // Animate the headers and sections
    gsap.fromTo(
      ".resume-section",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        stagger: 0.4,
      }
    );

    // Animate the timeline
    gsap.fromTo(
      ".timeline-box",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.5 }
    );
  }, []);

  return (
    <div className="p-6 rounded-lg shadow-lg mt-14">
      {/* Header Section */}
      <div className="mb-6 -mt-20 -mx-6 resume-header">
        <h1 className="text-white text-3xl font-dm-sans">Resume</h1>
      </div>

      {/* Education Section */}
      <div className="mb-8 resume-section w-1/2">
        <h2 className="text-3xl flex items-center mb-2 font-dm-sans text-white">
          <FaGraduationCap className="text-rose-600 text-3xl mr-2 " /> Education
        </h2>
        <div className="relative border border-transparent hover:border-white rounded-lg shadow-lg backdrop-blur-md p-6 bg-zinc-500 bg-opacity-20">
          <div className="bg-zinc-900 border border-zinc-800  p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-rose-600 font-dm-sans mb-2 ">
              National Institute of Technology Karnataka (NITK)
            </h3>
            <p className="text-white font-bold font-dm-sans">
              B.Tech in Computer Science and Engineering
            </p>
            <p className="text-gray-500 font-dm-sans font-medium">2022 - Present</p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="resume-section w-1/2">
        <h2 className="text-3xl text-white flex items-center mb-2 font-dm-sans">
          <FaBriefcase className="text-rose-600 text-3xl mr-2 font-dm-sans" />{" "}
          Experience
        </h2>
        <div className="relative border border-transparent hover:border-white rounded-lg shadow-lg backdrop-blur-md p-6 bg-zinc-500 bg-opacity-20">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-md ">
            <h3 className="text-3xl font-bold text-rose-600 mb-2 font-dm-sans ">
              TEDx NITK Surathkal Media Team
            </h3>
            <p className="text-white font-bold font-dm-sans">Media Team Member</p>
            <p className="text-gray-500 font-dm-sans font-medium">July 2022 - Present</p>
            <p className="text-gray-300 mt-2 text-sm font-dm-sans">
              • Designing posters and promotional materials for TEDx events.
              <br />• Collaborating with the team to create engaging content.
            </p>
          </div>
        </div>
        <div className="relative border border-transparent hover:border-white rounded-lg shadow-lg backdrop-blur-md p-6 bg-zinc-500 bg-opacity-20 mt-10 ">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-md ">
            <h3 className="text-3xl font-bold text-rose-600 mb-2 font-dm-sans">
              React Projects
            </h3>
            <p className="text-white font-bold font-dm-sans">React Developer</p>
            <p className="text-gray-500 font-dm-sans font-medium">June 2023 - Present</p>
            <p className="text-gray-300 mt-2 text-sm font-dm-sans">
              • Developed and maintained a portfolio website with React.
              <br />• Implemented animations and interactive features using GSAP
              and Framer Motion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
