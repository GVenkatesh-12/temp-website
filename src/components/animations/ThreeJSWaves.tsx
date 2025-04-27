import React, { useEffect, useRef, useState } from "react";

const VantaGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth <= 768;
    setIsMobile(checkMobile());

    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoTopMargin = isMobile ? "8vh" : "10.2vh";
  const conferenceTopMargin = isMobile ? "12.2vh" : "10.4vh";
  const conferenceFontSize = isMobile
    ? "clamp(12px, 2.5vw, 16px)"
    : "clamp(14px, 2vw, 20px)";
  const conferenceLeftMarginMobile = "5vw";

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
