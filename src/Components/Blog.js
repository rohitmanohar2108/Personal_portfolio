import React, { useEffect } from 'react';
import { FaRegCalendarAlt, FaTag } from 'react-icons/fa';
import { gsap } from "gsap";

const Blog = () => {
  useEffect(() => {
    gsap.fromTo(
      ".skill-box",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, stagger: 0.2 }
    );
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-white text-4xl font-acme mb-6 -mt-6 -mx-3">Blog</h1>
        

        <p className="text-gray-300 mb-6 font-roboto text-lg">
          Welcome to my blog where I share insights on various topics ranging from technology to personal growth. Explore my latest posts and find something that interests you!
        </p>

        {/* Featured Post */}
        <div className="bg-zinc-900 border-transparent hover:border-white p-6 rounded-lg shadow-md mb-8  skill-box">
          <h2 className="text-2xl text-white mb-2 font-acme">Featured Post</h2>
          <p className="text-gray-400 mb-4 text-sm">
            Discover the latest trends in web development and how to stay ahead of the curve. From new frameworks to best practices, this post covers it all.
          </p>
          <a href="#" className="text-amber-500 hover:underline text-sm">Read More</a>
        </div>

        {/* Recent Posts */}
        <div className="mb-8  skill-box">
          <h2 className="text-2xl text-white mb-4 font-acme">Recent Posts</h2>
          <div className="bg-zinc-900 border-transparent hover:border-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl text-gray-100 mb-2">How to Master React in 2024</h3>
            <p className="text-gray-400 mb-2 text-sm">
              An in-depth guide on mastering React in the current year. Learn about new features and best practices.
            </p>
            <a href="#" className="text-amber-500 hover:underline text-sm">Read More</a>
          </div>

          <div className="bg-zinc-900 border-transparent hover:border-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-100 mb-2">Top 10 JavaScript Tips for Beginners</h3>
            <p className="text-gray-400 mb-2 text-sm">
              A collection of essential tips for beginners learning JavaScript. Improve your coding skills with these useful tips.
            </p>
            <a href="#" className="text-amber-500 hover:underline text-sm">Read More</a>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className=" w-full md:w-1/4 p-6 bg-zinc-900 border-transparent hover:border-white rounded-lg shadow-md md:ml-6 mt-20  skill-box ">
        <h2 className="text-2xl text-white mb-4 font-acme">Categories</h2>
        <ul className="text-gray-300">
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-stone-400 text-sm">
              <FaTag className="text-rose-600 text-lg mr-2" /> Web Development
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-stone-400 text-sm">
              <FaTag className="text-rose-600 text-lg mr-2" /> Personal Growth
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-stone-400 text-sm">
              <FaTag className="text-rose-600 text-lg mr-2" /> Technology Trends of
            </a>
          </li>
        </ul>
        <h2 className="text-2xl text-white mt-6 mb-4 font-acme">Archives</h2>
        <ul className="text-gray-300">
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-stone-400 text-sm">
              <FaRegCalendarAlt className="text-rose-600 text-lg mr-2" /> September 2024
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-stone-400 text-sm">
              <FaRegCalendarAlt className="text-rose-600 text-lg mr-2" /> August 2024
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-stone-400 text-sm">
              <FaRegCalendarAlt className="text-rose-600 text-lg mr-2" /> July 2024
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
