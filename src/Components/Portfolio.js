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
      image: 'https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_33ipk61D9T6AhM1YK67rmpvPzvjG%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_2q5xmLHavNwyLXRhZZV9GC6pWhpd',
      title: 'Portfolio',
      description: 'Web Design',
      link: 'https://ro-portfolio-olive.vercel.app/'
    },
    
    {
      id: 4,
      image: 'https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_7Vf2Yu6pjUiVbHonAqNRZAqLqie3%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_2q5xmLHavNwyLXRhZZV9GC6pWhpd',
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
    
  ],
  
  'Web Design': [
    {
      id: 1,
      image: 'https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_33ipk61D9T6AhM1YK67rmpvPzvjG%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_2q5xmLHavNwyLXRhZZV9GC6pWhpd',
      title: 'Portfolio',
      description: ' Web Design',
      link: 'https://ro-portfolio-olive.vercel.app/'
    },
    {
      id: 1,
      image: 'https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_7Vf2Yu6pjUiVbHonAqNRZAqLqie3%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_2q5xmLHavNwyLXRhZZV9GC6pWhpd',
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
      <h1 className="text-white text-3xl mb-4 font-dm-sans">Portfolio</h1>
      
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('All')}
          className={`px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-white ${activeTab === 'All' ? 'text-rose-600' : 'text-white'} hover:text-rose-600  font-dm-sans transition duration-300 ease-in-out transform hover:scale-105`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab('Web Development')}
          className={`px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-white ${activeTab === 'Web Development' ? 'text-rose-600' : 'text-gray-300'} hover:text-rose-600  font-dm-sans transition duration-300 ease-in-out transform hover:scale-105`}
        >
          Web Development
        </button>
        <button
          onClick={() => setActiveTab('Web Design')}
          className={`px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-white ${activeTab === 'Web Design' ? 'text-rose-600' : 'text-gray-300'} hover:text-rose-600  font-dm-sans transition duration-300 ease-in-out transform hover:scale-105`}
        >
          Web Design
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-300 h-full p-5 py-5">
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
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 border hover:border-white">
              <h3 className="font-bold mb-2 text-3xl bg-gradient-to-r from-violet-500  via-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent font-dm-sans">{project.title}</h3>
              <p className='font-bold font-dm-sans'>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
