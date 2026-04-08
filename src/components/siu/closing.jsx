"use client";
import React from "react";
import { motion } from "framer-motion";

const Closing = () => {
  return (
    <section id="cta" className="closing-section" style={{ padding: "120px 0", background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
      {/* Decorative Blur */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "rgba(59, 130, 246, 0.05)", borderRadius: "50%", filter: "blur(120px)", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="closing-sub-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: "1.8rem", 
              fontWeight: 950, 
              color: "rgba(255,255,255,0.7)", 
              marginBottom: "32px",
              lineHeight: 1.2,
              letterSpacing: "4px",
              textTransform: "uppercase"
            }}
          >
            From Admission to Employment – <span style={{ color: "#3b82f6" }}>One Unified Journey</span>
          </motion.p>
          <motion.h2 
            className="closing-main-title"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ 
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)", 
              fontWeight: 600, 
              color: "#fff", 
              lineHeight: 1, 
              marginBottom: "48px",
              letterSpacing: "-4px" 
            }}
          >
            SIU will unify the world’s <br />
            <span style={{ color: "#86a7daff" }}>access to UAE.</span>
          </motion.h2>

          <div className="closing-btns" style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="siu-btn-primary" style={{ padding: "16px 48px", fontSize: "1.1rem" }}>Download Now</button>
            <button className="siu-btn-secondary" style={{ padding: "16px 48px", fontSize: "1.1rem" }}>Contact Support</button>
          </div>

          {/* Powered by MGD */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              marginTop: "48px",
              fontSize: "0.78rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              fontWeight: 500,
            }}
          >
            Powered by{" "}
            <span style={{ color: "rgba(134, 167, 218, 0.7)", fontWeight: 700 }}>
              MGD
            </span>
          </motion.p>

        </motion.div>
      </div>
      <style jsx>{`
        @media (max-width: 991px) {
          #cta {
            padding: 70px 0 !important;
          }
          
          .closing-sub-title {
            font-size: 0.8rem !important;
            letter-spacing: 1.5px !important;
            margin-bottom: 20px !important;
            line-height: 1.5 !important;
            padding: 0 20px !important;
          }

          .closing-main-title {
            font-size: 2.2rem !important;
            letter-spacing: -1.5px !important;
            margin-bottom: 32px !important;
            line-height: 1.15 !important;
            padding: 0 10px !important;
          }

          .closing-btns {
            gap: 12px !important;
            padding: 0 20px !important;
          }

          .closing-btns .siu-btn-primary, 
          .closing-btns .siu-btn-secondary {
            padding: 13px 28px !important;
            font-size: 0.9rem !important;
            width: 100% !important;
            max-width: 260px !important;
          }
        }

        @media (max-width: 480px) {
          .closing-main-title {
            font-size: 1.9rem !important;
            line-height: 1.2 !important;
          }
          .closing-sub-title {
            font-size: 0.72rem !important;
            letter-spacing: 1px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Closing;
