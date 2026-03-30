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
                <h2 className="download-app-title" style={{ fontSize: "4.5rem", fontWeight: 950, color: "#ffffff", marginBottom: "24px", lineHeight: 1.1, letterSpacing: "-3px" }}>
                  SIU in Your Pocket.
                </h2>
                <p className="download-app-desc" style={{ fontSize: "1.5rem", color: "#cbd5e1", marginBottom: "48px", lineHeight: 1.6, maxWidth: "600px" }}>
                  Manage your applications, track scholarships, and receive real-time notifications on the go with the SIU mobile experience.
                </p>

                <div className="download-app-btns" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
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
            padding: 40px 24px !important;
            border-radius: 32px !important;
          }

          .download-app-text-col {
            text-align: center !important;
          }

          .download-app-badge {
            font-size: 0.85rem !important;
            margin-bottom: 12px !important;
          }

          .download-app-title {
            font-size: 2.8rem !important;
            letter-spacing: -1.5px !important;
            margin-bottom: 20px !important;
          }

          .download-app-desc {
            font-size: 1.1rem !important;
            margin-bottom: 32px !important;
            max-width: 100% !important;
            margin-left: auto;
            margin-right: auto;
          }

          .download-app-btns {
            justify-content: center !important;
            gap: 16px !important;
          }

          .download-app-btns a {
            padding: 12px 20px !important;
            width: 100% !important;
            max-width: 260px;
            justify-content: center !important;
            border-radius: 12px !important;
          }

          .download-app-visual-col {
            margin-top: 48px !important;
            display: flex;
            justify-content: center;
          }

          .download-app-visual-wrapper {
            max-width: 320px;
            border-radius: 32px !important;
          }

          .download-app-visual-wrapper img {
            border-radius: 24px !important;
          }

          .download-app-overlay-hint {
            bottom: 20px !important;
            left: 20px !important;
            font-size: 0.8rem !important;
            padding: 8px 16px !important;
          }
        }

        @media (max-width: 480px) {
          .download-app-title {
            font-size: 2.2rem !important;
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
