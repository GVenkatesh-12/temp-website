
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-conference-navy text-white py-8 mt-12 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">iSSSC 2025</h3> */}
            {/* Logos Section */}
            <div className="mt-1 flex justify-start items-center space-x-6 mb-4">
              <Link to="/">
                <img src="/documents/logo-22.svg" alt="Logo 2" className="h-[110px] w-[180px]" />

              </Link>
            </div>

            <p className="text-sm text-gray-300">
              2025 IEEE 3rd International Symposium on Sustainable Energy, Signal Processing and Cybersecurity (iSSSC 2025)
            </p>
            <p className="text-sm text-gray-300 mt-2">
              November 06 - 08, 2025, GIET University, Gunupur, India
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/paper-submission" className="text-gray-300 hover:text-white transition-colors">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link to="/registration" className="text-gray-300 hover:text-white transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-300">
              <p>GIET University</p>
              <p>Gunupur - 765022</p>
              <p>Odisha, India</p>
              <p className="mt-2">
                <a href="mailto:isssc2025@gmail.com" className="hover:text-white transition-colors">
                  isssc2025@gmail.com
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="https://www.giet.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.giet.edu
                </a>

              </p>
            </address>
          </div>
        </div>
        {/* Logos Section */}
        <div className="mt-2 flex justify-start items-center space-x-6">
          <img src="/documents/logo-1.png" alt="Logo 1" className="h-12" />
          <img src="/documents/logo-3.png" alt="Logo 2" className="h-12" />
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} IEEE-iSSSC 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
