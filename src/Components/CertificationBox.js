import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const CertificationBox = ({ logo, title, link }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;

    // Animation using GSAP with ScrollTrigger
    gsap.fromTo(
      box,
      { opacity: 0, y: 50 }, // Starting state
      {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 0,  
        scrollTrigger: {
          trigger: box,
          start: "top 80%", // Start when the top of the box reaches 80% of the viewport height
          end: "top 50%",   // End when the top of the box reaches 50% of the viewport height
          toggleActions: "play none none reverse", // Play the animation when entering, reverse when leaving
        },
      }
    );
  }, []);

  return (
    <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative p-1 rounded-lg overflow-hidden group"
    ref={boxRef}
  >
    {/* Outer box with a border and blur effect */}
    <div className="relative p-6 rounded-lg bg-zinc-500 bg-opacity-20 backdrop-blur-md border-2 border-zinc-800 hover:border-white">
      {/* Inner box with a different background */}
      <div className="bg-gray-400 bg-opacity-30 p-4 rounded-lg  transition-colors duration-300">
        <div className="relative w-full h-24 mb-4">
          <img
            src={logo}
            alt={title}
            className="absolute inset-0 w-full h-full object-contain object-center"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-dm-sans font-bold text-2xl mb-2">
            {title}
          </h3>
        </div>
      </div>
    </div>
  </a>
  );
};

export default CertificationBox;
