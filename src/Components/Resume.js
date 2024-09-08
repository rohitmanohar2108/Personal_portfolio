// Resume.js

import React from 'react';
import './Resume'; // Ensure you import the CSS file

const Resume = () => {
  return (
    <div className="resume-container">
      <header>
        <h1>Resume</h1>
      </header>

      <section className="bg-white timeline ">
        <h2>Education</h2>
        <ul>
          <li>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Bachelor's Degree in Computer Science</h3>
                <p>National Institute of Technology Karnataka (NITK)</p>
                <p>Expected Graduation: 2025</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>High School Diploma</h3>
                <p>ABC High School</p>
                <p>Graduated: 2021</p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section className="timeline">
        <h2>Experience</h2>
        <ul>
          <li>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Software Intern</h3>
                <p>XYZ Tech Solutions</p>
                <p>June 2023 - August 2023</p>
                <p>Worked on developing and testing new features for the company's main product.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Web Developer</h3>
                <p>Freelance</p>
                <p>January 2022 - Present</p>
                <p>Developing and maintaining websites for various clients, focusing on responsive design and user experience.</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
