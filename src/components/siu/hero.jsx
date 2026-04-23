"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const Hero = () => {
  const { lang, t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 991);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Phone dimensions based on screen ──
  const phoneW = isMobile ? 200 : 280;
  const phoneH = isMobile ? 400 : 560;
  const borderW = isMobile ? 7 : 10;
  const slideW = phoneW - borderW * 2; // inner content width

  const slides = [
    { 
      src: "/assets/images/about/SIU%20(3).jpeg", 
      badge: t("hero.slides.0.badge"), 
      title: t("hero.slides.0.title"), 
      desc: t("hero.slides.0.desc") 
    },
    { 
      src: "/assets/images/about/SIU%20(2).jpeg", 
      badge: t("hero.slides.1.badge"), 
      title: t("hero.slides.1.title"), 
      desc: t("hero.slides.1.desc") 
    },
    { 
      src: "/assets/images/about/SIU%20(1).jpeg", 
      badge: t("hero.slides.2.badge"), 
      title: t("hero.slides.2.title"), 
      desc: t("hero.slides.2.desc") 
    },
    // Dynamically include screens based on language
    ...(lang === "ar" 
      ? [
          { src: "/assets/images/about/screen1_ar.jpeg" },
          { src: "/assets/images/about/screen2_ar.jpeg" },
          { src: "/assets/images/about/screen3_ar.jpeg" },
          { src: "/assets/images/about/screen4_ar.jpeg" },
          { src: "/assets/images/about/screen5_ar.jpeg" },
          { src: "/assets/images/about/screen6_ar.jpeg" },
        ]
      : [
          { src: "/assets/images/about/screen1.jpeg" },
          { src: "/assets/images/about/screen2.jpeg" },
          { src: "/assets/images/about/screen3.jpeg" },
          { src: "/assets/images/about/screen4.jpeg" },
          { src: "/assets/images/about/screen5.jpeg" },
          { src: "/assets/images/about/screen6.jpeg" },
          { src: "/assets/images/about/screen7.jpeg" },
          { src: "/assets/images/about/screen8.jpeg" },
          { src: "/assets/images/about/screen9.jpeg" },
        ]
    ),
    { 
      src: "/assets/images/about/SIU%20(3).jpeg", 
      badge: t("hero.slides.0.badge"), 
      title: t("hero.slides.0.title"), 
      desc: t("hero.slides.0.desc") 
    }
  ];

  // Build animation keyframes: hold → snap → hold → snap ...
  const totalSlides = slides.length;
  const xValues = [];
  const timeValues = [];
  for (let i = 0; i < totalSlides; i++) {
    const offset = -i * slideW;
    xValues.push(offset, offset);  // hold position twice (enter, stay)
  }
  // Remove last duplicate
  xValues.pop();

  const steps = xValues.length;
  for (let i = 0; i < steps; i++) {
    timeValues.push(i / (steps - 1));
  }

  return (
    <section
      id="hero"
      className="siu-hero-section pt-120 pb-100 p-relative overflow-hidden"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)",
        position: "relative",
        fontFamily: "var(--font-primary), sans-serif",
        direction: lang === "ar" ? "rtl" : "ltr"
      }}
    >
      {/* Background Decorative Glows */}
      <div style={{ position: "absolute", top: "20%", left: lang === "ar" ? "auto" : "10%", right: lang === "ar" ? "10%" : "auto", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)", filter: "blur(60px)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "10%", right: lang === "ar" ? "auto" : "10%", left: lang === "ar" ? "10%" : "auto", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 0 }} />

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
              <div className="hero-badge-wrapper" style={{ marginBottom: "12px", display: "flex", justifyContent: lang === "ar" ? "right" : "left", paddingTop: "90px" }}>
                <span className="hero-badge" style={{
                  fontFamily: "var(--font-primary), sans-serif",
                  fontWeight: 950,
                  fontSize: "1rem",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: lang === "ar" ? "0" : "4px",
                  background: "rgba(59, 130, 246, 0.15)",
                  padding: "10px 28px",
                  borderRadius: "50px",
                  border: "1px solid rgba(59, 130, 246, 0.4)",
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)",
                  display: "inline-block",
                  lineHeight: 1.2
                }}>
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="hero-h1" style={{
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                fontWeight: 600,
                lineHeight: 1.05,
                color: "#fff",
                marginBottom: "32px",
                letterSpacing: lang === "ar" ? "0" : "-3px",
                textAlign: lang === "ar" ? "right" : "left"
              }}>
                {t("hero.main_title_part1")}<br />
                <span style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {t("hero.main_title_gradient")}
                </span><br />
                {t("hero.main_title_part2")}
              </h1>

              <h2 className="hero-h2" style={{
                fontSize: "2.8rem",
                fontWeight: 800,
                color: "#94a3b8",
                marginBottom: "28px",
                lineHeight: 1.2,
                textAlign: lang === "ar" ? "right" : "left"
              }}>
                {t("hero.subtitle")}
              </h2>

              <p className="hero-desc" style={{
                fontSize: "1.45rem",
                lineHeight: 1.6,
                color: "#cbd5e1",
                marginBottom: "48px",
                maxWidth: "600px",
                textAlign: lang === "ar" ? "right" : "left",
                marginLeft: lang === "ar" ? "auto" : "0",
                marginRight: lang === "ar" ? "0" : "auto"
              }}>
                {t("hero.description")}
              </p>

              <div className="hero-btns" style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px", justifyContent: lang === "ar" ? "flex-start" : "flex-start" }}>
                {/* Download App Button with Coming Soon Badge */}
                <div style={{ position: "relative", display: "inline-block" }}>
                  <button
                    className="siu-btn-primary"
                    style={{
                      opacity: 0.7,
                      cursor: "not-allowed",
                      pointerEvents: "none",
                      filter: "grayscale(0.3)"
                    }}
                  >
                    {t("hero.btn_download")}
                  </button>
                  <span style={{
                    position: "absolute",
                    top: "-12px",
                    right: lang === "ar" ? "auto" : "-12px",
                    left: lang === "ar" ? "-12px" : "auto",
                    background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 900,
                    padding: "4px 10px",
                    borderRadius: "20px",
                    boxShadow: "0 4px 12px rgba(245, 158, 11, 0.3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    zIndex: 2,
                    pointerEvents: "none"
                  }}>
                    {t("header.coming_soon")}
                  </span>
                </div>

                <a href="#universities" className="siu-btn-secondary" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  {t("hero.btn_explore")}
                </a>
              </div>

              {/* Trust Badges */}
              <div className="hero-stats" style={{ display: "flex", gap: "24px", opacity: 0.8, justifyContent: lang === "ar" ? "flex-start" : "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="hero-stat-num" style={{ fontSize: "3rem", fontWeight: 800, color: "#fff" }}>100+</span>
                  <span className="hero-stat-label" style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>{t("hero.stat_universities")}</span>
                </div>
                <div className="hero-stat-divider" style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="hero-stat-num" style={{ fontSize: "3rem", fontWeight: 800, color: "#fff" }}>500+</span>
                  <span className="hero-stat-label" style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>{t("hero.stat_programs")}</span>
                </div>
                <div className="hero-stat-divider" style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="hero-stat-num" style={{ fontSize: "3rem", fontWeight: 800, color: "#fff" }}>100%</span>
                  <span className="hero-stat-label" style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>{t("hero.stat_online")}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL: Phone Frame */}
          <div className="col-lg-6 col-12 hero-phone-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: lang === "ar" ? -50 : 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              style={{ position: "relative", display: "flex", justifyContent: "center", paddingTop: isMobile ? "0" : "80px" }}
            >
              {/* Phone Frame */}
              <div className="hero-phone-frame" style={{
                width: `${phoneW}px`,
                height: `${phoneH}px`,
                background: "#0f172a",
                borderRadius: isMobile ? "32px" : "44px",
                border: `${borderW}px solid #ffffff`,
                boxShadow: "0 25px 60px rgba(0,0,0,0.9), 0 0 40px rgba(59, 130, 246, 0.15)",
                position: "relative",
                overflow: "hidden",
                direction: "ltr" // Phone screen content is essentially a screenshot, keep layout LTR for the mockup
              }}>
                {/* Glass reflection */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "100%",
                  background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, transparent 40%)",
                  pointerEvents: "none", zIndex: 5
                }} />

                {/* Carousel */}
                <motion.div
                  key={slideW}
                  animate={{ x: xValues }}
                  transition={{
                    duration: 45, repeat: Infinity, ease: "easeInOut",
                    times: timeValues
                  }}
                  style={{ display: "flex", height: "100%", width: "max-content" }}
                >
                  {slides.map((slide, i) => (
                    <div key={i} style={{ width: `${slideW}px`, height: `${phoneH - borderW * 2}px`, flexShrink: 0, position: "relative" }}>
                      <img 
                        src={slide.src} 
                        alt={`Screen ${i}`} 
                        loading={i === 0 ? "eager" : "lazy"}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                      />
                      {slide.badge && (
                        <>
                          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%", background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.4) 40%, transparent 100%)", zIndex: 1 }} />
                          <div style={{ position: "absolute", bottom: isMobile ? "20px" : "40px", left: isMobile ? "12px" : "20px", right: isMobile ? "12px" : "20px", zIndex: 2, textAlign: lang === "ar" ? "right" : "left" }}>
                            <span style={{ fontSize: isMobile ? "0.55rem" : "0.65rem", fontWeight: 950, color: "#fff", background: "rgba(255,255,255,0.15)", padding: isMobile ? "4px 8px" : "6px 12px", borderRadius: "50px", border: "1px solid rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: lang === "ar" ? "0" : "1px", display: "inline-block", marginBottom: isMobile ? "8px" : "12px", backdropFilter: "blur(4px)" }}>
                              {slide.badge}
                            </span>
                            <h4 style={{ fontSize: isMobile ? "1rem" : "1.4rem", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: isMobile ? "6px" : "10px", whiteSpace: "pre-line" }}>{slide.title}</h4>
                            <p style={{ fontSize: isMobile ? "0.72rem" : "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.4, margin: 0 }}>{slide.desc}</p>
                            <div style={{ display: "flex", gap: "6px", marginTop: isMobile ? "10px" : "20px", opacity: 0.6, justifyContent: lang === "ar" ? "flex-start" : "flex-start" }}>
                              {[0, 1, 2].map((dot) => (
                                <div key={dot} style={{ width: dot === i ? "24px" : "4px", height: "4px", borderRadius: "4px", background: dot === i ? "#3b82f6" : "rgba(255,255,255,0.3)", transition: "all 0.3s ease" }} />
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>

              <div style={{ position: "absolute", top: "20px", right: lang === "ar" ? "auto" : "-20px", left: lang === "ar" ? "-20px" : "auto", width: "60px", height: "60px", background: "rgba(59,130,246,0.2)", borderRadius: "50%", filter: "blur(20px)", zIndex: -1 }} />
              <div style={{ position: "absolute", bottom: "40px", left: lang === "ar" ? "auto" : "-30px", right: lang === "ar" ? "-30px" : "auto", width: "80px", height: "80px", background: "rgba(6,182,212,0.2)", borderRadius: "50%", filter: "blur(25px)", zIndex: -1 }} />
            </motion.div>
          </div>

        </div>
      </div>

      <style jsx>{`
        /* ====== MOBILE — ≤991px ====== */
        @media (max-width: 991px) {

          .siu-hero-section {
            min-height: auto !important;
            padding-top: 20px !important;
            padding-bottom: 50px !important;
            align-items: flex-start !important;
          }

          /* Badge — sits below header with comfortable gap */
          .hero-badge-wrapper {
            justify-content: center !important;
            padding-top: 70px !important;
            margin-bottom: 28px !important;
          }
          .hero-badge {
            font-size: 0.65rem !important;
            letter-spacing: 1.5px !important;
            padding: 7px 16px !important;
          }

          /* Headings — generous vertical rhythm */
          .hero-h1 {
            font-size: 2.5rem !important;
            letter-spacing: -1.5px !important;
            margin-bottom: 20px !important;
            text-align: center !important;
            line-height: 1.1 !important;
          }
          .hero-h2 {
            font-size: 1.4rem !important;
            margin-bottom: 20px !important;
            text-align: center !important;
          }
          .hero-desc {
            font-size: 0.95rem !important;
            margin-bottom: 36px !important;
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            max-width: 100% !important;
            padding: 0 24px !important;
            line-height: 1.6 !important;
          }

          /* Buttons — more bottom gap before stats */
          .hero-btns {
            justify-content: center !important;
            gap: 12px !important;
            margin-bottom: 40px !important;
            padding: 0 24px !important;
          }
          .hero-btns .siu-btn-primary,
          .hero-btns .siu-btn-secondary {
            flex: 1 1 140px !important;
            text-align: center !important;
            padding: 14px 10px !important;
            font-size: 0.9rem !important;
            border-radius: 12px !important;
          }

          /* Stats — more breathing room */
          .hero-stats {
            justify-content: center !important;
            gap: 20px !important;
            margin-bottom: 0 !important;
            padding: 0 16px !important;
          }
          .hero-stat-num {
            font-size: 2rem !important;
            text-align: center !important;
          }
          .hero-stat-label {
            font-size: 0.75rem !important;
            text-align: center !important;
          }

          /* Phone — comfortable gap above */
          .hero-phone-col {
            display: flex !important;
            justify-content: center !important;
            margin-top: 48px !important;
            padding-bottom: 0 !important;
          }
        }

        /* Extra small */
        @media (max-width: 480px) {
          .hero-h1 { font-size: 2.1rem !important; }
          .hero-h2 { font-size: 1.2rem !important; }
          .hero-btns .siu-btn-primary,
          .hero-btns .siu-btn-secondary { flex: 0 0 100% !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
