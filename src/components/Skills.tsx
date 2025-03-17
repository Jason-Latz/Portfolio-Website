import React from 'react';
import { Code2, Terminal, Brain } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Skills: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-20 relative ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(4,120,87,0.3)_0%,_transparent_70%)]"></div>
      <div className="container mx-auto px-6 relative">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`${
            isDarkMode 
              ? 'bg-gray-800/30 text-gray-100' 
              : 'bg-white text-gray-900'
            } p-8 rounded-xl shadow-lg transform hover:scale-[1.05] transition-all duration-300`}>
            <Code2 className="w-12 h-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Programming</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              C++, Python, C, React.js, SQL, MATLAB
            </p>
          </div>
          <div className={`${
            isDarkMode 
              ? 'bg-gray-800/30 text-gray-100' 
              : 'bg-white text-gray-900'
            } p-8 rounded-xl shadow-lg transform hover:scale-[1.05] transition-all duration-300`}>
            <Terminal className="w-12 h-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Solidworks, Git, APIs, Machine Learning, Cloud Deployment
            </p>
          </div>
          <div className={`${
            isDarkMode 
              ? 'bg-gray-800/30 text-gray-100' 
              : 'bg-white text-gray-900'
            } p-8 rounded-xl shadow-lg transform hover:scale-[1.05] transition-all duration-300`}>
            <Brain className="w-12 h-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Other Skills</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Project Management, Spanish, Microsoft Office
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;