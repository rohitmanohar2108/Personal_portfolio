import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const HorizontalTechStack = ({ percentage, title, description }) => {
  const barRef = useRef(null);
  const containerRef = useRef(null); // Reference to the container div
  const titleRef = useRef(null); // Reference to the title element
  const descriptionRef = useRef(null); // Reference to the description element
  const [inView, setInView] = useState(false); // State to track if the component is in view

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      // Animate the progress bar width
      gsap.fromTo(
        barRef.current,
        { width: "0%" },
        {
          width: `${percentage}%`,
          duration: 2,
          ease: "power2.out",
        }
      );

      // Animate the title
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -20,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });

      // Animate the description
      gsap.from(descriptionRef.current, {
        opacity: 0,
        x: 20,
        duration: 1,
        delay: 0.7,
        ease: "power2.out",
      });
    }
  }, [inView, percentage]);

  return (
    <div className="mb-3" ref={containerRef}>
      <h3 className="text-white text-3xl font-acme" ref={titleRef}>
        {title}
      </h3>
      <div className="w-72 bg-gray-700 h-2 mt-4 rounded-lg overflow-hidden">
        <div
          className="bg-amber-400 h-2 rounded-lg"
          ref={barRef}
        ></div>
      </div>
      <p className="text-gray-400 text-sm mt-2 font-roboto" ref={descriptionRef}>
        {description}
      </p>
    </div>
  );
};

export default HorizontalTechStack;
