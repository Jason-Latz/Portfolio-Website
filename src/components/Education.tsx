import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Education: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-20 relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(4,120,87,0.3)_0%,_transparent_60%)]"></div>
      <div className="container mx-auto px-6 relative">
        <h2 className={`text-4xl font-bold text-center mb-16 flex items-center justify-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <GraduationCap className="w-8 h-8 mr-3 text-emerald-500" />
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className={`${
            isDarkMode 
              ? 'bg-gray-800/30 text-gray-100' 
              : 'bg-white text-gray-900'
            } rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300`}>
            <h3 className="text-2xl font-bold mb-2">Northwestern University</h3>
            <p className="text-emerald-500 mb-4">Expected Graduation: June 2027</p>
            <p className={`text-lg mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              B.S. in Computer Science, McCormick School of Engineering and Applied Science
            </p>
            <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Minor in Psychology, Weinberg College of Arts and Sciences
            </p>
            <p className="font-semibold mb-2">GPA: 4.0/4.0 | ACT: 36/36</p>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Data Structures & Algorithms, Agile Software Studio (Skills: React.js, SQL, Cloud Deployment), 
                Discrete Math, Linear Algebra, MATLAB, Computer Systems, Machine Learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;