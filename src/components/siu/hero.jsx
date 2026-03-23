"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="siu-hero-section pt-150 pb-100 p-relative overflow-hidden"
      style={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center",
        background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)", 
        position: "relative",
        fontFamily: "var(--font-primary), sans-serif"
      }}
    >
      {/* Background Decorative Glows */}
      <div style={{ position: "absolute", top: "20%", left: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)", filter: "blur(60px)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 0 }} />

      <div className="container p-relative z-index-1">
        <div className="row align-items-center">
          
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* 🚀 HIGH-IMPACT BRANDING BADGE */}
              <div style={{ marginBottom: "24px", display: "flex", justifyContent: "left", paddingTop: "80px" }}>
                <span style={{ 
                  fontFamily: "var(--font-primary), sans-serif",
                  fontWeight: 950,
                  fontSize: "1rem",
                  color: "#3b82f6",
                  textTransform: "uppercase",
                  letterSpacing: "6px",
                  background: "rgba(59, 130, 246, 0.1)",
                  padding: "8px 24px",
                  borderRadius: "50px",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                  display: "inline-block"
                }}>
                  UAE’S UNIFIED ADMISSION PLATFORM
                </span>
              </div>

              <h1 style={{ 
                fontSize: "clamp(3.5rem, 8vw, 5.5rem)", 
                fontWeight: 900, 
                lineHeight: 1.05, 
                color: "#fff", 
                marginBottom: "28px",
                letterSpacing: "-3px"
              }}>
                One Platform.<br />
                <span style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  All UAE Universities.
                </span><br />
                Global Access.
              </h1>

              <h2 style={{ 
                fontSize: "2.8rem", 
                fontWeight: 800, 
                color: "#94a3b8", 
                marginBottom: "28px",
                lineHeight: 1.2
              }}>
                Study in UAE™ Ecosystem.
              </h2>

              <p style={{ 
                fontSize: "1.45rem", 
                lineHeight: 1.6, 
                color: "#cbd5e1", 
                marginBottom: "48px",
                maxWidth: "600px"
              }}>
                SIU – Study in UAE™ is a premium ecosystem bringing international students into a structured, transparent, and scalable admission journey.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
                <button className="siu-btn-primary">Download App</button>
                <button className="siu-btn-secondary">Explore Universities</button>
              </div>

              {/* Trust Badges */}
              <div style={{ display: "flex", gap: "24px", opacity: 0.8 }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "3rem", fontWeight: 800, color: "#fff" }}>100+</span>
                  <span style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>Universities</span>
                </div>
                <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "3rem", fontWeight: 800, color: "#fff" }}>500+</span>
                  <span style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>Programs</span>
                </div>
                <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "3rem", fontWeight: 800, color: "#fff" }}>100%</span>
                  <span style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>Online</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL: Horizontal Mobile Frame */}
          <div className="col-lg-6 mt-100 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              style={{ position: "relative", display: "flex", justifyContent: "center", paddingTop: "80px" }}
            >
              {/* Clean Premium Mobile Frame */}
              <div style={{ 
                width: "280px", 
                height: "560px", 
                background: "#0f172a", 
                borderRadius: "44px", 
                border: "10px solid #1e293b",
                boxShadow: "0 25px 60px rgba(0,0,0,0.9), 0 0 40px rgba(59, 130, 246, 0.15)",
                position: "relative",
                overflow: "hidden"
              }}>
                {/* Glossy Overlay */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "100%",
                  background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, transparent 40%)",
                  pointerEvents: "none",
                  zIndex: 5
                }} />

                {/* Horizontal Infinite Slider */}
                <motion.div 
                  animate={{ x: [0, -3120] }} // 260 * 12 = 3120
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  style={{ display: "flex", height: "100%", width: "max-content" }}
                >
                  {[
                    "/assets/images/about/screen1.jpeg",
                    "/assets/images/about/screen2.jpeg",
                    "/assets/images/about/screen3.jpeg",
                    "/assets/images/about/screen4.jpeg",
                    "/assets/images/about/screen5.jpeg",
                    "/assets/images/about/screen6.jpeg",
                    "/assets/images/about/screen7.jpeg",
                    "/assets/images/about/screen8.jpeg",
                    "/assets/images/about/screen9.jpeg",
                    "/assets/images/about/SIU%20(1).jpeg",
                    "/assets/images/about/SIU%20(2).jpeg",
                    "/assets/images/about/SIU%20(3).jpeg",
                    "/assets/images/about/screen1.jpeg" // Loop back to start
                  ].map((src, i) => (
                    <div key={i} style={{ width: "260px", height: "560px", flexShrink: 0 }}>
                      <img 
                        src={src} 
                        alt={`Screen ${i}`}
                        style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover"
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Decorative floating elements */}
              <div style={{ position: "absolute", top: "20px", right: "-20px", width: "60px", height: "60px", background: "rgba(59, 130, 246, 0.2)", borderRadius: "50%", filter: "blur(20px)", zIndex: -1 }} />
              <div style={{ position: "absolute", bottom: "40px", left: "-30px", width: "80px", height: "80px", background: "rgba(6, 182, 212, 0.2)", borderRadius: "50%", filter: "blur(25px)", zIndex: -1 }} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
