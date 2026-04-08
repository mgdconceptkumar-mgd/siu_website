"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutMain = () => {
  return (
    <div className="siu-about-page" style={{ background: "#ffffff", color: "#0f172a", fontFamily: "var(--font-primary), sans-serif" }}>
      
      {/* HERO SECTION */}
      <section className="about-hero" style={{ 
        padding: "180px 0 100px", 
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
        color: "#ffffff",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')", opacity: 0.1 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: "#d4af37", fontWeight: 800, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "3px", display: "block", marginBottom: "20px" }}
          >
            Unified Education Ecosystem
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: "5rem", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-3px", marginBottom: "30px" }}
          >
            About Us – Study in UAE™ (SIU)
          </motion.h1>
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             style={{ width: "80px", height: "4px", background: "#d4af37", margin: "0 auto" }}
          />
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={{ padding: "120px 0", background: "#f8fafc" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 style={{ fontSize: "3rem", fontWeight: 700, color: "#1e3a8a", marginBottom: "32px", letterSpacing: "-1.5px" }}>Who We Are</h2>
                <div style={{ fontSize: "1.4rem", lineHeight: 1.8, color: "#475569" }}>
                  <p style={{ marginBottom: "24px" }}>
                    <strong>Study in UAE™ (SIU)</strong> is a unified, next-generation education platform designed to simplify,
                    standardize, and strengthen access to higher education across the United Arab Emirates.
                  </p>
                  <p style={{ marginBottom: "24px" }}>
                    Built with a vision to position the UAE as a global education destination, SIU enables students
                    from around the world to explore, apply, and enroll in multiple UAE institutions through a single,
                    seamless interface.
                  </p>
                  <p>
                    We are not just a platform — we are an education ecosystem enabler, connecting students,
                    universities, partners, and policymakers through a transparent and efficient digital infrastructure.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 style={{ 
                   position: "relative",
                   padding: "20px",
                   background: "#ffffff",
                   borderRadius: "40px",
                   boxShadow: "0 40px 100px rgba(0,0,0,0.08)",
                   border: "1px solid #e2e8f0"
                 }}
               >
                 <img 
                    src="/siu-assets/student_mobile_university.png" 
                    alt="Who We Are" 
                    style={{ width: "100%", borderRadius: "30px", objectFit: "cover" }}
                 />
                 <div style={{ position: "absolute", bottom: "40px", right: "-30px", background: "#d4af37", color: "#fff", padding: "30px", borderRadius: "20px", boxShadow: "0 20px 40px rgba(212,175,55,0.3)" }}>
                    <div style={{ fontSize: "2.5rem", fontWeight: 900 }}>10+</div>
                    <div style={{ fontSize: "0.9rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "1px" }}>Years Excellence</div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section style={{ padding: "120px 0", background: "#0f172a", color: "#fff" }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ padding: "60px", background: "rgba(255,255,255,0.03)", borderRadius: "40px", border: "1px solid rgba(255,255,255,0.1)", height: "100%" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "24px" }}>🔭</div>
                <h3 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "24px", color: "#d4af37" }}>Our Vision</h3>
                <p style={{ fontSize: "1.3rem", lineHeight: 1.7, color: "#cbd5e1" }}>
                  To establish the UAE as one of the world’s most accessible, transparent, and student-centric higher
                  education hubs by creating a unified admissions and student mobility ecosystem.
                </p>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{ padding: "60px", background: "rgba(255,255,255,0.03)", borderRadius: "40px", border: "1px solid rgba(255,255,255,0.1)", height: "100%" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "24px" }}>🎯</div>
                <h3 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "24px", color: "#3b82f6" }}>Our Mission</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                   {[
                     "Simplify the student journey from exploration to enrollment",
                     "Provide a single-window access to UAE universities",
                     "Enhance transparency in admissions and processes",
                     "Empower institutions with qualified student pipelines",
                     "Support the UAE’s vision of becoming a global education hub"
                   ].map((item, i) => (
                     <li key={i} style={{ display: "flex", gap: "15px", marginBottom: "16px", fontSize: "1.2rem", color: "#cbd5e1" }}>
                       <span style={{ color: "#3b82f6" }}>✔</span> {item}
                     </li>
                   ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ padding: "120px 0" }}>
        <div className="container text-center">
          <h2 style={{ fontSize: "3.5rem", fontWeight: 700, marginBottom: "20px", letterSpacing: "-2px" }}>What We Do</h2>
          <p style={{ fontSize: "1.4rem", color: "#64748b", maxWidth: "800px", margin: "0 auto 80px" }}>Transforming the traditional fragmented admission process into a streamlined, centralized experience.</p>
          
          <div className="row g-4">
            {[
              { title: "Unified Application", desc: "Apply to multiple UAE universities through a single platform.", icon: "📑" },
              { title: "Real-Time Tracking", desc: "Monitor application status, offers, and decisions transparently.", icon: "⏱️" },
              { title: "Standardized Flow", desc: "Direct and structured interaction between students and institutions.", icon: "📡" },
              { title: "Integrated Support", desc: "From application guidance to visa facilitation and onboarding.", icon: "🤝" },
              { title: "Collaboration Hub", desc: "Enabling agents, counselors, and universities to operate within one ecosystem.", icon: "🌍" }
            ].map((feature, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  style={{ padding: "40px", background: "#f8fafc", borderRadius: "30px", border: "1px solid #e2e8f0", textAlign: "left", height: "100%" }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>{feature.icon}</div>
                  <h4 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "16px", color: "#1e3a8a" }}>{feature.title}</h4>
                  <p style={{ fontSize: "1.15rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>{feature.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR FOUNDATION */}
      <section style={{ padding: "100px 0", background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)", color: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{ textAlign: "center", paddingBottom: "40px" }}
              >
                <div style={{ display: "inline-block", background: "#fff", padding: "40px", borderRadius: "40px", boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }}>
                   <div style={{ color: "#1e3a8a", fontSize: "1.4rem", fontWeight: 1000, letterSpacing: "2px", textTransform: "uppercase" }}>POWERED BY</div>
                   <div style={{ color: "#d4af37", fontSize: "3.5rem", fontWeight: 900 }}>MGD CONCEPT</div>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-7 order-lg-1">
              <h2 style={{ fontSize: "3.5rem", fontWeight: 700, marginBottom: "32px", color: "#fff" }}>Our Foundation</h2>
              <p style={{ fontSize: "1.4rem", lineHeight: 1.7, marginBottom: "40px", color: "rgba(255,255,255,0.9)" }}>
                Study in UAE™ is powered by the expertise and global network of **MGD Concept**, a UAE-headquartered education support and management organization with a strong international presence. 
                With over a decade of experience, MGD Concept brings deep industry insight and operational excellence to the SIU platform.
              </p>
              <div className="row g-3">
                {[
                  "International student recruitment",
                  "University partnerships & global mobility",
                  "Testing, admissions, and visa facilitation",
                  "Institutional development & strategy"
                ].map((item, i) => (
                  <div key={i} className="col-md-6" style={{ display: "flex", gap: "10px", fontSize: "1.1rem" }}>
                    <span style={{ color: "#d4af37" }}>★</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STUDY IN UAE */}
      <section style={{ padding: "120px 0", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 700, letterSpacing: "-2.5px" }}>Why Study in UAE™</h2>
          </div>
          <div className="row g-4">
            {[
              { id: "1", label: "Trust & Transparency", val: "We provide a structured system where every update and decision is clearly tracked." },
              { id: "2", label: "Global Accessibility", val: "Access UAE education opportunities without geographical or process barriers." },
              { id: "3", label: "Institutional Alignment", val: "Designed in collaboration with education stakeholders, ensuring relevance and efficiency." },
              { id: "4", label: "Student-Centric", val: "Built around improving the student journey — reducing complexity and increasing clarity." },
              { id: "5", label: "Scalable Ecosystem", val: "Evolving into a complete ecosystem including internships, career pathways, and more." }
            ].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  style={{ display: "flex", gap: "25px", padding: "30px" }}
                >
                  <div style={{ 
                    width: "50px", height: "50px", background: "#f1f5f9", borderRadius: "14px", 
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", 
                    fontWeight: 700, color: "#1e3a8a", flexShrink: 0 
                  }}>{item.id}</div>
                  <div>
                    <h5 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1e3a8a", marginBottom: "10px" }}>{item.label}</h5>
                    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: 1.6, margin:0 }}>{item.val}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT & LOOKING AHEAD */}
      <section style={{ padding: "120px 0", background: "#f1f5f9" }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h2 style={{ fontSize: "2.8rem", fontWeight: 700, color: "#1e3a8a", marginBottom: "32px" }}>Our Commitment</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {[
                  "Upholding the highest standards of data security and privacy",
                  "Maintaining neutrality and fairness across all institutions",
                  "Ensuring compliance with UAE regulations and globabl best practices",
                  "Continuously innovating to enhance user experience and outcomes"
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <div style={{ width: "24px", height: "24px", background: "#d4af37", borderRadius: "50%", marginTop: "4px" }} />
                    <p style={{ fontSize: "1.25rem", color: "#475569", margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ padding: "60px", background: "#1e3a8a", color: "#fff", borderRadius: "40px", boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}>
                <h2 style={{ fontSize: "2.8rem", fontWeight: 700, marginBottom: "32px" }}>Looking Ahead</h2>
                <p style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.8)", marginBottom: "40px" }}>Study in UAE™ is building the future of education access in the region. Upcoming integrations include:</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                   {["Internship Ecosystems", "Career Pathways", "AI-Driven Matching", "Life-cycle Platform"].map((tag, i) => (
                     <span key={i} style={{ padding: "10px 24px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "100px", fontSize: "1rem", fontWeight: 600 }}>{tag}</span>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "120px 0", textAlign: "center", background: "#ffffff" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              padding: "100px", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)", 
              borderRadius: "60px", border: "1px solid #e2e8f0" 
            }}
          >
            <h2 style={{ fontSize: "4rem", fontWeight: 700, marginBottom: "32px", color: "#1e3a8a" }}>Join the Ecosystem</h2>
            <p style={{ fontSize: "1.5rem", color: "#64748b", maxWidth: "800px", margin: "0 auto 48px", lineHeight: 1.6 }}>
               Whether you are a student, university, partner, or policymaker — 
               Study in UAE™ welcomes you to be part of a smarter, more connected education future.
            </p>
            <a href="/siu#how-it-works" style={{ 
              display: "inline-block", padding: "20px 60px", background: "#3b82f6", color: "#fff", 
              fontSize: "1.4rem", fontWeight: 700, borderRadius: "100px", textDecoration: "none",
              boxShadow: "0 20px 40px rgba(59,130,246,0.3)" 
            }}>Get Started</a>
          </motion.div>
        </div>
      </section>
      
      <style jsx>{`
        @media (max-width: 991px) {
           .about-hero h1 { font-size: 3rem !important; }
           section { padding: 80px 0 !important; }
           h2 { font-size: 2.5rem !important; }
           .about-hero { padding-top: 150px !important; }
        }
      `}</style>
    </div>
  );
};

export default AboutMain;
