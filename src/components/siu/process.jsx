"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const Process = () => {
  const { lang, t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: t("process.steps.0.title"),
      desc: t("process.steps.0.desc"),
      icon: "🔍"
    },
    {
      number: "02",
      title: t("process.steps.1.title"),
      desc: t("process.steps.1.desc"),
      icon: "📑"
    },
    {
      number: "03",
      title: t("process.steps.2.title"),
      desc: t("process.steps.2.desc"),
      icon: "📈"
    },
    {
      number: "04",
      title: t("process.steps.3.title"),
      desc: t("process.steps.3.desc"),
      icon: "🛂"
    }
  ];

  return (
    <section
      id="how-it-works"
      style={{
        padding: "80px 0",
        background: "linear-gradient(180deg, #3b82f6 0%, #1e3a8a 50%, #0f172a 100%)",
        fontFamily: "var(--font-primary), sans-serif",
        position: "relative",
        overflow: "hidden",
        direction: lang === "ar" ? "rtl" : "ltr"
      }}
    >
      {/* Decorative blurred orbit-like backgrounds */}
      <div style={{ position: "absolute", top: "10%", right: lang === "ar" ? "auto" : "-5%", left: lang === "ar" ? "-5%" : "auto", width: "500px", height: "500px", background: "rgba(255, 255, 255, 0.03)", borderRadius: "50%", filter: "blur(100px)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "10%", left: lang === "ar" ? "auto" : "-5%", right: lang === "ar" ? "-5%" : "auto", width: "400px", height: "400px", background: "rgba(245, 158, 11, 0.03)", borderRadius: "50%", filter: "blur(80px)", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "1.2rem",
              textTransform: "uppercase",
              letterSpacing: lang === "ar" ? "0" : "3px",
              background: "rgba(255, 255, 255, 0.1)",
              padding: "8px 24px",
              borderRadius: "50px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              display: "inline-block",
              marginBottom: "20px"
            }}>
              {t("process.badge")}
            </span>
            <h2 style={{ fontSize: "4.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "24px", letterSpacing: lang === "ar" ? "0" : "-3px" }}>
              {t("process.title")}
            </h2>
            <p style={{ fontSize: "1.7rem", color: "#cbd5e1", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
              {t("process.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* TIMELINE STEPS */}
        <div className="row g-5 justify-content-center" style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
          {steps.map((step, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                style={{ position: "relative", height: "100%" }}
              >
                <div style={{
                  padding: "40px 30px",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "32px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  textAlign: lang === "ar" ? "right" : "left"
                }}
                  className="process-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  }}
                >
                  <div style={{
                    fontSize: "3.5rem",
                    fontWeight: 900,
                    color: "rgba(255, 255, 255, 0.05)",
                    position: "absolute",
                    top: "30px",
                    right: lang === "ar" ? "auto" : "30px",
                    left: lang === "ar" ? "30px" : "auto",
                    lineHeight: 1
                  }}>
                    {step.number}
                  </div>

                  <div style={{
                    width: "60px",
                    height: "60px",
                    background: "#ffffff",
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    marginBottom: "30px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                    marginLeft: lang === "ar" ? "auto" : "0",
                    marginRight: lang === "ar" ? "0" : "auto"
                  }}>
                    {step.icon}
                  </div>

                  <h3 style={{ fontSize: "2.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "16px", letterSpacing: lang === "ar" ? "0" : "-0.5px" }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: "1.45rem", color: "#cbd5e1", lineHeight: 1.6, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>

                {/* Arrow between cards for desktop */}
                {idx < steps.length - 1 && (
                  <div className="d-none d-lg-block" style={{
                    position: "absolute",
                    top: "35%",
                    right: lang === "ar" ? "auto" : "-35px",
                    left: lang === "ar" ? "-35px" : "auto",
                    zIndex: 2,
                    fontSize: "2rem",
                    color: "rgba(255, 255, 255, 0.1)",
                    transform: lang === "ar" ? "rotate(180deg)" : "rotate(0deg)"
                  }}>
                    →
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          #how-it-works {
            padding: 40px 0 !important;
          }
          #how-it-works h2 {
            font-size: 3rem !important;
          }
          #how-it-works p {
            font-size: 1.25rem !important;
          }
          .process-card {
            padding: 30px 24px !important;
          }
          .process-card h3 {
            font-size: 1.8rem !important;
          }
          .process-card p {
            font-size: 1.15rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
