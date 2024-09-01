import React from 'react';
import { FaRegCalendarAlt, FaTag } from 'react-icons/fa';

const Blog = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-white text-4xl font-nano mb-6 -mt-6 -mx-3">Blog</h1>
        <hr className="w-32 border-2 border-green-500 mb-6 -mx-5 -my-4 rounded-full" />

        <p className="text-gray-300 mb-6">
          Welcome to my blog where I share insights on various topics ranging from technology to personal growth. Explore my latest posts and find something that interests you!
        </p>

        {/* Featured Post */}
        <div className="bg-teal-950  p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl text-white font-nano mb-2">Featured Post</h2>
          <p className="text-gray-400 mb-4">
            Discover the latest trends in web development and how to stay ahead of the curve. From new frameworks to best practices, this post covers it all.
          </p>
          <a href="#" className="text-green-500 hover:underline">Read More</a>
        </div>

        {/* Recent Posts */}
        <div className="mb-8">
          <h2 className="text-2xl text-white font-nano mb-4">Recent Posts</h2>
          <div className="bg-teal-950  p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl text-gray-100 font-nano mb-2">How to Master React in 2024</h3>
            <p className="text-gray-400 mb-2">
              An in-depth guide on mastering React in the current year. Learn about new features and best practices.
            </p>
            <a href="#" className="text-green-500 hover:underline">Read More</a>
          </div>

          <div className="bg-teal-950  p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-100 font-nano mb-2">Top 10 JavaScript Tips for Beginners</h3>
            <p className="text-gray-400 mb-2">
              A collection of essential tips for beginners learning JavaScript. Improve your coding skills with these useful tips.
            </p>
            <a href="#" className="text-green-500 hover:underline">Read More</a>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-6 bg-teal-950  rounded-lg shadow-md md:ml-6 mt-20">
        <h2 className="text-2xl text-white font-nano mb-4">Categories</h2>
        <ul className="text-gray-300">
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-green-500">
              <FaTag className="text-green-500 text-lg mr-2" /> Web Development
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-green-500">
              <FaTag className="text-green-500 text-lg mr-2" /> Personal Growth
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-green-500">
              <FaTag className="text-green-500 text-lg mr-2" /> Technology Trends
            </a>
          </li>
        </ul>
        <h2 className="text-2xl text-white font-nano mt-6 mb-4">Archives</h2>
        <ul className="text-gray-300">
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-green-500">
              <FaRegCalendarAlt className="text-green-500 text-lg mr-2" /> September 2024
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-green-500">
              <FaRegCalendarAlt className="text-green-500 text-lg mr-2" /> August 2024
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-green-500">
              <FaRegCalendarAlt className="text-green-500 text-lg mr-2" /> July 2024
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
