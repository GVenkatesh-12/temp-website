import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] text-center px-4 sm:px-6">
      {/* Wrapper to Maintain Space in Layout */}
      <div className="relative w-full h-screen flex justify-center items-center">
        {/* Absolute Positioned Text Over Animation */}
        <div className="absolute z-10 max-w-4xl text-center p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            2025 IEEE 3rd International Symposium on Sustainable Energy, Signal Processing and Cybersecurity
          </h1>
          <h2 className="text-xl md:text-2xl text-white font-semibold mb-2">
            November 06 - 08, 2025, GIET University, Gunupur, Odisha
          </h2>


          <p className="text-[#FFD700] text-center font-bold text-xl  max-w-2xl mx-auto mb-1">
  ELECTRICAL AND ELECTRONICS ENGINEERING
</p>


          <p className="text-white text-lg font-semibold mb-4 max-w-2xl text-justify mx-auto">
            The 2025 IEEE 3rd International Symposium on Sustainable Energy, Signal Processing, and Cybersecurity (iSSSC 2025) is a leading forum for researchers, engineers, and industry experts to share innovations, research, and challenges in these key interdisciplinary fields. The symposium promotes collaboration and idea exchange through keynote talks, technical presentations, and specialized workshops focused on the latest advancements and future trends.
          </p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-[-12px] relative">
            {/* Learn More Button */}
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md hover:shadow-lg"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            {/* Drop-Up Menu */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center px-6 py-3 bg-conference-blue text-white rounded-[10px] hover:bg-conference-dark-blue transition-colors shadow-md hover:shadow-lg"
              >
                Previous Editions
                <ChevronUp className="ml-2 h-4 w-4" />
              </button>

              {isMenuOpen && (
                <div className="absolute bottom-full mb-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
                  <a
                    href="https://ieeexplore.ieee.org/xpl/conhome/9358465/proceeding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-950 hover:bg-blue-200 text-left"
                  >
                    iSSSC 2020
                  </a>
                  <a
                    href="https://ieeexplore.ieee.org/xpl/conhome/10051169/proceeding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-950 hover:bg-blue-200 text-left"
                  >
                    iSSSC 2022
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
