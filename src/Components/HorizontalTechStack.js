import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const HorizontalTechStack = ({ percentage = 50, title = "Tech Stack", description = "", barColor = "bg-amber-400" }) => {
  const barRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [inView, setInView] = useState(false);

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
      gsap.fromTo(
        barRef.current,
        { width: "0%" },
        {
          width: `${percentage}%`,
          duration: 2,
          ease: "power2.out",
        }
      );

      gsap.from(titleRef.current, {
        opacity: 0,
        x: -20,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });

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
    <div className="mb-3 bg-black/30 p-4 rounded-lg shadow-md" ref={containerRef}>
      <h3 className="text-white text-3xl font-acme" ref={titleRef}>
        {title}
      </h3>
      <div className="w-full bg-white h-2 mt-4 rounded-lg overflow-hidden">
        <div
          className={`h-2 rounded-lg ${barColor}`}
          ref={barRef}
          aria-label={`Progress bar showing ${percentage}%`}
        ></div>
      </div>
      <p className="text-gray-400 text-sm mt-2 font-roboto" ref={descriptionRef}>
        {description}
      </p>
    </div>
  );
};

export default HorizontalTechStack;
