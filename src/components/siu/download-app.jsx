"use client";
import React from "react";
import { motion } from "framer-motion";

const DownloadApp = () => {
  return (
    <section id="download-app" className="download-app-section" style={{ padding: "120px 0", background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)", position: "relative", overflow: "hidden" }}>
      {/* Decorative Blur */}
      <div style={{ position: "absolute", bottom: "-10%", left: "10%", width: "400px", height: "400px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "50%", filter: "blur(100px)", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="download-app-inner" style={{ padding: "80px", overflow: "hidden", position: "relative", background: "rgba(255, 255, 255, 0.03)", borderRadius: "48px", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(20px)" }}>
          <div className="row align-items-center">
            {/* TEXT CONTENT */}
            <div className="col-lg-7 download-app-text-col">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="download-app-badge" style={{ color: "#3b82f6", fontWeight: 800, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: "20px" }}>
                  Seamless Mobility
                </span>
                <h2 className="download-app-title" style={{ fontSize: "4.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "24px", lineHeight: 1.1, letterSpacing: "-3px" }}>
                  SIU in Your Pocket.
                </h2>
                <p className="download-app-desc" style={{ fontSize: "1.5rem", color: "#cbd5e1", marginBottom: "48px", lineHeight: 1.6, maxWidth: "600px" }}>
                  Manage your applications, track scholarships, and receive real-time notifications on the go with the SIU mobile experience.
                </p>

                <div className="download-app-btns" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  {/* App Store Button */}
                  <div style={{ position: "relative" }}>
                    <motion.a 
                      whileHover={{ scale: 1 }}
                      href="#" 
                      style={{ 
                        padding: "16px 32px", 
                        background: "#ffffff", 
                        borderRadius: "16px", 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "12px", 
                        textDecoration: "none",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        opacity: 0.7,
                        cursor: "not-allowed",
                        pointerEvents: "none"
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 384 512" fill="#000000">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                      </svg>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="store-label" style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>Download on the</span>
                        <span className="store-name" style={{ fontSize: "1.1rem", color: "#0f172a", fontWeight: 800 }}>App Store</span>
                      </div>
                    </motion.a>
                    <span style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                      color: "#fff",
                      fontSize: "0.6rem",
                      fontWeight: 900,
                      padding: "3px 8px",
                      borderRadius: "20px",
                      boxShadow: "0 4px 12px rgba(245, 158, 11, 0.3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      zIndex: 2,
                      pointerEvents: "none"
                    }}>
                      Coming Soon
                    </span>
                  </div>

                  {/* Google Play Button */}
                  <div style={{ position: "relative" }}>
                    <motion.a 
                      whileHover={{ scale: 1 }}
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
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        opacity: 0.7,
                        cursor: "not-allowed",
                        pointerEvents: "none"
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 512 512" fill="none">
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="#ffffff"/>
                      </svg>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="store-label" style={{ fontSize: "0.75rem", color: "#cbd5e1", fontWeight: 600 }}>GET IT ON</span>
                        <span className="store-name" style={{ fontSize: "1.1rem", color: "#ffffff", fontWeight: 800 }}>Google Play</span>
                      </div>
                    </motion.a>
                    <span style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                      color: "#fff",
                      fontSize: "0.6rem",
                      fontWeight: 900,
                      padding: "3px 8px",
                      borderRadius: "20px",
                      boxShadow: "0 4px 12px rgba(245, 158, 11, 0.3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      zIndex: 2,
                      pointerEvents: "none"
                    }}>
                      Coming Soon
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* VISUAL / MOCKUP */}
            <div className="col-lg-5 mt-5 mt-lg-0 download-app-visual-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ position: "relative" }}
              >
                {/* Image Container */}
                <div className="download-app-visual-wrapper" style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "48px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "12px",
                  boxShadow: "0 20px 80px rgba(0,0,0,0.3)",
                  backdropFilter: "blur(10px)",
                  overflow: "hidden",
                  position: "relative"
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
                  <div className="download-app-overlay-hint" style={{
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
      <style jsx>{`
        @media (max-width: 991px) {
          #download-app {
            padding: 60px 0 !important;
          }
          
          .download-app-inner {
            padding: 40px 20px !important;
            border-radius: 32px !important;
          }

          .download-app-text-col {
            text-align: center !important;
            padding: 0 10px !important;
          }

          .download-app-badge {
            font-size: 0.8rem !important;
            margin-bottom: 12px !important;
          }

          .download-app-title {
            font-size: 2rem !important;
            letter-spacing: -1px !important;
            margin-bottom: 14px !important;
          }

          .download-app-desc {
            font-size: 0.95rem !important;
            margin-bottom: 28px !important;
            max-width: 100% !important;
            margin-left: auto;
            margin-right: auto;
            color: rgba(255,255,255,0.7) !important;
            line-height: 1.6 !important;
          }

          .download-app-btns {
            justify-content: center !important;
            gap: 12px !important;
          }

          .download-app-btns a {
            padding: 12px 20px !important;
            width: 100% !important;
            max-width: 240px;
            justify-content: center !important;
            border-radius: 14px !important;
          }

          .download-app-btns svg {
            width: 22px !important;
            height: 22px !important;
          }

          .store-label {
            font-size: 0.65rem !important;
          }

          .store-name {
            font-size: 0.95rem !important;
          }

          .download-app-visual-col {
            margin-top: 40px !important;
            display: flex;
            justify-content: center;
          }

          .download-app-visual-wrapper {
            max-width: 260px;
            border-radius: 24px !important;
          }

          .download-app-visual-wrapper img {
            border-radius: 20px !important;
          }

          .download-app-overlay-hint {
            bottom: 15px !important;
            left: 15px !important;
            font-size: 0.7rem !important;
            padding: 6px 12px !important;
          }
        }

        @media (max-width: 480px) {
          .download-app-title {
            font-size: 1.8rem !important;
          }
          .download-app-btns a {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default DownloadApp;
