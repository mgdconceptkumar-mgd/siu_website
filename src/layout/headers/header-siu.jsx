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

            {/* Desktop Language Switcher (Sliding Toggle) */}
            <div style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "100px",
              padding: "2px",
              display: "flex",
              position: "relative",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              minWidth: "120px"
            }}>
              {/* Sliding Background */}
              <motion.div
                animate={{ x: lang === 'en' ? '0%' : '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "2px",
                  width: "calc(50% - 2px)",
                  height: "calc(100% - 4px)",
                  background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                  borderRadius: "100px",
                  zIndex: 1
                }}
              />
              <button
                onClick={() => setLang('en')}
                style={{
                  flex: 1,
                  padding: "6px 12px",
                  background: "none",
                  border: "none",
                  color: lang === 'en' ? "#fff" : "rgba(255,255,255,0.4)",
                  fontSize: "0.9rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  zIndex: 2,
                  transition: "color 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px"
                }}
              >
                EN
              </button>
              <button
                onClick={() => setLang('ar')}
                style={{
                  flex: 1,
                  padding: "6px 12px",
                  background: "none",
                  border: "none",
                  color: lang === 'ar' ? "#fff" : "rgba(255,255,255,0.4)",
                  fontSize: "0.9rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  zIndex: 2,
                  transition: "color 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px"
                }}
              >
                AR
              </button>
            </div>
          </div>

          {/* Mobile hamburger + Quick Toggle */}
          <div className="d-lg-none" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {/* Quick Toggle for Mobile */}
            <div 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                padding: "4px 12px",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: lang === 'en' ? "#fff" : "rgba(255,255,255,0.4)" }}>EN</span>
              <span style={{ width: "1px", height: "10px", background: "rgba(255,255,255,0.2)" }} />
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: lang === 'ar' ? "#fff" : "rgba(255,255,255,0.4)" }}>AR</span>
            </div>

            <button
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
          </div>
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
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: "100%",
                right: "16px",
                minWidth: "260px",
                marginTop: "12px",
                background: "rgba(10, 17, 40, 0.98)",
                backdropFilter: "blur(30px)",
                padding: "24px",
                borderRadius: "28px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                zIndex: 999,
                pointerEvents: "auto"
              }}
            >
              {/* Mobile Language Switcher Section */}
              <div style={{ paddingBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                  Select Language
                </p>
                <div style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "100px",
                  padding: "4px",
                  display: "flex",
                  position: "relative",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}>
                  {/* Sliding Background */}
                  <motion.div
                    animate={{ x: lang === 'en' ? '0%' : '100%' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                      position: "absolute",
                      top: "4px",
                      left: "4px",
                      width: "calc(50% - 4px)",
                      height: "calc(100% - 8px)",
                      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                      borderRadius: "100px",
                      zIndex: 1
                    }}
                  />
                  <button
                    onClick={() => setLang('en')}
                    style={{
                      flex: 1,
                      padding: "10px",
                      background: "none",
                      border: "none",
                      color: lang === 'en' ? "#fff" : "rgba(255,255,255,0.4)",
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      cursor: "pointer",
                      zIndex: 2,
                      transition: "color 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px"
                    }}
                  >
                    <span>🇺🇸</span> EN
                  </button>
                  <button
                    onClick={() => setLang('ar')}
                    style={{
                      flex: 1,
                      padding: "10px",
                      background: "none",
                      border: "none",
                      color: lang === 'ar' ? "#fff" : "rgba(255,255,255,0.4)",
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      cursor: "pointer",
                      zIndex: 2,
                      transition: "color 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px"
                    }}
                  >
                    <span>🇦🇪</span> العربية
                  </button>
                </div>
              </div>

              {navLinks.filter(l => l.name !== "DOWNLOAD  APP").map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    padding: "10px 0",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  {link.name}
                  <span style={{ fontSize: "1.2rem", opacity: 0.3 }}>
                    {lang === 'ar' ? "←" : "→"}
                  </span>
                </Link>
              ))}

              <div style={{ position: "relative", width: "100%", marginTop: "10px" }}>
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "16px 20px",
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    borderRadius: "20px",
                    color: "#fff",
                    fontWeight: 800,
                    textAlign: "center",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    opacity: 0.7,
                    cursor: "not-allowed",
                    pointerEvents: "none",
                    boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)"
                  }}
                >
                  DOWNLOAD APP
                </Link>
                <span style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-4px",
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                  color: "#fff",
                  fontSize: "0.6rem",
                  fontWeight: 900,
                  padding: "4px 10px",
                  borderRadius: "20px",
                  boxShadow: "0 4px 12px rgba(245, 158, 11, 0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
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
            width: 62px !important;
            height: 62px !important;
            padding: 4px !important;
          }
          /* Hide bilingual text to keep nav pill (hamburger) visible */
          header .container > a > div:last-child {
            display: none !important;
          }
          /* Responsive Nav Pill */
          header nav {
            padding: 10px 16px !important;
            gap: 0 !important;
            margin-left: auto;
          }
        }
      `}</style>
    </header>
  );
};

export default HeaderSIU;
