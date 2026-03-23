"use client";
import React from "react";
import { motion } from "framer-motion";

const Closing = () => {
  return (
    <section id="cta" style={{ padding: "120px 0", background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
      {/* Decorative Blur */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "rgba(59, 130, 246, 0.05)", borderRadius: "50%", filter: "blur(120px)", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: "clamp(2rem, 4vw, 3rem)", 
              fontWeight: 700, 
              color: "#cbd5e1", 
              marginBottom: "32px",
              lineHeight: 1.2,
              letterSpacing: "-1px"
            }}
          >
            A Unified Vision for the Future.
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ 
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)", 
              fontWeight: 950, 
              color: "#fff", 
              lineHeight: 1, 
              marginBottom: "48px",
              letterSpacing: "-4px" 
            }}
          >
            SIU will unify the world’s <br />
            <span style={{ color: "#3b82f6" }}>access to UAE.</span>
          </motion.h2>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="siu-btn-primary" style={{ padding: "16px 48px", fontSize: "1.1rem" }}>Download Now</button>
            <button className="siu-btn-secondary" style={{ padding: "16px 48px", fontSize: "1.1rem" }}>Contact Support</button>
          </div>

          {/* Branding Ticker */}
          <div style={{ 
            marginTop: "120px", 
            borderTop: "1px solid rgba(255,255,255,0.08)", 
            paddingTop: "60px",
            overflow: "hidden",
            position: "relative"
          }}>
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ 
                display: "flex", 
                gap: "50px", 
                whiteSpace: "nowrap", 
                alignItems: "center",
                width: "max-content" 
              }}
            >
              {[1, 2, 3].map((_, repeat) => (
                <div key={repeat} style={{ display: "flex", gap: "50px", alignItems: "center" }}>
                  {[
                    "One Platform. All UAE Universities. Global Access.",
                    "Your Gateway to Study, Work & Grow in UAE",
                    "From Admission to Employment – One Unified Journey"
                  ].map((line, i) => (
                    <React.Fragment key={i}>
                      <span style={{ 
                        color: "#ffffff", 
                        fontWeight: 700, 
                        fontSize: "1.2rem", 
                        textTransform: "uppercase", 
                        letterSpacing: "2px",
                        opacity: 0.9,
                        display: "flex",
                        alignItems: "center"
                      }}>
                        {line}
                      </span>
                      <span style={{ color: "#3b82f6", fontSize: "1.5rem", fontWeight: 900 }}>•</span>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Closing;
