import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ThreeJSWaves from '../animations/ThreeJSWaves';

export const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Gradient Background (Behind Everything) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DCEBFF] to-[#70ADFA] z-[-2]" />

      {/* Larger White Dot Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1]"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(255, 255, 255) 3px, transparent 4px)`, 
          backgroundSize: '50px 50px', // Larger dots
          opacity: 0.5 // Adjust transparency for a soft effect
        }}
      />

      {/* Three.js Animation (Only on Home Page) */}
      {isHomePage && <div className="absolute inset-0 z-0"><ThreeJSWaves /></div>}

      {/* Navbar & Page Content */}
      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
