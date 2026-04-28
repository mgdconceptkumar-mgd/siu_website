"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const FAQ = () => {
  const { lang, t } = useLanguage();

  const faqs = [
    {
      question: t("faq.questions.0.q"),
      answer: t("faq.questions.0.a")
    },
    {
      question: t("faq.questions.1.q"),
      answer: t("faq.questions.1.a")
    },
    {
      question: t("faq.questions.2.q"),
      answer: t("faq.questions.2.a")
    },
    {
      question: t("faq.questions.3.q"),
      answer: t("faq.questions.3.a")
    },
    {
      question: t("faq.questions.4.q"),
      answer: t("faq.questions.4.a")
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="faq"
      style={{
        padding: "80px 0",
        background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)",
        fontFamily: "var(--font-primary), sans-serif",
        position: "relative",
        overflow: "hidden",
        direction: lang === "ar" ? "rtl" : "ltr"
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: "4rem", fontWeight: 700, color: "#ffffff", marginBottom: "20px", letterSpacing: lang === "ar" ? "0" : "-2px" }}>
              {t("faq.title")}
            </h2>
            <p style={{ fontSize: "1.6rem", color: "#cbd5e1", maxWidth: "800px", margin: "0 auto" }}>
              {t("faq.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* ACCORDION */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  style={{
                    background: activeIndex === idx ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)",
                    borderRadius: "24px",
                    border: "1px solid",
                    borderColor: activeIndex === idx ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(20px)",
                    overflow: "hidden",
                    transition: "all 0.4s ease"
                  }}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                    style={{
                      width: "100%",
                      padding: "32px 40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "none",
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                      textAlign: lang === "ar" ? "right" : "left",
                      color: "#ffffff"
                    }}
                  >
                    <span style={{ fontSize: "1.75rem", fontWeight: 700, letterSpacing: lang === "ar" ? "0" : "-0.5px" }}>
                      {faq.question}
                    </span>
                    <div style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: activeIndex === idx ? "#ffffff" : "rgba(255, 255, 255, 0.1)",
                      color: activeIndex === idx ? "#1e3a8a" : "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      transition: "all 0.3s ease",
                      transform: activeIndex === idx ? "rotate(180deg)" : "rotate(0deg)"
                    }}>
                      {activeIndex === idx ? "−" : "+"}
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div style={{
                          padding: lang === "ar" ? "0 40px 40px 40px" : "0 40px 40px 40px",
                          fontSize: "1.5rem",
                          lineHeight: 1.6,
                          color: "#cbd5e1"
                        }}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          #faq {
            padding: 40px 0 !important;
          }
          #faq h2 {
            font-size: 2.5rem !important;
          }
          #faq p {
            font-size: 1.25rem !important;
          }
          button {
            padding: 24px !important;
          }
          button span {
            font-size: 1.25rem !important;
            padding-right: ${lang === "ar" ? "0" : "20px"};
            padding-left: ${lang === "ar" ? "20px" : "0"};
          }
          div[style*="padding: \"0 40px 40px 40px\""] {
            padding: 0 24px 24px 24px !important;
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
