import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const HorizontalTechStack = ({
  percentage = 50,
  title = "Tech Stack",
  description = "",
  barColor = "bg-rose-600",
  iconClass = "", // Optional icon class
}) => {
  const barRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const percentageRef = useRef(null); // Reference for percentage text
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

      gsap.fromTo(
        percentageRef.current,
        { innerText: 0 },
        {
          innerText: percentage,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            this.targets()[0].innerText = `${Math.floor(this.targets()[0].innerText)}%`;
          },
        }
      );
    }
  }, [inView, percentage]);

  return (
    <div className="relative p-5 border border-transparent hover:border-gray-200 rounded-lg shadow-lg backdrop-blur-md  bg-zinc-500 bg-opacity-20   shine-effect">
      <div
        className="relative p-6 rounded-lg bg-zinc-900  z-20"
        ref={containerRef}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {iconClass && (
              <i className={`devicon ${iconClass} text-4xl mr-4`}></i>
            )}
            <h3 className="text-rose-600 text-3xl font-dm-sans font-bold" ref={titleRef}>
              {title}
            </h3>
          </div>
          <span
            className="text-white text-2xl font-bold"
            ref={percentageRef}
            aria-label={`Progress at ${percentage}%`}
          >
            0%
          </span>
        </div>
        <div className="relative w-full bg-white h-2 rounded-lg overflow-hidden">
          <div
            className={`h-2 rounded-lg ${barColor}`}
            ref={barRef}
            aria-label={`Progress bar showing ${percentage}%`}
          ></div>
        </div>
        <p className="text-white text-sm mt-2 font-dm-sans font-xl font-bold" ref={descriptionRef}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default HorizontalTechStack;
