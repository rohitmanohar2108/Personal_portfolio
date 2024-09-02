import React, { useState } from 'react';

// Sample project data
const projects = {
  All: [
    {
      id: 1,
      image: 'https://do6gp1uxl3luu.cloudfront.net/projects/netflixProject.png',
      title: 'Film Ninja',
      description: 'Web Dev',
      link: 'https://github.com/rohitmanohar2108/FilmNinja'
    },
    {
      id: 2,
      image: 'https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_4GDy3to6QsrfvvFw9WHJ44fXRpCd%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_69W1g56UQ3afqs1J92SU1Cogwcak',
      title: 'Portfolio',
      description: 'Web Design',
      link: 'https://ro-portfolio-olive.vercel.app/'
    },
    {
      id: 3,
      image: 'https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_EYKMtAYEXbrN9b2JxsWvaSKt2eD6%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_69W1g56UQ3afqs1J92SU1Cogwcak',
      title: 'NewScope',
      description: 'Web Dev',
      link: 'https://newscope.vercel.app/'
    }
  ],
  'Web Development': [
    {
      id: 1,
      image: 'https://do6gp1uxl3luu.cloudfront.net/projects/netflixProject.png',
      title: 'FilmNinja',
      description: 'Web Dev',
      link: 'https://github.com/rohitmanohar2108/FilmNinja'
    },
    {
      id: 2,
      image: 'https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_EYKMtAYEXbrN9b2JxsWvaSKt2eD6%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_69W1g56UQ3afqs1J92SU1Cogwcak',
      title: 'NewScope',
      description: 'Web Dev ',
      link: 'https://newscope.vercel.app/'
    }
  ],
  
  'Web Design': [
    {
      id: 1,
      image: 'https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_4GDy3to6QsrfvvFw9WHJ44fXRpCd%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_69W1g56UQ3afqs1J92SU1Cogwcak',
      title: 'Portfolio',
      description: ' Web Design',
      link: 'https://ro-portfolio-olive.vercel.app/'
    }
  ]
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div>
      <h1 className="text-white text-3xl mb-4">Portfolio</h1>

      {/* Navigation Bar */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('All')}
          className={`px-4 py-2 rounded-full bg-black/30 ${activeTab === 'All' ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-400 transition-colors duration-300 font-courier-prime`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab('Web Development')}
          className={`px-4 py-2 rounded-full bg-black/30 ${activeTab === 'Web Development' ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-400 transition-colors duration-300 font-courier-prime`}
        >
          Web Development
        </button>
        <button
          onClick={() => setActiveTab('Web Design')}
          className={`px-4 py-2 rounded-full bg-black/30 ${activeTab === 'Web Design' ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-400 transition-colors duration-300 font-courier-prime`}
        >
          Web Design
        </button>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300 font-courier-prime">
        {projects[activeTab].map(project => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black/30 rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 "
          >
            <img
              src={project.image}
              alt={project.title}
              className="font-bold w-full h-48 object-cover font-courier-prime"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2   text-sm">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

