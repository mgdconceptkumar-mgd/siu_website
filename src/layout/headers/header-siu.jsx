"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const HeaderSIU = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "DOWNLOAD  APP", href: "#apply-once" },
    { name: "Universities", href: "#universities" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Features", href: "#how-it-works" },
  ];

  return (
    <header
      style={{
        position: "absolute",
        top: "10px",
        left: "0",
        right: "0",
        width: "100%",
        zIndex: 1000,
        pointerEvents: "none"
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* LOGO — LEFT */}
        <Link href="/" style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          textDecoration: "none",
          pointerEvents: "auto",
          transition: "transform 0.3s ease",
          flexShrink: 0
        }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <div style={{
            width: "110px",
            height: "110px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: "50%",
            flexShrink: 0,
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(15px)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)",
            padding: "8px"
          }}>
            <img
              src="/assets/images/about/SIU%20LOGO%20Icon-05.jpg%20(1).jpeg"
              alt="SIU Logo"
              loading="eager"
              fetchPriority="high"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                filter: "brightness(1.05) drop-shadow(0 0 10px rgba(255,255,255,0.1))"
              }}
            />
          </div>

          {/* Bilingual Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px", textAlign: "left" }}>
            <span style={{
              color: "#fff",
              fontWeight: 950,
              fontSize: "1.8rem",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              textShadow: "0 2px 20px rgba(0,0,0,0.8)",
              lineHeight: 1
            }}>
              Study in UAE
            </span>
            <span style={{
              color: "#d4af37",
              fontWeight: 800,
              fontSize: "1.6rem",
              direction: "rtl",
              textShadow: "0 2px 20px rgba(0,0,0,0.8)",
              lineHeight: 1
            }}>
              الدراسة في الإمارات
            </span>
          </div>
        </Link>

        {/* NAV PILL — RIGHT */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            padding: "16px 32px",
            background: "rgba(10, 17, 40, 0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "100px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
            pointerEvents: "auto",
            maxWidth: "max-content",
            flexShrink: 0
          }}
        >
          {/* Desktop links */}
          <div className="d-none d-lg-flex" style={{ gap: "28px", alignItems: "center" }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.5px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#fff";
                  e.target.style.textShadow = "0 0 10px rgba(255,255,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "rgba(255,255,255,0.7)";
                  e.target.style.textShadow = "none";
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/apply"
              style={{
                padding: "10px 28px",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                borderRadius: "50px",
                color: "#fff",
                fontWeight: 800,
                textDecoration: "none",
                fontSize: "1.1rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
                boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
            >
              DOWNLOAD  APP
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="d-lg-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center"
            }}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "absolute",
              top: "100%",
              right: "16px",
              minWidth: "220px",
              marginTop: "8px",
              background: "rgba(10, 17, 40, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "20px",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              zIndex: 999,
              pointerEvents: "auto"
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  paddingBottom: "10px"
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/apply"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                padding: "12px",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                borderRadius: "12px",
                color: "#fff",
                fontWeight: 700,
                textAlign: "center",
                textDecoration: "none"
              }}
            >
              DOWNLOAD  APP
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* ── MOBILE ONLY ── */
        @media (max-width: 991px) {
          /* Shrink logo circle */
          header .container > a > div:first-child {
            width: 68px !important;
            height: 68px !important;
            padding: 5px !important;
          }
          /* Hide bilingual text to keep nav pill (hamburger) visible */
          header .container > a > div:last-child {
            display: none !important;
          }
          /* Shrink nav pill to just wrap the hamburger */
          header nav {
            padding: 10px 18px !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </header>
  );
};

export default HeaderSIU;
