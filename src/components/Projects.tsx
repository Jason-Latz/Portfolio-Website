import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(4,120,87,0.2)_0%,_transparent_70%)]"></div>
      <div className="container mx-auto px-6 relative">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`${
              isDarkMode 
                ? 'bg-gray-800/30 text-gray-100' 
                : 'bg-white text-gray-900'
              } backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300`}>
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`px-3 py-1 ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-200' 
                        : 'bg-gray-200 text-gray-700'
                      } rounded-full text-sm`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center text-emerald-600 hover:text-emerald-500 transition-colors">
                    <Github size={20} className="mr-1" /> Code
                  </a>
                  <a href={project.demo} className="flex items-center text-emerald-600 hover:text-emerald-500 transition-colors">
                    <ExternalLink size={20} className="mr-1" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;