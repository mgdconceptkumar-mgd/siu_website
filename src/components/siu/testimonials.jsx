"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const Testimonials = () => {
  const { lang, t } = useLanguage();

  const reviews = [
    {
      name: t("testimonials.reviews.0.name"),
      role: t("testimonials.reviews.0.role"),
      content: t("testimonials.reviews.0.content"),
      rating: 5,
      avatar: "👤"
    },
    {
      name: t("testimonials.reviews.1.name"),
      role: t("testimonials.reviews.1.role"),
      content: t("testimonials.reviews.1.content"),
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: t("testimonials.reviews.2.name"),
      role: t("testimonials.reviews.2.role"),
      content: t("testimonials.reviews.2.content"),
      rating: 5,
      avatar: "👤"
    }
  ];

  return (
    <section 
      id="testimonials" 
      style={{ 
        padding: "80px 0", 
        background: "linear-gradient(180deg, #3b82f6 0%, #1e3a8a 50%, #0f172a 100%)", 
        fontFamily: "var(--font-primary), sans-serif",
        position: "relative",
        overflow: "hidden",
        direction: lang === "ar" ? "rtl" : "ltr"
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ 
              color: "#f59e0b", 
              fontWeight: 800, 
              fontSize: "1rem", 
              textTransform: "uppercase", 
              letterSpacing: lang === "ar" ? "0" : "3px", 
              background: "rgba(245, 158, 11, 0.1)", 
              padding: "8px 24px", 
              borderRadius: "50px",
              border: "1px solid rgba(245, 158, 11, 0.2)",
              display: "inline-block",
              marginBottom: "20px"
            }}>
              {t("testimonials.badge")}
            </span>
            <h2 style={{ fontSize: "4.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "24px", letterSpacing: lang === "ar" ? "0" : "-3px" }}>
              {t("testimonials.title_part1")} <span style={{ color: "#f59e0b" }}>{t("testimonials.title_highlight")}</span>
            </h2>
            <p style={{ fontSize: "1.7rem", color: "#cbd5e1", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
              {t("testimonials.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* REVIEWS GRID */}
        <div className="row g-4" style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
          {reviews.map((testimonial, idx) => (
            <div key={idx} className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  height: "100%",
                  padding: "40px",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "32px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  textAlign: lang === "ar" ? "right" : "left"
                }}
              >
                {/* Quote Icon */}
                <div style={{ position: "absolute", top: "40px", right: lang === "ar" ? "auto" : "40px", left: lang === "ar" ? "40px" : "auto", fontSize: "3rem", opacity: 0.1, color: "#fff", transform: lang === "ar" ? "scaleX(-1)" : "none" }}>
                  "
                </div>

                {/* Rating */}
                <div style={{ display: "flex", gap: "4px", marginBottom: "24px", justifyContent: lang === "ar" ? "flex-start" : "flex-start" }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: "#f59e0b", fontSize: "1.2rem" }}>★</span>
                  ))}
                </div>

                <p style={{ fontSize: "1.5rem", color: "#cbd5e1", lineHeight: 1.6, marginBottom: "40px", fontStyle: "italic", flexGrow: 1 }}>
                  "{testimonial.content}"
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "20px", flexDirection: lang === "ar" ? "row-reverse" : "row", justifyContent: lang === "ar" ? "flex-start" : "flex-start" }}>
                  <div style={{
                    width: "56px",
                    height: "56px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}>
                    {testimonial.avatar}
                  </div>
                  <div style={{ textAlign: lang === "ar" ? "right" : "left" }}>
                    <h4 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>{testimonial.name}</h4>
                    <span style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.5)", fontWeight: 500 }}>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>


      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          #testimonials {
            padding: 40px 0 !important;
          }
          #testimonials h2 {
            font-size: 2.5rem !important;
            letter-spacing: -1.5px !important;
          }
          #testimonials p {
            font-size: 1.25rem !important;
          }
          div[style*="padding: \"40px\""] {
            padding: 30px !important;
          }
          p[style*="font-size: \"1.5rem\""] {
            font-size: 1.15rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
