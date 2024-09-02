import React from 'react';
import { FaRegCalendarAlt, FaTag } from 'react-icons/fa';

const Blog = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-white text-4xl font-courier-prime mb-6 -mt-6 -mx-3">Blog</h1>
        <hr className="w-32 border-2 border-yellow-600 mb-6 -mx-5 -my-4 rounded-full" />

        <p className="text-gray-300 mb-6 font-courier-prime text-sm ">
          Welcome to my blog where I share insights on various topics ranging from technology to personal growth. Explore my latest posts and find something that interests you!
        </p>

        {/* Featured Post */}
        <div className="bg-black/30  p-6 rounded-lg shadow-md mb-8 font-courier-prime">
          <h2 className="text-2xl text-white  mb-2">Featured Post</h2>
          <p className="text-gray-400 mb-4text-sm">
            Discover the latest trends in web development and how to stay ahead of the curve. From new frameworks to best practices, this post covers it all.
          </p>
          <a href="#" className="text-amber-500 hover:underline text-sm">Read More</a>
        </div>

        {/* Recent Posts */}
        <div className="mb-8 font-courier-prime">
          <h2 className="text-2xl text-white  mb-4">Recent Posts</h2>
          <div className="bg-black/30 p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl text-gray-100  mb-2">How to Master React in 2024</h3>
            <p className="text-gray-400 mb-2 text-sm">
              An in-depth guide on mastering React in the current year. Learn about new features and best practices.
            </p>
            <a href="#" className="text-amber-500 hover:underline text-sm">Read More</a>
          </div>

          <div className="bg-black/30  p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-100  mb-2">Top 10 JavaScript Tips for Beginners</h3>
            <p className="text-gray-400 mb-2 text-sm">
              A collection of essential tips for beginners learning JavaScript. Improve your coding skills with these useful tips.
            </p>
            <a href="#" className="text-amber-500 hover:underline text-sm">Read More</a>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-6 bg-black/30  rounded-lg shadow-md md:ml-6 mt-20 font-courier-prime">
        <h2 className="text-2xl text-white  mb-4">Categories</h2>
        <ul className="text-gray-300">
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-stone-400 text-sm">
              <FaTag className="text-amber-500 text-lg mr-2" /> Web Development
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-stone-400 text-sm">
              <FaTag className="text-amber-500 text-lg mr-2" /> Personal Growth
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-stone-400 text-sm">
              <FaTag className="text-amber-500 text-lg mr-2" /> Technology Trends
            </a>
          </li>
        </ul>
        <h2 className="text-2xl text-white  mt-6 mb-4 font-courier-prime">Archives</h2>
        <ul className="text-gray-300">
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-stone-400 text-sm">
              <FaRegCalendarAlt className="text-amber-500 text-lg mr-2" /> September 2024
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-stone-400 text-sm">
              <FaRegCalendarAlt className="text-amber-500 text-lg mr-2" /> August 2024
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center hover:text-stone-400 text-sm">
              <FaRegCalendarAlt className="text-amber-500 text-lg mr-2" /> July 2024
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;