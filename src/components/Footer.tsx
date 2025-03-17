import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`${isDarkMode ? 'bg-gray-950 text-gray-400' : 'bg-gray-100 text-gray-600'} py-8`}>
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} Jason Latz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;