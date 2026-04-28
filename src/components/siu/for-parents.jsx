"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const ForParents = () => {
  const { lang, t } = useLanguage();

  const parentBenefits = [
    {
      title: t("for_parents.benefits.0.title"),
      icon: "🏛️",
      desc: t("for_parents.benefits.0.desc"),
      color: "#3b82f6"
    },
    {
      title: t("for_parents.benefits.1.title"),
      icon: "🔍",
      desc: t("for_parents.benefits.1.desc"),
      color: "#06b6d4"
    },
    {
      title: t("for_parents.benefits.2.title"),
      icon: "🛡️",
      desc: t("for_parents.benefits.2.desc"),
      color: "#8b5cf6"
    },
    {
      title: t("for_parents.benefits.3.title"),
      icon: "💳",
      desc: t("for_parents.benefits.3.desc"),
      color: "#10b981"
    },
    {
      title: t("for_parents.benefits.4.title"),
      icon: "🏠",
      desc: t("for_parents.benefits.4.desc"),
      color: "#f59e0b"
    },
    {
      title: t("for_parents.benefits.5.title"),
      icon: "📞",
      desc: t("for_parents.benefits.5.desc"),
      color: "#ec4899"
    },
  ];

  return (
    <section
      id="for-parents"
      style={{
        padding: "80px 0",
        background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)",
        fontFamily: "var(--font-primary), sans-serif",
        direction: lang === "ar" ? "rtl" : "ltr"
      }}
    >
      <div className="container">

        {/* HEADER SECTION */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div style={{ marginBottom: "20px" }}>
              <span style={{
                fontWeight: 800,
                fontSize: "0.9rem",
                color: "#f59e0b",
                textTransform: "uppercase",
                letterSpacing: lang === "ar" ? "0" : "3px",
                background: "rgba(245, 158, 11, 0.1)",
                padding: "8px 24px",
                borderRadius: "50px",
                border: "1px solid rgba(245, 158, 11, 0.25)",
                display: "inline-block"
              }}>
                {t("for_parents.badge")}
              </span>
            </div>

            <h2 style={{
              fontSize: "3.8rem",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "20px",
              letterSpacing: lang === "ar" ? "0" : "-0.03em",
            }}>
              {t("for_parents.title_part1")} <span style={{ color: "#f59e0b" }}>{t("for_parents.title_highlight")}</span>
            </h2>
            <p className="parents-intro" style={{
              fontSize: "1.4rem",
              color: "#cbd5e1",
              maxWidth: "850px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}>
              {t("for_parents.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* BENEFITS GRID */}
        <div className="row g-4 justify-content-center">
          {parentBenefits.map((benefit, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                className="parent-card"
                style={{
                  height: "100%",
                  padding: "40px",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "32px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px)",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  textAlign: lang === "ar" ? "right" : "left"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(245, 158, 11, 0.25)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px", flexDirection: lang === "ar" ? "row-reverse" : "row", justifyContent: lang === "ar" ? "flex-start" : "flex-start" }}>
                  <div style={{
                    width: "56px",
                    height: "56px",
                    background: `linear-gradient(135deg, ${benefit.color}25, ${benefit.color}10)`,
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    border: `1px solid ${benefit.color}35`,
                    flexShrink: 0
                  }}>
                    {benefit.icon}
                  </div>
                  <h3 className="parent-card-title" style={{
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "1.8rem",
                    lineHeight: 1.15,
                    letterSpacing: lang === "ar" ? "0" : "-0.02em",
                    margin: 0
                  }}>
                    {benefit.title}
                  </h3>
                </div>

                <p className="parent-card-desc" style={{
                  color: "#cbd5e1",
                  fontSize: "1.4rem",
                  lineHeight: 1.6,
                  margin: 0,
                  flexGrow: 1
                }}>
                  {benefit.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* REASSURANCE BANNER */}
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="parents-banner"
            style={{
              display: "inline-block",
              fontSize: "2rem",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: lang === "ar" ? "0" : "1px",
              background: "rgba(245, 158, 11, 0.08)",
              padding: "24px 64px",
              borderRadius: "100px",
              border: "1px solid rgba(245, 158, 11, 0.2)",
              backdropFilter: "blur(20px)"
            }}
          >
            {t("for_parents.banner").split(t("for_parents.highlight_countries")).map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span style={{ color: "#f59e0b" }}>{t("for_parents.highlight_countries")}</span>}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          #for-parents {
            padding: 40px 0 !important;
          }

          #for-parents h2 {
            font-size: 2.5rem !important;
            letter-spacing: -1px !important;
            line-height: 1.15 !important;
            margin-bottom: 14px !important;
          }

          .parents-intro {
            font-size: 1.1rem !important;
            padding: 0 20px !important;
            line-height: 1.6 !important;
          }

          #for-parents .row {
            margin-top: 30px !important;
            padding: 0 10px !important;
          }

          .parent-card {
            padding: 28px !important;
            border-radius: 24px !important;
          }

          .parent-card-title {
            font-size: 1.4rem !important;
            letter-spacing: -0.3px !important;
          }

          .parent-card-desc {
            font-size: 1.15rem !important;
            line-height: 1.6 !important;
          }

          .parents-banner {
            padding: 14px 20px !important;
            font-size: 0.85rem !important;
            border-radius: 30px !important;
            width: calc(100% - 30px);
            margin: 0 auto;
            display: block !important;
            letter-spacing: 0.5px !important;
          }
        }

        @media (max-width: 480px) {
          #for-parents h2 {
            font-size: 2rem !important;
          }

          .parents-banner {
            font-size: 0.78rem !important;
            padding: 12px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ForParents;
