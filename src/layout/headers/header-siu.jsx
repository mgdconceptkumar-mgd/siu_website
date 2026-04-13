"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const HeaderSIU = () => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t("header.universities"), href: "#universities" },
    { name: t("header.ecosystem"), href: "#ecosystem" },
    { name: t("header.features"), href: "#how-it-works" },
  ];

  return (
    <header
      style={{
        position: "absolute",
        top: "10px",
        left: "0",
        right: "0",
        width: "100%",
        direction: lang === "ar" ? "ltr" : "ltr", // Keep header container LTR for layout consistency, but inner text follows lang
        zIndex: 1000,
        pointerEvents: "none"
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", direction: lang === "ar" ? "rtl" : "ltr" }}>

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
          <div style={{ display: "flex", flexDirection: "column", gap: "5px", textAlign: lang === "ar" ? "right" : "left" }}>
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
            flexShrink: 0,
            direction: "ltr" // Links always LTR sequence in the pill
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

            {/* Language Toggle */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "8px 16px",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                <span style={{ opacity: lang === 'en' ? 1 : 0.5 }}>EN</span>
                <span style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.2)" }} />
                <span style={{ opacity: lang === 'ar' ? 1 : 0.5 }}>AR</span>
                <span style={{ fontSize: "0.8rem", transform: isLangOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }}>▼</span>
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 10px)",
                      right: 0,
                      background: "rgba(15, 23, 42, 0.95)",
                      backdropFilter: "blur(20px)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      padding: "8px",
                      minWidth: "140px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px"
                    }}
                  >
                    {[
                      { id: 'en', label: 'English', flag: '🇺🇸' },
                      { id: 'ar', label: 'العربية', flag: '🇦🇪' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setLang(item.id);
                          setIsLangOpen(false);
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px 14px",
                          background: lang === item.id ? "rgba(59, 130, 246, 0.2)" : "transparent",
                          borderRadius: "10px",
                          border: "none",
                          color: "#fff",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          width: "100%",
                          textAlign: "left"
                        }}
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span>{item.flag}</span>
                          {item.label}
                        </span>
                        {lang === item.id && <span style={{ color: "#3b82f6" }}>✓</span>}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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

      {/* MOBILE MENU BACKDROP + DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Invisible backdrop — tap anywhere to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 998,
                pointerEvents: "auto"
              }}
            />
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
              {navLinks.filter(l => l.name !== "DOWNLOAD  APP").map((link) => (
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
              <div style={{ position: "relative", width: "100%" }}>
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "10px 20px",
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    borderRadius: "50px",
                    color: "#fff",
                    fontWeight: 800,
                    textAlign: "center",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.8px",
                    marginTop: "4px",
                    opacity: 0.7,
                    cursor: "not-allowed",
                    pointerEvents: "none"
                  }}
                >
                  DOWNLOAD APP
                </Link>
                <span style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                  color: "#fff",
                  fontSize: "0.55rem",
                  fontWeight: 900,
                  padding: "2px 6px",
                  borderRadius: "20px",
                  boxShadow: "0 4px 10px rgba(245, 158, 11, 0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  zIndex: 2,
                  pointerEvents: "none"
                }}>
                  Coming Soon
                </span>
              </div>
            </motion.div>
          </>
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
