"use client";
import React from "react";
import { motion } from "framer-motion";

const Ecosystem = () => {
  const layers = [
    { 
      title: "Admissions", 
      icon: "🎓", 
      desc: "One account, multiple universities. Centralized and smart program selection.", 
      color: "#3b82f6" 
    },
    { 
      title: "Scholarships", 
      icon: "💰", 
      desc: "Integrated merit and priority-based scholarship allocation for top students.", 
      color: "#06b6d4" 
    },
    { 
      title: "Visa & Compliance", 
      icon: "🛂", 
      desc: "Streamlined visa applications and digital compliance for a smooth transition.", 
      color: "#8b5cf6" 
    },
    { 
      title: "Career Integration", 
      icon: "💼", 
      desc: "Connecting students to employment opportunities and industry partners in the UAE.", 
      color: "#f59e0b" 
    },
    { 
      title: "Settlement Support", 
      icon: "🏠", 
      desc: "Ongoing support for housing, insurance, and everything needed to start your new life.", 
      color: "#10b981" 
    },
  ];

  return (
    <section 
      id="ecosystem" 
      style={{ 
        padding: "100px 0", 
        background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)", 
        fontFamily: "var(--font-primary), sans-serif"
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
            <h2 style={{
              fontSize: "3.8rem",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "20px",
              letterSpacing: "-0.03em",
            }}>
              The SIU Ecosystem
            </h2>
            <p style={{
              fontSize: "1.4rem",
              color: "#cbd5e1",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}>
              A multi-layered infrastructure designed to streamline every aspect of the international student journey in the UAE.
            </p>
          </motion.div>
        </div>

        {/* COMPACT GRID */}
        <div className="row g-4 justify-content-center">
          {layers.map((layer, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
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
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(255, 255, 255, 0.2)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                {/* 🔢 LAYER NUMBER */}
                <div style={{
                  position: "absolute",
                  top: "30px",
                  right: "40px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "rgba(255, 255, 255, 0.1)",
                  letterSpacing: "2px",
                  fontFamily: "monospace"
                }}>
                  LAYER_0{idx + 1}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "25px", marginBottom: "30px" }}>
                  <div style={{ 
                    width: "60px",
                    height: "60px",
                    background: `linear-gradient(135deg, ${layer.color}25, ${layer.color}10)`,
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    border: `1px solid ${layer.color}35`
                  }}>
                    {layer.icon}
                  </div>
                  <h3 style={{ 
                    color: "#ffffff", 
                    fontWeight: 700, 
                    fontSize: "1.8rem", 
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    margin: 0
                  }}>
                    {layer.title}
                  </h3>
                </div>
                
                <p style={{ 
                  color: "#cbd5e1", 
                  fontSize: "1.3rem", 
                  lineHeight: 1.6, 
                  margin: 0,
                  flexGrow: 1
                }}>
                  {layer.desc}
                </p>

              </motion.div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              display: "inline-block",
              fontSize: "2.2rem", 
              fontWeight: 700, 
              color: "#ffffff", 
              letterSpacing: "1px", 
              textTransform: "uppercase",
              background: "rgba(255, 255, 255, 0.05)",
              padding: "24px 64px",
              borderRadius: "100px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)"
            }}
          >
            One Platform. All UAE Universities. <span style={{ color: "#eceff4ff" }}>Global Access.</span>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          #ecosystem {
            padding: 60px 0 !important;
          }
          
          #ecosystem h2 {
            font-size: 2.2rem !important;
          }

          #ecosystem p {
            font-size: 1.1rem !important;
          }

          #ecosystem .row {
            margin-top: 40px !important;
          }

          #ecosystem .col-md-6 {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }

          #ecosystem [style*="padding: \"40px\""] {
            padding: 25px !important;
            border-radius: 20px !important;
          }

          #ecosystem [style*="fontSize: \"2rem\""] {
            font-size: 1.5rem !important;
            width: 50px !important;
            height: 50px !important;
          }

          #ecosystem h3 {
            font-size: 1.4rem !important;
          }

          #ecosystem [style*="fontSize: \"1.3rem\""] {
            font-size: 1rem !important;
          }

          #ecosystem [style*="padding: \"24px 64px\""] {
            padding: 16px 24px !important;
            font-size: 1.1rem !important;
            border-radius: 30px !important;
            width: 100%;
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Ecosystem;
