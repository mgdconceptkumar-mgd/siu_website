"use client";
import React from "react";
import { motion } from "framer-motion";

const DownloadApp = () => {
  return (
    <section id="download-app" style={{ padding: "120px 0", background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)", position: "relative", overflow: "hidden" }}>
      {/* Decorative Blur */}
      <div style={{ position: "absolute", bottom: "-10%", left: "10%", width: "400px", height: "400px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "50%", filter: "blur(100px)", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ padding: "80px", overflow: "hidden", position: "relative", background: "rgba(255, 255, 255, 0.03)", borderRadius: "48px", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(20px)" }}>
          <div className="row align-items-center">
            {/* TEXT CONTENT */}
            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span style={{ color: "#3b82f6", fontWeight: 800, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: "20px" }}>
                  Seamless Mobility
                </span>
                <h2 style={{ fontSize: "4.5rem", fontWeight: 950, color: "#ffffff", marginBottom: "24px", lineHeight: 1.1, letterSpacing: "-3px" }}>
                  SIU in Your Pocket.
                </h2>
                <p style={{ fontSize: "1.5rem", color: "#cbd5e1", marginBottom: "48px", lineHeight: 1.6, maxWidth: "600px" }}>
                  Manage your applications, track scholarships, and receive real-time notifications on the go with the SIU mobile experience.
                </p>

                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    href="#" 
                    style={{ 
                      padding: "16px 32px", 
                      background: "#ffffff", 
                      borderRadius: "16px", 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "12px", 
                      textDecoration: "none",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>🍏</span>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>Download on the</span>
                      <span style={{ fontSize: "1.1rem", color: "#0f172a", fontWeight: 800 }}>App Store</span>
                    </div>
                  </motion.a>

                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    href="#" 
                    style={{ 
                      padding: "16px 32px", 
                      background: "rgba(255, 255, 255, 0.1)", 
                      borderRadius: "16px", 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "12px", 
                      textDecoration: "none",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>🤖</span>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "0.75rem", color: "#cbd5e1", fontWeight: 600 }}>GET IT ON</span>
                      <span style={{ fontSize: "1.1rem", color: "#ffffff", fontWeight: 800 }}>Google Play</span>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* VISUAL / MOCKUP */}
            <div className="col-lg-5 mt-5 mt-lg-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ position: "relative" }}
              >
                {/* Image Container */}
                <div style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "48px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "12px",
                  boxShadow: "0 20px 80px rgba(0,0,0,0.3)",
                  backdropFilter: "blur(10px)",
                  overflow: "hidden"
                }}>
                  <img 
                    src="/siu-assets/student_mobile_university.png" 
                    alt="Student using SIU Mobile App"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "36px",
                      opacity: 0.9
                    }}
                  />
                  
                  {/* Glass overlay hint */}
                  <div style={{
                    position: "absolute",
                    bottom: "35px",
                    left: "35px",
                    padding: "12px 24px",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    letterSpacing: "1px"
                  }}>
                    READY FOR UAE 🇦🇪
                  </div>
                </div>

                {/* Decorative Blur behind image */}
                <div style={{ position: "absolute", inset: "-10%", background: "rgba(59, 130, 246, 0.15)", filter: "blur(80px)", zIndex: -1, borderRadius: "50%" }} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
