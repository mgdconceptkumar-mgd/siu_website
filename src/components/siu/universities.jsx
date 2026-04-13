"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const Universities = () => {
  const { lang, t } = useLanguage();

  const dubaiUnis = [
    { name: "Middlesex University Dubai", img: "/siu-assets/middlesex_logo.png", isIndividual: true, ranking: "QS Top 700" },
    { name: "University of Birmingham", img: "/siu-assets/birmingham_logo.png", isIndividual: true, ranking: "80 Global Rank" },
    { name: "University of Wollongong", img: "/siu-assets/wollongong_logo.png", isIndividual: true, ranking: "185 Global Rank" },
    { name: "University of Dubai", img: "/siu-assets/udubai_logo.png", isIndividual: true, ranking: "QS 601" },
    { name: "Zayed University", img: "/siu-assets/zayed_logo.png", isIndividual: true, ranking: "595 Global Rank" },
    { name: "American Univ. in Dubai", img: "/siu-assets/aud_logo.png", isIndividual: true, ranking: "QS Top 610" },
    { name: "Canadian Univ. Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: 0, y: 0 }, ranking: "#604 Global Rank" },
    { name: "Murdoch Univ. Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: -100, y: 0 }, ranking: "#436 Global Rank" },
    { name: "Amity Univ. Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: 0, y: -100 }, ranking: "Premier Global" },
    { name: "BITS Pilani Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: -100, y: -100 }, ranking: "Top 800 Global" },
    { name: "Heriot-Watt Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: 0, y: -200 }, ranking: "#235 Global Rank" },
  ];

  return (
    <section id="universities" style={{ padding: "120px 0", background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)", overflow: "hidden", direction: lang === "ar" ? "rtl" : "ltr" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: "4.2rem",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "28px",
              letterSpacing: lang === "ar" ? "0" : "-3px"
            }}
          >
            {t("universities.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "1.75rem",
              color: "#cbd5e1",
              maxWidth: "900px",
              margin: "0 auto 80px",
              lineHeight: 1.6
            }}
          >
            {t("universities.subtitle")}
          </motion.p>
        </div>

        {/* Logo Section - Responsive Marquee */}
        <div style={{ position: "relative", width: "100%", overflow: "hidden", padding: "20px 0" }}>
          <motion.div
            animate={{ x: lang === "ar" ? [0, 2400] : [0, -2400] }}
            transition={{
              duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 25 : 45,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ display: "flex", gap: "24px", width: "max-content", alignItems: "center", flexDirection: lang === "ar" ? "row-reverse" : "row" }}
          >
            {[...dubaiUnis, ...dubaiUnis, ...dubaiUnis].map((uni, i) => (
              <div
                key={i}
                className="siu-glass-card"
                style={{
                  padding: "24px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "28px",
                  backdropFilter: "blur(20px)",
                  minWidth: typeof window !== 'undefined' && window.innerWidth < 768 ? "300px" : "450px",
                  flexDirection: lang === "ar" ? "row-reverse" : "row",
                  textAlign: lang === "ar" ? "right" : "left"
                }}
              >
                <div style={{
                  width: "80px",
                  height: "80px",
                  overflow: "hidden",
                  borderRadius: "16px",
                  background: "#ffffff",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: uni.isIndividual ? "10px" : "0",
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
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: lang === "ar" ? "flex-end" : "flex-start" }}>
                  <div style={{
                    background: "rgba(96, 165, 250, 0.15)",
                    padding: "4px 12px",
                    borderRadius: "6px",
                    width: "fit-content",
                    border: "1px solid rgba(96, 165, 250, 0.3)"
                  }}>
                    <span style={{ fontSize: "1.1rem", color: "#60a5fa", fontWeight: 800, textTransform: "uppercase" }}>{uni.ranking}</span>
                  </div>
                  <h4 style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.5rem", margin: 0, lineHeight: 1.2 }}>{uni.name}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="strategic-positioning-card" style={{
          marginTop: "100px",
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.03)",
          padding: "80px",
          borderRadius: "48px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(40px)"
        }}>
          <h3 className="strategic-title" style={{ color: "#ffffff", fontSize: "4.8rem", fontWeight: 600, marginBottom: "40px", letterSpacing: lang === "ar" ? "0" : "-3px" }}>
            {t("universities.strategic_title")}
          </h3>
          <p className="strategic-quote" style={{ color: "rgba(255,255,255,0.85)", fontSize: "2.4rem", lineHeight: 1.5, maxWidth: "1100px", margin: "0 auto", fontWeight: 500, fontStyle: "italic" }}>
            {t("universities.strategic_quote")}
          </p>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 991px) {
          #universities {
            padding: 80px 0 !important;
          }
          
          #universities h2 {
            font-size: 3rem !important;
            letter-spacing: -1.5px !important;
            margin-bottom: 20px !important;
            line-height: 1.1 !important;
          }

          #universities p {
            font-size: 1.25rem !important;
            margin-bottom: 40px !important;
            line-height: 1.6 !important;
            padding: 0 15px !important;
          }

          .siu-glass-card {
            min-width: 320px !important;
            padding: 24px !important;
            border-radius: 20px !important;
            gap: 16px !important;
          }

          .siu-glass-card > div:first-child {
            width: 70px !important;
            height: 70px !important;
            border-radius: 12px !important;
            background: #ffffff !important;
          }

          .siu-glass-card h4 {
            font-size: 1.35rem !important;
            letter-spacing: -0.2px !important;
            font-weight: 800 !important;
          }

          .siu-glass-card span {
            font-size: 0.9rem !important;
          }

          .strategic-positioning-card {
            padding: 60px 24px !important;
            border-radius: 32px !important;
            margin-top: 80px !important;
            text-align: center !important;
            border: 1px solid rgba(255, 255, 255, 0.12) !important;
          }

          .strategic-title {
            font-size: 2.5rem !important;
            letter-spacing: -1.5px !important;
            margin-bottom: 24px !important;
            line-height:1.2 !important;
          }

          .strategic-quote {
            font-size: 1.6rem !important;
            line-height: 1.6 !important;
            max-width: 100% !important;
            font-weight: 500 !important;
          }
        }

        @media (max-width: 480px) {
          .strategic-title {
            font-size: 2rem !important;
          }
          .strategic-quote {
            font-size: 1.4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Universities;
