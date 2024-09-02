import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CircularTimeline = ({ percentage, title, description }) => {
  const circleRef = useRef(null);
  const percentageRef = useRef(null);
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  useEffect(() => {
    const offset = circumference - (percentage / 100) * circumference;

    // Animate the circle's strokeDashoffset to show the progress
    gsap.fromTo(
      circleRef.current,
      { strokeDashoffset: circumference },
      {
        strokeDashoffset: offset,
        duration: 2,
        ease: "power2.out",
      }
    );

    // Animate the percentage number counting up
    gsap.fromTo(
      percentageRef.current,
      { innerText: 0 },
      {
        innerText: percentage,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power2.out",
        onUpdate: function () {
          percentageRef.current.innerHTML = Math.round(percentageRef.current.innerText) + "%";
        },
      }
    );
  }, [circumference, percentage]);

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="circular-progress">
        <svg width="120" height="120">
          <circle className="circle-bg" cx="60" cy="60" r={radius} />
          <circle
            className="circle"
            cx="60"
            cy="60"
            r={radius}
            strokeDasharray={circumference}
            ref={circleRef}
          />
        </svg>
        <div className="percentage" ref={percentageRef}></div>
      </div>
      <h3 className="text-white text-2xl mt-4 font-sans">{title}</h3>
      <p className="text-gray-400 text-sm text-center">{description}</p>
    </div>
  );
};

export default CircularTimeline;
