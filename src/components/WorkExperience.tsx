import React from 'react';
import { Building2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { workExperience } from '../data/workExperience';

const WorkExperience: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-20 relative ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(4,120,87,0.3)_0%,_transparent_60%)]"></div>
      <div className="container mx-auto px-6 relative">
        <h2 className={`text-4xl font-bold text-center mb-16 flex items-center justify-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <Building2 className="w-8 h-8 mr-3 text-emerald-500" />
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {workExperience.map((job, index) => (
            <div key={index} className={`${
              isDarkMode 
                ? 'bg-gray-800/30 text-gray-100' 
                : 'bg-white text-gray-900'
              } rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300`}>
              <h3 className="text-2xl font-bold">{job.title}</h3>
              <p className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{job.role}</p>
              <p className="text-emerald-500 mb-4">{job.period}</p>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.tech.map((tech, i) => (
                  <span key={i} className={`px-3 py-1 ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-200' 
                      : 'bg-gray-200 text-gray-700'
                    } rounded-full text-sm`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;