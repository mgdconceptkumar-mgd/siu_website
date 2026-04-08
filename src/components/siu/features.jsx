"use client";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    { 
      title: "Centralized Application", 
      desc: "Submit one digital application and have it processed across many UAE universities. No more filling out the same forms multiple times or missing deadlines.",
      icon: "📑" 
    },
    { 
      title: "Smart Program Discovery", 
      desc: "Search through 500+ programs across various UAE institutions. Easily compare fees, requirements, and campus life all in one place.",
      icon: "🗺️" 
    },
    { 
      title: "Easy Admissions", 
      desc: "Our smart system helps you secure your place in your chosen program quickly, with clear updates on seat availability and your application status.",
      icon: "🏆" 
    },
    { 
      title: "Simple Scholarships", 
      desc: "Find and apply for scholarships directly while you apply for admission. Track all your scholarship applications from a single, easy dashboard.",
      icon: "💎" 
    },
    { 
      title: "Real-time Tracking", 
      desc: "Follow every step of your journey with a simple timeline — from your first application to getting your visa and final enrollment.",
      icon: "⏱️" 
    },
    { 
      title: "Safe Document Vault", 
      desc: "Upload your documents once and they are ready for every application. No need to re-upload files for different universities.",
      icon: "🔐" 
    },
    { 
      title: "Visa Support Hub", 
      desc: "Get clear guidance for your visa application process. Track your requirements and status step-by-step for a worry-free move to the UAE.",
      icon: "🛂" 
    },
    { 
      title: "Career & Job Bridge", 
      desc: "Connect with UAE employers and find internships before you even arrive. Get a head start on your career with our industry partners.",
      icon: "💼" 
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
              fontSize: "4.5rem", // Increased from 4rem
              fontWeight: 700, 
              color: "#ffffff", 
              marginBottom: "24px",
              letterSpacing: "-2.5px"
            }}
          >
            Smarter Admissions
          </motion.h2>
          <p className="features-subtitle" style={{ 
            fontSize: "2.4rem", // Increased from 2rem
            fontWeight: 600,
            color: "#ffffff", 
            maxWidth: "900px", 
            margin: "0 auto 16px",
            letterSpacing: "0.5px"
          }}>
            Your Gateway to <span style={{ color: "#d4af37" }}>Study, Work & Grow</span> in UAE
          </p>
          <p className="features-intro" style={{
            fontSize: "1.55rem", // Increased from 1.2rem
            color: "#cbd5e1",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: 1.7
          }}>
            SIU makes applying to UAE universities simple. One platform to manage your entire journey — from finding the perfect program to securing your visa and starting your career.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {features.map((feature, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 col-sm-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="feature-card"
                style={{
                  height: "100%",
                  padding: "40px",
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
                <div className="feature-icon" style={{ 
                  width: "60px", 
                  height: "60px", 
                  background: "rgba(255, 255, 255, 0.1)", 
                  borderRadius: "16px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  fontSize: "2rem",
                  marginBottom: "24px",
                  color: "#3b82f6",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                  {feature.icon}
                </div>
                <h3 className="feature-title" style={{ 
                  fontSize: "2rem", // Increased from 1.6rem
                  fontWeight: 700, 
                  color: "#ffffff", 
                  marginBottom: "16px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em"
                }}>
                  {feature.title}
                </h3>
                <p className="feature-desc" style={{ 
                  fontSize: "1.4rem", // Increased from 1.05rem
                  color: "#cbd5e1", 
                  lineHeight: 1.7,
                  marginBottom: 0
                }}>
                  {feature.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 991px) {
          #how-it-works {
            padding: 60px 0 !important;
          }
          
          #how-it-works h2 {
            font-size: 2.5rem !important; // Increased from 2rem
            letter-spacing: -1px !important;
            line-height: 1.15 !important;
            margin-bottom: 14px !important;
          }

          .features-subtitle {
            font-size: 1.4rem !important; // Increased from 1.1rem
            line-height: 1.4 !important;
            padding: 0 20px !important;
            margin-bottom: 12px !important;
          }

          .features-intro {
            font-size: 1.15rem !important; // Increased from 0.95rem
            line-height: 1.6 !important;
            padding: 0 20px !important;
          }

          .feature-card {
            padding: 28px !important;
            border-radius: 20px !important;
          }

          .feature-icon {
            font-size: 1.5rem !important;
            width: 48px !important;
            height: 48px !important;
            margin-bottom: 16px !important;
            border-radius: 12px !important;
          }

          .feature-title {
            font-size: 1.5rem !important; // Increased from 1.2rem
            margin-bottom: 10px !important;
          }

          .feature-desc {
            font-size: 1.15rem !important; // Increased from 0.9rem
            line-height: 1.6 !important;
          }
        }

        @media (max-width: 480px) {
          #how-it-works h2 {
            font-size: 1.8rem !important;
          }
          .features-subtitle {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
