import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[50vh] py-4 sm:py-6">

      <div className="w-full flex justify-center items-center px-4 sm:px-6 mt-20 md:mt-16">
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-2 md:mb-3 leading-tight">
            <span className="inline-block">2025 IEEE 3rd International</span>{' '}
            <span className="inline-block">Symposium on Sustainable Energy, </span>{' '}
            <span className="inline-block">Signal Processing and Cybersecurity</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-2">
            November 06 - 08, 2025, GIET University, Gunupur, Odisha
          </h2>

          <p className="text-[#FFD700] text-center font-bold text-lg sm:text-xl mb-2">
            ELECTRICAL AND ELECTRONICS ENGINEERING
          </p>

          <p className="text-white text-base sm:text-lg font-semibold mb-4 max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed text-justify">
            The 2025 IEEE 3rd International Symposium on Sustainable Energy, Signal Processing, and Cybersecurity (iSSSC 2025) is a leading forum for researchers, engineers, and industry experts to share innovations, research, and challenges in these key interdisciplinary fields. The symposium promotes collaboration and idea exchange through keynote talks, technical presentations, and specialized workshops focused on the latest advancements and future trends.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch px-4 sm:px-0">
            <Link
              to="/about"
              className="flex items-center justify-center px-6 py-3 bg-conference-blue text-white rounded-lg hover:bg-conference-dark-blue transition-all duration-300 shadow-md hover:shadow-xl text-base font-semibold"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-full flex items-center justify-center px-6 py-3 bg-[#E6BE00] text-white rounded-lg hover:bg-[#C9A700] transition-all duration-300 shadow-md hover:shadow-xl text-base font-semibold"
              >
                Previous Editions
                <ChevronUp className={`ml-2 h-5 w-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMenuOpen && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white rounded-lg shadow-xl py-2 z-20">
                  <a
                    href="https://ieeexplore.ieee.org/xpl/conhome/9358465/proceeding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-800 hover:bg-blue-50 transition-colors text-base"
                  >
                    iSSSC 2020
                  </a>
                  <a
                    href="https://ieeexplore.ieee.org/xpl/conhome/10051169/proceeding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-800 hover:bg-blue-50 transition-colors text-base"
                  >
                    iSSSC 2022
                  </a>
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-xl text-base font-semibold"
            >
              Photo Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;