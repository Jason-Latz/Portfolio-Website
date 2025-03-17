import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-800 to-emerald-600">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-green-800 opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(4,120,87,0.3)_0%,_transparent_50%)] pointer-events-none"></div>
      <div className="container mx-auto px-6 py-24 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-400/30 shadow-[0_0_30px_rgba(16,185,129,0.3)] transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
              alt="Jason Latz"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 text-transparent bg-clip-text">Jason Latz</h1>
            <p className="text-2xl mb-4 text-emerald-100">Computer Science Student at Northwestern University</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <span className="flex items-center text-emerald-200 backdrop-blur-sm bg-emerald-900/30 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 mr-2" /> Evanston, IL
              </span>
              <span className="flex items-center text-emerald-200 backdrop-blur-sm bg-emerald-900/30 px-4 py-2 rounded-full">
                <Mail className="w-5 h-5 mr-2" /> latz@u.northwestern.edu
              </span>
              <span className="flex items-center text-emerald-200 backdrop-blur-sm bg-emerald-900/30 px-4 py-2 rounded-full">
                <Phone className="w-5 h-5 mr-2" /> (602) 647-6299
              </span>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.linkedin.com/in/jason-latz-7b8634242" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-emerald-800/50 hover:bg-emerald-700/50 rounded-full transition-all duration-300 hover:scale-110 text-emerald-200">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Jason-Latz" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-emerald-800/50 hover:bg-emerald-700/50 rounded-full transition-all duration-300 hover:scale-110 text-emerald-200">
                <Github size={24} />
              </a>
              <a href="mailto:latz@u.northwestern.edu" 
                 className="p-3 bg-emerald-800/50 hover:bg-emerald-700/50 rounded-full transition-all duration-300 hover:scale-110 text-emerald-200">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;