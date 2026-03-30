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
              {/* BRANDING BADGE */}
              <div className="hero-badge-wrapper" style={{ marginBottom: "12px", display: "flex", justifyContent: "left", paddingTop: "130px" }}>
                <span className="hero-badge" style={{ 
                  fontFamily: "var(--font-primary), sans-serif",
                  fontWeight: 950,
                  fontSize: "1rem",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "4px",
                  background: "rgba(59, 130, 246, 0.15)",
                  padding: "10px 28px",
                  borderRadius: "50px",
                  border: "1px solid rgba(59, 130, 246, 0.4)",
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)",
                  display: "inline-block",
                  lineHeight: 1.2
                }}>
                  UAE'S UNIFIED ADMISSION PLATFORM
                </span>
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(3.5rem, 8vw, 5.5rem)", 
                fontWeight: 600, 
                lineHeight: 1.05, 
                color: "#fff", 
                marginBottom: "32px",
                letterSpacing: "-3px"
              }}>
                One Platform.<br />
                <span style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  All UAE Universities.
                </span><br />
                Global Access.
              </h1>

              <h2 className="hero-h2" style={{ 
                fontSize: "2.8rem", 
                fontWeight: 800, 
                color: "#94a3b8", 
                marginBottom: "28px",
                lineHeight: 1.2
              }}>
                Study in UAE™ Ecosystem.
              </h2>

              <p className="hero-desc" style={{ 
                fontSize: "1.45rem", 
                lineHeight: 1.6, 
                color: "#cbd5e1", 
                marginBottom: "48px",
                maxWidth: "600px"
              }}>
                SIU – Study in UAE™ is a premium ecosystem bringing international students into a structured, transparent, and scalable admission journey.
              </p>

              <div className="hero-btns" style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
                <button className="siu-btn-primary">DOWNLOAD  APP</button>
                <a href="#universities" className="siu-btn-secondary" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  Explore Universities
                </a>
              </div>

              {/* Trust Badges */}
              <div className="hero-stats" style={{ display: "flex", gap: "24px", opacity: 0.8 }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="hero-stat-num" style={{ fontSize: "3rem", fontWeight: 800, color: "#fff" }}>100+</span>
                  <span className="hero-stat-label" style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>Universities</span>
                </div>
                <div className="hero-stat-divider" style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="hero-stat-num" style={{ fontSize: "3rem", fontWeight: 800, color: "#fff" }}>500+</span>
                  <span className="hero-stat-label" style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>Programs</span>
                </div>
                <div className="hero-stat-divider" style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="hero-stat-num" style={{ fontSize: "3rem", fontWeight: 800, color: "#fff" }}>100%</span>
                  <span className="hero-stat-label" style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>Online</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL: Phone Frame */}
          <div className="col-lg-6 col-12 hero-phone-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              style={{ position: "relative", display: "flex", justifyContent: "center", paddingTop: "80px" }}
            >
              {/* Clean Premium Mobile Frame */}
              <div className="hero-phone-frame" style={{ 
                width: "280px", 
                height: "560px", 
                background: "#0f172a", 
                borderRadius: "44px", 
                border: "10px solid #ffffff",
                boxShadow: "0 25px 60px rgba(0,0,0,0.9), 0 0 40px rgba(59, 130, 246, 0.15)",
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "100%",
                  background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, transparent 40%)",
                  pointerEvents: "none", zIndex: 5
                }} />

                <motion.div 
                  animate={{ x: [0,0,-260,-260,-520,-520,-780,-780,-1040,-1040,-1300,-1300,-1560,-1560,-1820,-1820,-2080,-2080,-2340,-2340,-2600,-2600,-2860,-2860,-3120] }}
                  transition={{ 
                    duration: 45, repeat: Infinity, ease: "easeInOut",
                    times: [0,0.07,0.08,0.15,0.16,0.23,0.24,0.31,0.32,0.39,0.40,0.47,0.48,0.55,0.56,0.63,0.64,0.71,0.72,0.79,0.80,0.87,0.88,0.95,1]
                  }}
                  style={{ display: "flex", height: "100%", width: "max-content" }}
                >
                  {[
                    { src: "/assets/images/about/SIU%20(3).jpeg", badge: "PAY ONCE • APPLY TO MANY", title: "One Application.\nMultiple Universities.", desc: "Apply to top UAE universities with a single form" },
                    { src: "/assets/images/about/SIU%20(2).jpeg", badge: "SMART DISCOVERY", title: "Discover & Shortlist Your Dream Programs", desc: "Browse programs, compare universities, and build your shortlist" },
                    { src: "/assets/images/about/SIU%20(1).jpeg", badge: "END-TO-END SUPPORT", title: "We Handle Your Entire Admission", desc: "From document submission to offer letters — handled end-to-end." },
                    { src: "/assets/images/about/screen1.jpeg" },
                    { src: "/assets/images/about/screen2.jpeg" },
                    { src: "/assets/images/about/screen3.jpeg" },
                    { src: "/assets/images/about/screen4.jpeg" },
                    { src: "/assets/images/about/screen5.jpeg" },
                    { src: "/assets/images/about/screen6.jpeg" },
                    { src: "/assets/images/about/screen7.jpeg" },
                    { src: "/assets/images/about/screen8.jpeg" },
                    { src: "/assets/images/about/screen9.jpeg" },
                    { src: "/assets/images/about/SIU%20(3).jpeg", badge: "PAY ONCE • APPLY TO MANY", title: "One Application.\nMultiple Universities.", desc: "Apply to top UAE universities with a single form" }
                  ].map((slide, i) => (
                    <div key={i} style={{ width: "260px", height: "560px", flexShrink: 0, position: "relative" }}>
                      <img src={slide.src} alt={`Screen ${i}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      {slide.badge && (
                        <>
                          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%", background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.4) 40%, transparent 100%)", zIndex: 1 }} />
                          <div style={{ position: "absolute", bottom: "40px", left: "20px", right: "20px", zIndex: 2, textAlign: "left" }}>
                            <span style={{ fontSize: "0.65rem", fontWeight: 950, color: "#fff", background: "rgba(255,255,255,0.15)", padding: "6px 12px", borderRadius: "50px", border: "1px solid rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "1px", display: "inline-block", marginBottom: "12px", backdropFilter: "blur(4px)" }}>
                              {slide.badge}
                            </span>
                            <h4 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "10px", whiteSpace: "pre-line" }}>{slide.title}</h4>
                            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.4, margin: 0 }}>{slide.desc}</p>
                            <div style={{ display: "flex", gap: "6px", marginTop: "20px", opacity: 0.6 }}>
                              {[0,1,2].map((dot) => (
                                <div key={dot} style={{ width: dot===i?"24px":"4px", height: "4px", borderRadius: "4px", background: dot===i?"#3b82f6":"rgba(255,255,255,0.3)", transition: "all 0.3s ease" }} />
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>

              <div style={{ position: "absolute", top: "20px", right: "-20px", width: "60px", height: "60px", background: "rgba(59,130,246,0.2)", borderRadius: "50%", filter: "blur(20px)", zIndex: -1 }} />
              <div style={{ position: "absolute", bottom: "40px", left: "-30px", width: "80px", height: "80px", background: "rgba(6,182,212,0.2)", borderRadius: "50%", filter: "blur(25px)", zIndex: -1 }} />
            </motion.div>
          </div>

        </div>
      </div>

      <style jsx>{`
        /* ====== MOBILE ONLY — ≤991px ====== */
        @media (max-width: 991px) {

          .siu-hero-section {
            min-height: auto !important;
            padding-top: 0 !important;
            padding-bottom: 30px !important;
          }

          /* Badge — reduce top gap, center */
          .hero-badge-wrapper {
            justify-content: center !important;
            padding-top: 120px !important;
          }
          .hero-badge {
            font-size: 0.65rem !important;
            letter-spacing: 2px !important;
            padding: 6px 14px !important;
          }

          /* Headings — center */
          .hero-h1 {
            font-size: 2.4rem !important;
            letter-spacing: -1px !important;
            margin-bottom: 10px !important;
            text-align: center !important;
          }
          .hero-h2 {
            font-size: 1.5rem !important;
            margin-bottom: 10px !important;
            text-align: center !important;
          }
          .hero-desc {
            font-size: 1rem !important;
            margin-bottom: 20px !important;
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            max-width: 100% !important;
          }

          /* Buttons — centered */
          .hero-btns {
            justify-content: center !important;
            gap: 12px !important;
            margin-bottom: 20px !important;
          }
          .hero-btns .siu-btn-primary,
          .hero-btns .siu-btn-secondary {
            flex: 1 1 140px !important;
            text-align: center !important;
            padding: 12px 10px !important;
            font-size: 0.85rem !important;
          }

          /* Stats — centered, tighter */
          .hero-stats {
            justify-content: center !important;
            gap: 16px !important;
            margin-bottom: 0px !important;
          }
          .hero-stat-num {
            font-size: 2rem !important;
          }
          .hero-stat-label {
            font-size: 0.75rem !important;
          }

          /* Phone mockup — smaller, tighter gap above */
          .hero-phone-col {
            display: flex !important;
            justify-content: center !important;
            margin-top: -25px !important;
          }
          .hero-phone-col > div {
            padding-top: 0 !important;
          }
          .hero-phone-frame {
            width: 200px !important;
            height: 400px !important;
            border-radius: 32px !important;
            border-width: 7px !important;
          }
        }

        /* Extra small */
        @media (max-width: 400px) {
          .hero-h1 { font-size: 2rem !important; }
          .hero-h2 { font-size: 1.3rem !important; }
          .hero-btns .siu-btn-primary,
          .hero-btns .siu-btn-secondary { flex: 0 0 100% !important; }
          .hero-phone-frame { width: 170px !important; height: 340px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
