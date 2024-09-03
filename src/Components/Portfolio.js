import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const projects = {
  All: [
    {
      id: 1,
      image: 'https://do6gp1uxl3luu.cloudfront.net/projects/netflixProject.png',
      title: 'Film Ninja',
      description: 'Web Dev',
      link: '#'
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
    },
    {
      id: 4,
      image: 'https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_5XySWqeTsJYccXgiU6pbTXmjkpih%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_69W1g56UQ3afqs1J92SU1Cogwcak',
      title: 'Personel portfolio',
      description: 'Web Dev',
      link: 'https://personal-portfolio-kappa-teal.vercel.app/'
    }
  ],
  'Web Development': [
    {
      id: 1,
      image: 'https://do6gp1uxl3luu.cloudfront.net/projects/netflixProject.png',
      title: 'FilmNinja',
      description: 'Web Dev',
      link: '#'
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
    },
    {
      id: 1,
      image: 'https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_5XySWqeTsJYccXgiU6pbTXmjkpih%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_69W1g56UQ3afqs1J92SU1Cogwcak',
      title: 'Personel Portfolio',
      description: ' Web Design',
      link: 'https://personal-portfolio-kappa-teal.vercel.app/'
    }
  ]
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, stagger: 0.2 }
    );
  }, [activeTab]);

  return (
    <div>
      <h1 className="text-white text-3xl mb-4 font-acme">Portfolio</h1>
      <hr className="w-32 border-2 border-amber-400 mb-6 -mx-2 -my-2 rounded-full" />
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('All')}
          className={`px-4 py-2 rounded-full bg-black/30 ${activeTab === 'All' ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-400 transition-colors duration-300 font-roboto`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab('Web Development')}
          className={`px-4 py-2 rounded-full bg-black/30 ${activeTab === 'Web Development' ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-400 transition-colors duration-300 font-roboto`}
        >
          Web Development
        </button>
        <button
          onClick={() => setActiveTab('Web Design')}
          className={`px-4 py-2 rounded-full bg-black/30 ${activeTab === 'Web Design' ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-400 transition-colors duration-300 font-roboto`}
        >
          Web Design
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300">
        {projects[activeTab].map(project => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block bg-purple-800/50 rounded-lg overflow-hidden group project-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h3 className="font-bold mb-2 text-3xl text-amber-400 font-acme">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
