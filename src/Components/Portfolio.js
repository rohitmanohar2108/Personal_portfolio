import React, { useState } from 'react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div>
      <h1 className="text-white text-3xl mb-4">Portfolio</h1>

      {/* Navigation Bar */}
      <div className="flex justify-start space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('All')}
          className="px-4 py-2 rounded-full font-semibold bg-black/30 text-gray-300  hover:text-amber-500 transition-colors duration-300"
        >
          All
        </button>
        <button
          onClick={() => setActiveTab('Web Development')}
          className="px-4 py-2 rounded-full font-semibold bg-black/30 text-gray-300  hover:text-amber-500 transition-colors duration-300"
        >
          Web Development
        </button>
        <button
          onClick={() => setActiveTab('Web Design')}
          className="px-4 py-2 rounded-full font-semibold bg-black/30 text-gray-300  hover:text-amber-500 transition-colors duration-300"
        >
          Web Design
        </button>
      </div>

      {/* Content Section */}
      <div className="text-gray-300">
        {activeTab === 'All' && <p>Showing all projects...</p>}
        {activeTab === 'Web Development' && <p>Showing web development projects...</p>}
        {activeTab === 'Web Design' && <p>Showing web design projects...</p>}
      </div>
    </div>
  );
};

export default Portfolio;
