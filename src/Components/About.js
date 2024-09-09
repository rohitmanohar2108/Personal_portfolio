import React, { useEffect, useRef, useState } from "react";
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
  const [isQuoteVisible, setQuoteVisible] = useState(false);
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
        opacity: 1, // End state (fully visible)
        y: 0, // Reset to original position
        stagger: 0.1, // Stagger animation for each letter
        ease: "power3.out", // Smooth easing
        duration: 0.5, // Duration per letter
        scrollTrigger: {
          trigger: lettersRef.current, // Trigger when letters come into view
          start: "top 100%", // Start animation when the top of the element hits 100% of the viewport
          end: "top 50%", // End when the top of the element reaches 50% of the viewport
          scrub: false, // Animate only when scrolled into view
          toggleActions: "restart none none reset", // Restart on scroll back up
        },
      }
    );
  }, []);

  useEffect(() => {
    let timeout1, timeout2, timeout3;

    const animateDashArr = (iter) => {
      if (iter === 1) {
        iter = 0;
      }

      // Set the stroke-dasharray values using JavaScript
      document.querySelector('.triangle-svg polygon').style.strokeDasharray = '50';

      // First timeout to change stroke-dasharray to '25'
      timeout1 = setTimeout(() => {
        document.querySelector('.triangle-svg polygon').style.strokeDasharray = '25';
      }, 1500);

      // Second timeout to change stroke-dasharray to '2'
      timeout2 = setTimeout(() => {
        document.querySelector('.triangle-svg polygon').style.strokeDasharray = '2';
        iter++;
        // Third timeout to recursively call the function
        timeout3 = setTimeout(() => {
          animateDashArr(1);
        }, 1500);
      }, 3000);
    };

    animateDashArr(0);

    // Cleanup timeouts when the component unmounts to avoid memory leaks
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  
  return (
    <div>
      <div className="flex items-center -my-4">
        <h1 className="text-white text-3xl font-dm-sans about-header ">
          About Me
        </h1>
        <FcAbout className="text-4xl ml-4 text-white" />
      </div>

      <div className="behind-content">
        <div className="text-overlay">
          <div className="font-dm-sans font-bold text-9xl mt-96 text-rose-600">
            <div>
              {"Hi There!".split("").map((char, index) => (
                <span
                  key={index}
                  ref={(el) => (lettersRef.current[index] = el)}
                  className="inline-block" // inline-block prevents line breaks
                >
                  {char === " " ? "\u00A0" : char}{" "}
                  {/* Non-breaking space for spaces */}
                </span>
              ))}
            </div>
            <div className="font-bold text-3xl text-amber-400 mb-3">
              I am into WebDev
            </div>
            <div className="relative p-7 border border-transparent hover:border-white rounded-lg shadow-lg backdrop-blur-md bg-zinc-500 bg-opacity-20 mr-4">
              <p className="text-white text-base font-roboto mt bg-zinc-900 p-6 rounded-lg shadow-md">
                I am a <span className="text-rose-600">Computer Science</span>{" "}
                student at <span className="text-rose-600">NITK</span> with a
                passion for coding and problem-solving. I enjoy learning new
                technologies and tackling challenging projects in web
                development and programming. Outside of coding, I explore tech
                trends and participate in competitions.
                <span className="text-rose-600">
                  {" "}
                  I'm eager to collaborate with others{" "}
                </span>{" "}
                and contribute to the tech community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mockup mockup-macbook loaded opened ml-80 mt-9 relative">
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
            src="https://media-sin6-2.cdn.whatsapp.net/v/t61.24694-24/458500118_798226432506822_8954841927037136570_n.jpg?ccb=11-4&oh=01_Q5AaIJSeLDitIHX5lt6NdcUpLySra9tMwov2c0-w5TWcD7ZU&oe=66EB033C&_nc_sid=5e03e0&_nc_cat=106"
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

        <div class="social-links justify-end">
          <a
            href="https://github.com/rohitmanohar2108"
            target="_blank"
            aria-label="GitHub"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-manohar-80b949207/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/rvm_igg/"
            target="_blank"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="mt-24 mb-12 text-center">
        <h2 className="text-white text-5xl font-extrabold font-dm-sans">
          What i'm doing
        </h2>
        <hr className="w-32 mx-auto border-2 border-white mt-3 rounded-full" />
      </div>
      {/* Skill Boxes Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 h-full w-full font-dm-sans ">
        {/* Box 1: Web Design */}
        <div className="relative p-6 rounded-lg flex flex-col items-center text-center skill-box group overflow-hidden border border-transparent hover:border-white transition-colors duration-300">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage:
                "url('https://www.exovia.de/wp-content/uploads/2021/04/was-ist-webdesign-einfuehrung.jpg')",
            }}
          ></div>
          <div className="absolute inset-0    bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaPaintBrush className="text-rose-600 text-5xl mb-3" />
            <h3 className="text-white text-4xl mb-2">Web Design</h3>
            <p className="text-white font-bold">
              Creating visually appealing designs and user interfaces for
              websites. Expertise in UI/UX principles, responsive design, and
              modern design tools.
            </p>
          </div>
        </div>

        {/* Box 2: Web Development */}
        <div className="relative p-6 rounded-lg flex flex-col items-center text-center skill-box group overflow-hidden border border-transparent hover:border-white transition-colors duration-300">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage:
                "url('https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaLaptopCode className="text-rose-600 text-5xl mb-3" />
            <h3 className="text-white text-4xl mb-2">Web Development</h3>
            <p className="text-white  font-bold">
              Building and maintaining websites using various technologies such
              as HTML, CSS, JavaScript, and frameworks like React. Focus on
              performance and scalability.
            </p>
          </div>
        </div>

        {/* Box 3: Software Development */}
        <div className="relative p-6 rounded-lg flex flex-col items-center text-center skill-box group overflow-hidden border border-transparent hover:border-white transition-colors duration-300">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage:
                "url('https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Software-Development-Business1--1-.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            <FaCode className="text-rose-600 text-5xl mb-3" />
            <h3 className="text-white text-4xl mb-2 ">Software Development</h3>
            <p className="text-white font-bold">
              Developing software solutions with a focus on algorithms, data
              structures, and code optimization. Proficient in languages like
              Java and C++.
            </p>
          </div>
        </div>

        {/* Box 4: Front-End */}
        <div className="relative p-6 rounded-lg flex flex-col items-center text-center skill-box group overflow-hidden border border-transparent hover:border-white transition-colors duration-300">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage:
                "url('https://media.licdn.com/dms/image/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/0/1716965604025?e=2147483647&v=beta&t=QQbiRZaZNurRKVw6bW1J0hG5x2f-7PMAowmfdFF3Dz4')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaCogs className="text-rose-600 text-5xl mb-3" />
            <h3 className="text-white text-4xl mb-2 ">Front-End</h3>
            <p className="text-white font-bold">
              Specializing in creating interactive and dynamic user interfaces.
              Experienced with frameworks such as React, ensuring a smooth and
              engaging user experience.
            </p>
          </div>
        </div>
      </div>

      <div className="triangle-svg">
        <svg width="450px" height="450px" viewBox="-4 -1 38 34">
          <polygon fill="transparent" stroke="#56c5f9" strokeWidth="0.7" points="15, 0, 30, 30, 0, 30"></polygon>
        </svg>
      </div>

      <div className={`quote-container ${isQuoteVisible ? 'fade-in' : ''}`}>
        <blockquote>
          "The only limit to our realization of tomorrow is our doubts of today."
          <footer>— Franklin D. Roosevelt</footer>
        </blockquote>
      </div>


      <div className="mt-24 mb-12 text-center">
        <h2 className="text-white text-5xl font-extrabold ">My Skills</h2>
        <hr className="w-32 mx-auto border-2 border-white mt-3 rounded-full" />
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 content-center">
        <HorizontalTechStack
          percentage={50}
          title="JavaScript"
          description="Proficient in modern JavaScript ES6+ features."
          iconClass="javascript-plain"
        />
        <HorizontalTechStack
          percentage={85}
          title="React"
          description="Experienced in building responsive web."
        />
        <HorizontalTechStack
          percentage={85}
          title="TailwindCSS"
          description="Experienced in building responsive web."
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
      <div className="mt-24 mb-12 text-center">
        <h2 className="text-white text-5xl font-extrabold font-dm-sans">
          Certifications
        </h2>
        <hr className="w-32 mx-auto border-2 border-white mt-3 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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
          title="Namaste React Javascript"
          link="https://example.com/link-to-certification-3"
        />
        <CertificationBox
          logo="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          title="Web Development"
          link="https://example.com/link-to-certification-4"
        />
      </div>
    </div>
  );
};

export default About;
