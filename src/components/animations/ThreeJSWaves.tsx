import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

declare global {
  interface Window {
    VANTA: any;
  }
}

const VantaGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Function to initialize the VANTA cells effect
  const initVanta = () => {
    if (!containerRef.current) return;
    vantaEffectRef.current = window.VANTA.CELLS({
      el: containerRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      color1: 0x70728,
      color2: 0x93eeb,
    });
  };

  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => window.innerWidth <= 768;
    setIsMobile(checkMobile());

    if (!checkMobile()) {
      if (!window.VANTA) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.cells.min.js";
        script.async = true;
        script.onload = initVanta;
        document.body.appendChild(script);
      } else {
        initVanta();
      }
    }

    const handleResize = () => {
      const nowMobile = window.innerWidth <= 768;
      setIsMobile(nowMobile);

      if (nowMobile && vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
      if (!nowMobile && !vantaEffectRef.current) {
        initVanta();
      }
      if (vantaEffectRef.current) {
        vantaEffectRef.current.resize();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
      }
    };
  }, []);

  // Define dynamic styles for the logos and conference text
  const logoTopMargin = isMobile ? "8vh" : "10.2vh";
  const conferenceTopMargin = isMobile ? "12.2vh" : "10.4vh";
  const conferenceFontSize = isMobile
    ? "clamp(12px, 2.5vw, 16px)"
    : "clamp(14px, 2vw, 20px)";
  // New left margin for mobile conference text
  const conferenceLeftMarginMobile = "5vw";

  // Conditional style for the "Conference ID" text:
  // For mobile, rotate it 90deg to display vertically in the left corner with increased margin.
  const conferenceStyle = isMobile
    ? {
        position: "absolute" as const,
        top: conferenceTopMargin,
        left: conferenceLeftMarginMobile,
        transform: "rotate(90deg)",
        transformOrigin: "top left",
        color: "#ffffff",
        fontWeight: "bold",
        zIndex: 9999,
        fontSize: conferenceFontSize,
      }
    : {
        position: "absolute" as const,
        top: conferenceTopMargin,
        left: "0.7vw",
        color: "#ffffff",
        fontWeight: "bold",
        zIndex: 9999,
        fontSize: conferenceFontSize,
      };

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "102vh",
        overflow: "hidden",
        backgroundColor: "#23153d",
      }}
    >
      Responsive logos aligned at the top center
      <div
        style={{
          position: "absolute",
          top: logoTopMargin,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "clamp(10px, 3vw, 40px)",
          width: "90%",
          maxWidth: "600px",
          zIndex: 10,
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
      {/* Conference ID styled differently for mobile vs. desktop */}
      <div style={conferenceStyle}>Conference ID - 66652</div>
    </div>
  );
};

export default VantaGlobe;
