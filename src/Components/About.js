import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaCode, FaPaintBrush, FaCogs, FaLaptopCode } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import CircularTimeline from "./ CircularTimeline";
import CertificationBox from "./CertificationBox";
import HorizontalTechStack from "./HorizontalTechStack";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const lettersRef = useRef([]);
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
  useEffect(() => {
    // Ensure lettersRef is correctly populated
    lettersRef.current = lettersRef.current.slice(0, "Hi There!".length);

    // GSAP animation with ScrollTrigger
    gsap.fromTo(
      lettersRef.current,
      { opacity: 0, y: 50 }, // Start state (hidden, moved down)
      {
        opacity: 1,           // End state (fully visible)
        y: 0,                 // Reset to original position
        stagger: 0.1,         // Stagger animation for each letter
        ease: "power3.out",   // Smooth easing
        duration: 0.5,        // Duration per letter
        scrollTrigger: {
          trigger: lettersRef.current,  // Trigger when letters come into view
          start: "top 100%",            // Start animation when the top of the element hits 100% of the viewport
          end: "top 50%",               // End when the top of the element reaches 50% of the viewport
          scrub: false,                 // Animate only when scrolled into view
          toggleActions: "restart none none reset", // Restart on scroll back up
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-white text-3xl font-acme about-header">About Me</h1>
        <FcAbout className="text-4xl ml-4 text-white" />
      </div>

      <hr className="w-32 border-2 border-amber-400 mb-6 mt-3 rounded-full about-header" />

      <div className="behind-content">
      <div className="text-overlay">
        <div className="font-acme text-9xl mt-96 text-violet-600">
          <div>
            {"Hi There!".split("").map((char, index) => (
              <span
                key={index}
                ref={(el) => (lettersRef.current[index] = el)}
                className="inline-block" // inline-block prevents line breaks
              >
                {char === " " ? "\u00A0" : char} {/* Non-breaking space for spaces */}
              </span>
            ))}
          </div>
          <div className="font-bold text-3xl text-amber-400">
            I am into WebDev
          </div>
          <p className="text-white text-base font-roboto mt-7 bg-purple-800/50 p-4 rounded-lg shadow-md">
            I am a Computer Science student at NITK with a passion for coding
            and problem-solving. I enjoy learning new technologies and tackling
            challenging projects in web development and programming. Outside of
            coding, I explore tech trends and participate in competitions. I'm
            eager to collaborate with others and contribute to the tech
            community.
          </p>
        </div>
      </div>
    </div>

      <div class="mockup mockup-macbook loaded opened ml-36 mt-9">
        <div class="part top">
          <img
            src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-top.svg"
            alt=""
            class="top"
          />
          <img
            src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg"
            alt=""
            class="cover"
          />

          <img
            src="https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_5XySWqeTsJYccXgiU6pbTXmjkpih%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_69W1g56UQ3afqs1J92SU1Cogwcak"
            alt="Laptop Screen"
            class="screen-image"
          />
        </div>
        <div class="part bottom">
          <img
            src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg"
            alt=""
            class="cover"
          />
          <img
            src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-bottom.svg"
            alt=""
            class="bottom"
          />
        </div>
      </div>

      <h2 className="text-amber-400 text-4xl mt-9 font-extrabold font-acme">
        What I'm Doing
      </h2>

      {/* Skill Boxes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Box 1: Web Design */}
        <div className="relative p-6 rounded-lg flex flex-col items-center text-center skill-box font-acme group overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage:
                "url('https://www.exovia.de/wp-content/uploads/2021/04/was-ist-webdesign-einfuehrung.jpg')",
            }}
          ></div>
          <div className="absolute inset-0  border-zinc-800  bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaPaintBrush className="text-amber-500 text-5xl mb-3" />
            <h3 className="text-white text-3xl mb-2 font-acme">Web Design</h3>
            <p className="text-white text-sm font-roboto">
              Creating visually appealing designs and user interfaces for
              websites. Expertise in UI/UX principles, responsive design, and
              modern design tools.
            </p>
          </div>
        </div>

        {/* Box 2: Web Development */}
        <div className="relative p-6 rounded-lg flex flex-col items-center text-center skill-box font-acme group overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage:
                "url('https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaLaptopCode className="text-amber-500 text-5xl mb-3" />
            <h3 className="text-white text-3xl mb-2 font-acme">
              Web Development
            </h3>
            <p className="text-white text-sm font-roboto">
              Building and maintaining websites using various technologies such
              as HTML, CSS, JavaScript, and frameworks like React. Focus on
              performance and scalability.
            </p>
          </div>
        </div>

        {/* Box 3: Software Development */}
        <div className="relative p-6 rounded-lg flex flex-col items-center text-center skill-box font-acme group overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage:
                "url('https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Software-Development-Business1--1-.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            <FaCode className="text-amber-500 text-5xl mb-3" />
            <h3 className="text-white text-3xl mb-2 font-acme">
              Software Development
            </h3>
            <p className="text-white text-sm font-roboto">
              Developing software solutions with a focus on algorithms, data
              structures, and code optimization. Proficient in languages like
              Java and C++.
            </p>
          </div>
        </div>

        {/* Box 4: Front-End */}
        <div className="relative p-6 rounded-lg flex flex-col items-center text-center skill-box font-acme group overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage:
                "url('https://media.licdn.com/dms/image/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/0/1716965604025?e=2147483647&v=beta&t=QQbiRZaZNurRKVw6bW1J0hG5x2f-7PMAowmfdFF3Dz4')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaCogs className="text-amber-500 text-5xl mb-3" />
            <h3 className="text-white text-3xl mb-2 font-acme">Front-End</h3>
            <p className="text-white text-sm font-roboto">
              Specializing in creating interactive and dynamic user interfaces.
              Experienced with frameworks such as React, ensuring a smooth and
              engaging user experience.
            </p>
          </div>
        </div>

        <p className="text-amber-400 text-4xl mt-4 font-extrabold font-acme">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <HorizontalTechStack
          percentage={50}
          title="JavaScript"
          description="Proficient in modern JavaScript ES6+ features."
          iconClass="javascript-plain"
        />
        <HorizontalTechStack
          percentage={85}
          title="React"
          description="Experienced in building responsive web applications with React."
        />
        <HorizontalTechStack
          percentage={85}
          title="TailwindCSS"
          description="Experienced in building responsive web applications with TailwindCSS for modern, utility-first styling."
        />
        <HorizontalTechStack
          percentage={85}
          title="C"
          description="Proficient in using C."
        />
        <HorizontalTechStack
          percentage={50}
          title="C++"
          description="Experienced in using C++."
        />
      </div>
      <h2 className="text-amber-400 text-4xl mt-8 font-extrabold font-acme">
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