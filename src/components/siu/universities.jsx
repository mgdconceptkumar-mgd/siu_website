"use client";
import React from "react";
import { motion } from "framer-motion";

const Universities = () => {
  const dubaiUnis = [
    { name: "Middlesex University Dubai", img: "/siu-assets/middlesex_logo.png", isIndividual: true },
    { name: "University of Birmingham", img: "/siu-assets/birmingham_logo.png", isIndividual: true },
    { name: "University of Wollongong", img: "/siu-assets/wollongong_logo.png", isIndividual: true },
    { name: "University of Dubai", img: "/siu-assets/udubai_logo.png", isIndividual: true },
    { name: "Zayed University", img: "/siu-assets/zayed_logo.png", isIndividual: true },
    { name: "American Univ. in Dubai", img: "/siu-assets/aud_logo.png", isIndividual: true },
    { name: "Canadian Univ. Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: 0, y: 0 } },
    { name: "Murdoch Univ. Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: -100, y: 0 } },
    { name: "Amity Univ. Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: 0, y: -100 } },
    { name: "BITS Pilani Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: -100, y: -100 } },
    { name: "Heriot-Watt Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: 0, y: -200 } },
  ];

  return (
    <section id="universities" style={{ padding: "120px 0", background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)", overflow: "hidden" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: "4.2rem", 
              fontWeight: 900, 
              color: "#ffffff", 
              marginBottom: "28px",
              letterSpacing: "-3px"
            }}
          >
            A Global Network of Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontSize: "1.6rem", 
              color: "#cbd5e1", 
              maxWidth: "900px", 
              margin: "0 auto 80px",
              lineHeight: 1.6
            }}
          >
            SIU connects you to Dubai’s premier federal and private institutions, creating a unified gateway to world-class education.
          </motion.p>
        </div>

        {/* Logo Marquee */}
        <div style={{ position: "relative", width: "100%", overflow: "hidden", padding: "20px 0" }}>
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex", gap: "32px", width: "max-content", alignItems: "center" }}
          >
            {[...dubaiUnis, ...dubaiUnis].map((uni, i) => (
              <div 
                key={i} 
                className="siu-glass-card"
                style={{
                  padding: "24px 48px",
                  display: "flex",
                  alignItems: "center",
                  gap: "28px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "28px",
                  backdropFilter: "blur(20px)",
                  minWidth: "450px"
                }}
              >
                {/* LOGO CONTAINER - Reverted to White */}
                <div style={{ 
                  width: "90px", 
                  height: "90px", 
                  overflow: "hidden", 
                  borderRadius: "18px", 
                  background: "#ffffff", 
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: uni.isIndividual ? "12px" : "0",
                  flexShrink: 0
                }}>
                  <img 
                    src={uni.img} 
                    alt={uni.name}
                    style={uni.isIndividual ? {
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain"
                    } : {
                      position: "absolute",
                      width: "200%",
                      height: "300%",
                      top: `${uni.pos.y}%`,
                      left: `${uni.pos.x}%`,
                      objectFit: "fill"
                    }}
                  />
                </div>
                
                <h4 style={{ 
                  color: "#ffffff", 
                  fontWeight: 800, 
                  fontSize: "1.4rem", 
                  margin: 0,
                  letterSpacing: "-0.5px",
                  lineHeight: 1.2
                }}>
                  {uni.name}
                </h4>
              </div>
            ))}
          </motion.div>
        </div>

        <div style={{ 
          marginTop: "100px", 
          textAlign: "center", 
          background: "rgba(255, 255, 255, 0.03)", 
          padding: "80px", 
          borderRadius: "48px", 
          border: "1px solid rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(40px)"
        }}>
          <h3 style={{ color: "#ffffff", fontSize: "4.5rem", fontWeight: 700, marginBottom: "40px", letterSpacing: "-3px" }}>
            Strategic Positioning
          </h3>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "2.2rem", lineHeight: 1.5, maxWidth: "1100px", margin: "0 auto", fontWeight: 500, fontStyle: "italic" }}>
            “SIU extends this vision globally—bringing international students into a structured, transparent, and scalable ecosystem.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Universities;
