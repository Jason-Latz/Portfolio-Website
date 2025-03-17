import React from 'react';
import { Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-20 relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(4,120,87,0.4)_0%,_transparent_70%)]"></div>
      <div className="container mx-auto px-6 text-center relative">
        <h2 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Let's Connect</h2>
        <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          I'm always open to discussing new projects and opportunities.
        </p>
        <a 
          href="mailto:latz@u.northwestern.edu"
          className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <Mail className="mr-2" />
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;