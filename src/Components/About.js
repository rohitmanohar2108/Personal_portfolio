import React, { useEffect } from "react";
import { gsap } from "gsap";
import { FaCode, FaPaintBrush, FaCogs, FaLaptopCode } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import CircularTimeline from "./ CircularTimeline";
import CertificationBox from "./CertificationBox";

const About = () => {
  useEffect(() => {
    // Animate the header and paragraphs
    gsap.fromTo(
      ".about-paragraph",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );

    // Animate the skill boxes with a delay and staggered effect
    gsap.fromTo(
      ".skill-box",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, stagger: 0.2 }
    );
  }, []);

  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-white text-3xl font-courier-prime about-header">
          About Me
        </h1>
        <FcAbout className="text-4xl ml-4 text-white" />
      </div>

      <hr className="w-32 border-2 border-yellow-600 mb-6 mt-3 rounded-full about-header" />

      <p className="text-white text-sm font-courier-prime">
        I am a Computer Science Student at NITK. I have a deep passion for
        coding and constantly strive to enhance my skills by learning new
        technologies. I love tackling challenging problems and finding
        innovative solutions. My areas of interest include web development,
        programming, and many more. I am always eager to collaborate on exciting
        projects and learn from others in the field.
      </p>

      <p className="text-white text-sm mt-4 font-courier-prime">
        When I am not coding, I enjoy exploring the latest tech trends and
        participating in hackathons and coding competitions. Let's connect and
        create something amazing together! Whether it's building a new app,
        diving into a complex algorithm, or simply exchanging knowledge, I am
        excited to engage with like-minded individuals and contribute to the
        tech community.
      </p>

      <h2 className="text-amber-400 text-4xl mt-4 font-extrabold font-courier-prime">
        What I'm Doing
      </h2>

      {/* Skill Boxes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Box 1: Web Design */}
        <div className="relative p-6 rounded-lg flex flex-col items-center text-center skill-box font-courier-prime group overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{ backgroundImage: "url('https://www.exovia.de/wp-content/uploads/2021/04/was-ist-webdesign-einfuehrung.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaPaintBrush className="text-amber-500 text-5xl mb-3" />
            <h3 className="text-white text-2xl mb-2">Web Design</h3>
            <p className="text-white text-sm">
              Creating visually appealing designs and user interfaces for
              websites. Expertise in UI/UX principles, responsive design, and
              modern design tools.
            </p>
          </div>
        </div>

        {/* Box 2: Web Development */}
        <div className="relative p-6 rounded-lg flex flex-col items-center text-center skill-box font-courier-prime group overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{ backgroundImage: "url('https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaLaptopCode className="text-amber-500 text-5xl mb-3" />
            <h3 className="text-white text-2xl mb-2">Web Development</h3>
            <p className="text-white text-sm">
              Building and maintaining websites using various technologies such as
              HTML, CSS, JavaScript, and frameworks like React. Focus on
              performance and scalability.
            </p>
          </div>
        </div>

        {/* Box 3: Software Development */}
        <div className="relative p-6 rounded-lg flex flex-col items-center text-center skill-box font-courier-prime group overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{ backgroundImage: "url('https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Software-Development-Business1--1-.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            <FaCode className="text-amber-500 text-5xl mb-3" />
            <h3 className="text-white text-2xl mb-2">Software Development</h3>
            <p className="text-white text-sm">
              Developing software solutions with a focus on algorithms, data
              structures, and code optimization. Proficient in languages like Java
              and C++.
            </p>
          </div>
        </div>

        {/* Box 4: Front-End */}
        <div className="relative p-6 rounded-lg flex flex-col items-center text-center skill-box font-courier-prime group overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{ backgroundImage: "url('https://media.licdn.com/dms/image/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/0/1716965604025?e=2147483647&v=beta&t=QQbiRZaZNurRKVw6bW1J0hG5x2f-7PMAowmfdFF3Dz4')" }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaCogs className="text-amber-500 text-5xl mb-3" />
            <h3 className="text-white text-2xl mb-2">Front-End</h3>
            <p className="text-white text-sm">
              Specializing in creating interactive and dynamic user interfaces.
              Experienced with frameworks such as React, ensuring a smooth and
              engaging user experience.
            </p>
          </div>
        </div>

        <p className="text-amber-400 text-4xl mt-4 font-extrabold font-courier-prime">
          My Skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <CircularTimeline
          percentage={90}
          title="Web Development"
          description="Experienced in building web applications using React and other modern web technologies."
        />
        <CircularTimeline
          percentage={50}
          title="Data Structures & Algorithms"
          description="Decent problem-solving using DSA, with experience in programming."
        />
        <CircularTimeline
          percentage={75}
          title="Graphic UI Design"
          description="Skilled in designing intuitive user interfaces and experiences with a focus on user-centric design."
        />
        <CircularTimeline
          percentage={85}
          title="Front-End Development"
          description="Specialized in creating responsive, dynamic, and interactive user interfaces using React and Tailwind-CSS."
        />
      </div>
      <h2 className="text-amber-400 text-4xl mt-8 font-extrabold font-courier-prime">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <CertificationBox
          logo="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          title="C++ Programming"
        
          link="https://example.com/link-to-certification-1"
        />
        <CertificationBox
          logo="https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1732147200&v=beta&t=3VXpZyiP86LrKXtnxgm1KNkPqkxm6lndd7_x4fkXYvE"
          title="Problem Solving Basic"
          
          link="https://example.com/link-to-certification-2"
        />
        <CertificationBox
          logo="https://media.licdn.com/dms/image/v2/C4D0BAQFd9H6cxFC3wQ/company-logo_100_100/company-logo_100_100/0/1630549313166?e=1732147200&v=beta&t=lbbuC7_bSl16Rew1PlMvMKwtWRkGij7zkzxZYUNPHAo"
          title="Namaste React"
         
          link="https://example.com/link-to-certification-3"
        />
        <CertificationBox
          logo="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          title="Web Development Bootcamp"
          
          link="https://example.com/link-to-certification-4"
        />
      </div>
    </div>
  );
};

export default About;
