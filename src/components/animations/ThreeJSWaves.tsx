import React, { useEffect, useRef } from "react";
import * as THREE from "three";

declare global {
  interface Window {
    VANTA: any;
  }
}

const VantaGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!window.VANTA) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.globe.min.js';
      script.async = true;
      script.onload = initVanta;
      document.body.appendChild(script);
    } else {
      initVanta();
    }

    function initVanta() {
      vantaEffectRef.current = window.VANTA.GLOBE({
        el: containerRef.current,
        THREE: THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x00a8ff,
        color2: 0xA8A8A8,
        backgroundColor: 0x23153d,
        size: 1.00
      });
    }

    const handleResize = () => {
      if (vantaEffectRef.current) vantaEffectRef.current.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#23153d",
      }}
    >
      {/* Responsive logos aligned at the top center */}
      <div
        style={{
          position: "absolute",
          top: "10.2vh",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "clamp(10px, 3vw, 40px)",
          width: "90%",
          maxWidth: "600px",
        }}
      >
        <img
          src="/documents/logo-3-new-4.png"
          alt="Logo 1"
          style={{ width: "clamp(80px, 14vw, 140px)", height: "auto" }}
        />
        <img
          src="/documents/University-Logo.png"
          alt="Logo 2"
          style={{ width: "clamp(58px, 10vw, 98px)", height: "auto" }}
        />
        <img
          src="/documents/logo-1-new.png"
          alt="Logo 3"
          style={{ width: "clamp(100px, 16vw, 172px)", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default VantaGlobe;