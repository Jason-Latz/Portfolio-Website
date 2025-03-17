import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 p-3 rounded-full transition-all duration-300 z-50 ${
        isDarkMode 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
          : 'bg-white text-gray-900 hover:bg-gray-100'
      } shadow-lg`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default ThemeToggle;