"use client";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    { 
      title: "Centralized Application", 
      desc: "One account, multiple universities. No more redundant forms.", 
      icon: "📑" 
    },
    { 
      title: "Program Selection", 
      desc: "Choose courses across federal and participating institutions instantly.", 
      icon: "🗺️" 
    },
    { 
      title: "Merit & Priority Based", 
      desc: "Smart allocation system ensuring top students get their first choice.", 
      icon: "🏆" 
    },
    { 
      title: "Scholarship Integration", 
      desc: "Apply for scholarships directly within your admission flow.", 
      icon: "💎" 
    },
    { 
      title: "Real-time Tracking", 
      desc: "Visual timeline of your application state from submission to offer.", 
      icon: "⏱️" 
    },
    { 
      title: "Reduced Duplication", 
      desc: "Upload documents once. Use them everywhere across the UAE.", 
      icon: "♻️" 
    },
  ];

  return (
    <section id="how-it-works" style={{ padding: "100px 0", background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)", fontFamily: "var(--font-primary), sans-serif" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: "4rem", 
              fontWeight: 700, 
              color: "#ffffff", 
              marginBottom: "24px",
              letterSpacing: "-2.5px"
            }}
          >
            Smarter Admissions
          </motion.h2>
          <p style={{ 
            fontSize: "2rem", 
            fontWeight: 600,
            color: "#ffffff", 
            maxWidth: "900px", 
            margin: "0 auto",
            letterSpacing: "0.5px"
          }}>
            Your Gateway to <span style={{ color: "#d4af37" }}>Study, Work & Grow</span> in UAE
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {features.map((feature, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  height: "100%",
                  padding: "45px",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "28px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                <div style={{ 
                  width: "60px", 
                  height: "60px", 
                  background: "rgba(255, 255, 255, 0.1)", 
                  borderRadius: "16px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  fontSize: "2rem",
                  marginBottom: "28px",
                  color: "#3b82f6",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  fontSize: "1.8rem", 
                  fontWeight: 700, 
                  color: "#ffffff", 
                  marginBottom: "20px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em"
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  fontSize: "1.3rem", 
                  color: "#cbd5e1", 
                  lineHeight: 1.6,
                  marginBottom: 0
                }}>
                  {feature.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
