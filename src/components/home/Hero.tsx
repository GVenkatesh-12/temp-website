
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] text-center px-4 sm:px-6">
      {/* Wrapper to Maintain Space in Layout */}
<div className="relative w-full h-screen flex justify-center items-center">
  {/* Absolute Positioned Text Over Animation */}
  <div className="absolute z-10 max-w-4xl text-center p-8">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
      2025 IEEE 3rd International Symposium on Sustainable Energy, Signal Processing and Cybersecurity
    </h1>
    <h2 className="text-xl md:text-2xl text-white font-semibold mb-6">
      November 06 - 08, 2025, GIET University, Gunupur, India
    </h2>

    <p className="text-white text-lg font-semibold mb-4 max-w-2xl text-justify mx-auto">
    IEEE-iSSSC 2025 is the flagship conference of the IEEE India Council, hosted at GIET University under IEEE Bhubaneswar Subsection. This 3rd edition offers a platform for researchers from academia and industry to share insights, collaborate, and network. The event features keynotes, invited talks, industry exhibits, oral presentations, and a Graduate Research Forum to showcase innovative work.
  </p>

    <Link 
      to="/about" 
      className="inline-flex items-center justify-center px-6 py-3 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md hover:shadow-lg mt-[-12px]"
    >
      Learn More
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </div>
</div>

    </div>
  );
};

export default Hero;
