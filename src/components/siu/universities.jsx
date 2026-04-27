"use client";
import React, { useState, useMemo } from "react";
import UNIVERSITY_DATA from "../../../uni_desc.json";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaUniversity, FaSearch, FaCheckCircle, FaTimes, FaTimesCircle, FaApple, FaAndroid, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { HiOutlineAcademicCap, HiOutlineUserGroup, HiOutlineStar, HiOutlineCalendar, HiOutlineClipboardCheck, HiOutlineDeviceMobile } from "react-icons/hi";
import { useLanguage } from "../../contexts/LanguageContext";
import "./universities.css";

/* ============================================================
   UNIVERSITY SEARCH LIST — autocomplete suggestions derived from JSON
   ============================================================ */
const UNIVERSITY_LIST = UNIVERSITY_DATA.map(item => item.university);

const UNIVERSAL_LOGO = "https://img.icons8.com/fluency/100/university.png";

/**
 * Looks up a university detail record from the JSON data.
 * Constructs dynamic logo URL using universityCode.
 */
const getUniversityDetail = (name) => {
  const item = UNIVERSITY_DATA.find(u => 
    u.university.toLowerCase().includes(name.toLowerCase()) || 
    name.toLowerCase().includes(u.university.toLowerCase())
  );
  
  if (item) {
    return {
      name: item.university,
      logo: item.universityCode 
        ? `https://siu-university-assets.s3.ap-south-1.amazonaws.com/universities/${item.universityCode}.jpg`
        : UNIVERSAL_LOGO,
      location: item.location || "United Arab Emirates", 
      description: item.universityDescription || `${item.university} is a recognized institution in the UAE offering world-class education and diverse opportunities. Discover its programs and campus life by applying through SIU.`,
      stats: { programs: "40+", students: "3,000+", ranking: "Top Tier", established: "—" }
    };
  }

  // Fallback for unmapped universities
  return {
    name: name,
    logo: UNIVERSAL_LOGO,
    location: "UAE",
    description: `${name} is a recognized institution in the UAE offering a wide range of academic programs. Discover world-class education, diverse campus life, and strong career opportunities by applying through SIU.`,
    stats: { programs: "30+", students: "2,000+", ranking: "Accredited", established: "—" },
  };
};


/* ============================================================
   MAIN COMPONENT
   Views: Search → Detail → Apply Modal → QR Modal
   ============================================================ */
const Universities = () => {
  const { lang, t } = useLanguage();

  // ── Original states ──
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ email: "", mobile: "" });

  // ── NEW states for detail view & apply flow ──
  const [selectedUni, setSelectedUni] = useState(null);       // university detail object
  const [showApplyModal, setShowApplyModal] = useState(false); // apply now 2-option modal
  const [showQRModal, setShowQRModal] = useState(false);       // QR download modal

  // ── Marquee logos (Dynamic from JSON) ──
  const marqueeUnis = useMemo(() => {
    return UNIVERSITY_DATA.map(item => ({
      name: item.university,
      img: item.universityCode 
        ? `https://siu-university-assets.s3.ap-south-1.amazonaws.com/universities/${item.universityCode}.jpg`
        : UNIVERSAL_LOGO
    })).filter(u => u.img !== UNIVERSAL_LOGO || u.name.length < 40); // Simple filter to keep it clean
  }, []);

  // ── Filtered autocomplete results ──
  const filteredUnis = useMemo(() => {
    if (!searchTerm) return [];
    return UNIVERSITY_LIST.filter(uni => 
      uni.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5);
  }, [searchTerm]);

  // ── MODIFIED: Search now goes to detail view instead of lead modal ──
  const handleSearch = () => {
    if (!searchTerm) return;
    const detail = getUniversityDetail(searchTerm);
    setSelectedUni(detail);
  };

  // ── Back from detail to main section ──
  const handleBackToSearch = () => {
    setSelectedUni(null);
  };

  // ── Apply Now now directly opens the QR modal (skipping screen 1) ──
  const handleApplyNow = () => {
    setShowQRModal(true);
  };

  // ── Register Now — placeholder for now ──
  const handleRegisterNow = () => {
    // Will be implemented later
    alert("Registration flow coming soon!");
  };

  // ── Download App — close apply modal, open QR modal ──
  const handleDownloadApp = () => {
    setShowApplyModal(false);
    setShowQRModal(true);
  };

  // ── Original enquiry handler (kept for backwards compat) ──
  const handleEnquiry = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          university: searchTerm,
          language: lang
        })
      });
      if (res.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="universities" style={{ padding: "120px 0", background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)", overflow: "hidden", direction: lang === "ar" ? "rtl" : "ltr" }}>
      <div className="container">

        {/* ============================================================
            ORIGINAL LAYOUT — Title, Search, Marquee, Strategic Card
            Only shown when NO university is selected
            ============================================================ */}
        {!selectedUni ? (
          <>
            <div style={{ textAlign: "center", marginBottom: "70px" }}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  fontSize: "4.2rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "28px",
                  letterSpacing: lang === "ar" ? "0" : "-3px"
                }}
              >
                {t("universities.title")}
              </motion.h2>
              
              {/* --- Premium Search Bar --- */}
              <div style={{ maxWidth: "600px", margin: "0 auto 40px", position: "relative" }}>
                <div style={{
                  display: "flex",
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "50px",
                  padding: "5px 8px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  flexDirection: lang === "ar" ? "row-reverse" : "row"
                }}>
                  <div style={{ display: "flex", alignItems: "center", flex: 1, padding: lang === "ar" ? "0 0 0 15px" : "0 15px 0 0", position: "relative" }}>
                    <FaSearch style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.5rem", marginLeft: lang === "ar" ? "0" : "15px", marginRight: lang === "ar" ? "15px" : "0" }} />
                    <input
                      type="text"
                      placeholder={lang === "ar" ? "ابحث عن جامعتك مفضلة..." : "Search for your target university..."}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch();
                      }}
                      style={{
                        flex: 1,
                        background: "transparent",
                        border: "none",
                        padding: "12px 40px 12px 15px",
                        color: "#ffffff",
                        fontSize: "1.45rem",
                        outline: "none",
                        textAlign: lang === "ar" ? "right" : "left"
                      }}
                    />
                    {searchTerm && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => setSearchTerm("")}
                        style={{
                          position: "absolute",
                          right: lang === "ar" ? "auto" : "20px",
                          left: lang === "ar" ? "20px" : "auto",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "rgba(255, 255, 255, 0.4)",
                          transition: "color 0.2s"
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)"}
                        onMouseOut={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.4)"}
                      >
                        <FaTimesCircle style={{ fontSize: "1.4rem" }} />
                      </motion.div>
                    )}
                  </div>
                  <button 
                    onClick={handleSearch}
                    style={{
                      background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                      color: "white",
                      border: "none",
                      padding: "0 30px",
                      borderRadius: "40px",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: "0 10px 20px rgba(37, 99, 235, 0.3)"
                    }}
                    onMouseOver={(e) => e.target.style.transform = "translateY(-1px)"}
                    onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
                  >
                    {lang === "ar" ? "بحث" : "Search"}
                  </button>
                </div>
                
                {/* Search Suggestions */}
                <AnimatePresence>
                  {searchTerm && filteredUnis.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        marginTop: "12px",
                        background: "rgba(15, 23, 42, 0.98)",
                        backdropFilter: "blur(30px)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "20px",
                        overflow: "hidden",
                        zIndex: 100,
                        boxShadow: "0 30px 60px rgba(0,0,0,0.6)"
                      }}
                    >
                      {filteredUnis.map((uni, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setSearchTerm(uni);
                            // Navigate to detail view instead of lead modal
                            const detail = getUniversityDetail(uni);
                            setSelectedUni(detail);
                          }}
                          style={{
                            padding: "16px 24px",
                            color: "#ffffff",
                            cursor: "pointer",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            textAlign: lang === "ar" ? "right" : "left",
                            transition: "all 0.2s",
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                            flexDirection: lang === "ar" ? "row-reverse" : "row"
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.background = "rgba(59, 130, 246, 0.15)";
                            e.currentTarget.style.paddingLeft = lang === "ar" ? "24px" : "30px";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.paddingLeft = "24px";
                          }}
                        >
                          <FaUniversity style={{ color: "#3b82f6", fontSize: "1.2rem" }} />
                          <span style={{ fontSize: "1.2rem", fontWeight: 500 }}>{uni}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{
                  fontSize: "1.75rem",
                  color: "#cbd5e1",
                  maxWidth: "900px",
                  margin: "0 auto 80px",
                  lineHeight: 1.6
                }}
              >
                {t("universities.subtitle")}
              </motion.p>
            </div>

            {/* Logo Marquee Section - Compact Premium Cards */}
            <div style={{ position: "relative", width: "100%", overflow: "hidden", padding: "30px 0" }}>
              {/* Row 1: Left to Right */}
                <motion.div
                animate={{ x: lang === "ar" ? [-5000, 0] : [0, -5000] }}
                transition={{
                  duration: 80,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ display: "flex", gap: "20px", width: "max-content", marginBottom: "20px", flexDirection: lang === "ar" ? "row-reverse" : "row" }}
              >
                {[...marqueeUnis, ...marqueeUnis].map((uni, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onClick={() => {
                      const detail = getUniversityDetail(uni.name);
                      setSelectedUni(detail);
                    }}
                    style={{
                      width: "180px",
                      height: "115px",
                      background: "#ffffff",
                      borderRadius: "18px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "12px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      cursor: "pointer",
                      gap: "8px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}>
                      <img
                        src={uni.img}
                        alt={uni.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = UNIVERSAL_LOGO;
                        }}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain"
                        }}
                      />
                    </div>
                    <span style={{ 
                      fontSize: "0.95rem", 
                      fontWeight: 700, 
                      color: "#1e293b", 
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "100%",
                      padding: "0 4px"
                    }}>
                      {uni.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Row 2: Right to Left */}
              <motion.div
                animate={{ x: lang === "ar" ? [0, -5000] : [-5000, 0] }}
                transition={{
                  duration: 90,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ display: "flex", gap: "20px", width: "max-content", flexDirection: lang === "ar" ? "row-reverse" : "row" }}
              >
                {[...marqueeUnis, ...marqueeUnis].reverse().map((uni, i) => (
                  <motion.div
                    key={`rev-${i}`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onClick={() => {
                      const detail = getUniversityDetail(uni.name);
                      setSelectedUni(detail);
                    }}
                    style={{
                      width: "180px",
                      height: "115px",
                      background: "#ffffff",
                      borderRadius: "18px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "12px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      cursor: "pointer",
                      gap: "8px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}>
                      <img
                        src={uni.img}
                        alt={uni.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = UNIVERSAL_LOGO;
                        }}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain"
                        }}
                      />
                    </div>
                    <span style={{ 
                      fontSize: "0.95rem", 
                      fontWeight: 700, 
                      color: "#1e293b", 
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "100%",
                      padding: "0 4px"
                    }}>
                      {uni.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Strategic Positioning Card */}
            <div className="strategic-positioning-card" style={{
              marginTop: "100px",
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.03)",
              padding: "80px",
              borderRadius: "48px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(40px)"
            }}>
              <h3 className="strategic-title" style={{ color: "#ffffff", fontSize: "4.8rem", fontWeight: 600, marginBottom: "40px", letterSpacing: lang === "ar" ? "0" : "-3px" }}>
                {t("universities.strategic_title")}
              </h3>
              <p className="strategic-quote" style={{ color: "rgba(255,255,255,0.85)", fontSize: "2.4rem", lineHeight: 1.5, maxWidth: "1100px", margin: "0 auto", fontWeight: 500, fontStyle: "italic" }}>
                {t("universities.strategic_quote")}
              </p>
            </div>
          </>
        ) : (
          /* ============================================================
             UNIVERSITY DETAIL VIEW — Premium with staggered animations
             ============================================================ */
          <motion.div
            className="uni-detail"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Back Button */}
            <motion.button
              className="uni-detail__back-btn"
              onClick={handleBackToSearch}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {lang === "ar" ? "العودة إلى الجامعات" : "Back to Universities"}
            </motion.button>

            {/* Detail Card */}
            <motion.div
              className="uni-detail__card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Logo + Name + Location */}
              <div className="uni-detail__top">
                <motion.div
                  className="uni-detail__logo-wrap"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25, type: "spring", stiffness: 200, damping: 15 }}
                >
                  <img 
                    src={selectedUni.logo} 
                    alt={selectedUni.name} 
                    className="uni-detail__logo-img" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = UNIVERSAL_LOGO;
                    }}
                  />
                </motion.div>
                <div className="uni-detail__info">
                  <h2 className="uni-detail__name">{selectedUni.name}</h2>
                  <p className="uni-detail__location">
                    <FaMapMarkerAlt className="uni-detail__location-icon" />
                    {selectedUni.location}
                  </p>
                </div>
              </div>

              {/* Divider */}
            <div className="uni-detail__divider" />

              {/* Description */}
              <motion.p
                className="uni-detail__desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {selectedUni.description}
              </motion.p>



              {/* Apply Now Button — centered, not full width */}
              <motion.button
                className="uni-detail__apply-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleApplyNow}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {lang === "ar" ? "قدّم الآن" : "Apply Now"}
                <FaArrowRight className="btn-arrow" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* ============================================================
          NEW: APPLY NOW MODAL — 2 Options (Register / Download)
          (Currently Commented Out per request)
          ============================================================ */}
      {/* 
      <AnimatePresence>
        {showApplyModal && (
          <motion.div
            className="apply-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowApplyModal(false)}
          >
            <motion.div
              className="apply-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.93, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <button className="apply-modal__close" onClick={() => setShowApplyModal(false)}>
                <FaTimes />
              </button>

              <motion.div
                className="apply-modal__icon-wrap"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 12 }}
              >
                <HiOutlineAcademicCap />
              </motion.div>

              <motion.h3
                className="apply-modal__title"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {lang === "ar" ? "ابدأ طلبك" : "Start Your Application"}
              </motion.h3>
              <motion.p
                className="apply-modal__subtitle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                {lang === "ar"
                  ? <>اختر طريقة التقديم إلى <strong>{selectedUni?.name}</strong></>
                  : <>Choose how you'd like to apply to <strong>{selectedUni?.name}</strong></>}
              </motion.p>

              <div className="apply-modal__options">
                <motion.div
                  className="apply-option apply-option--register"
                  onClick={handleRegisterNow}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <span className="apply-option__badge">
                    <span className="apply-option__badge-icon">✨</span>
                    {lang === "ar" ? "احصل على خصم 10% فوري على التسجيل" : "Get Instant 10% Discount on Registration"}
                  </span>
                  <div className="apply-option__row">
                    <div className="apply-option__icon-box">
                      <HiOutlineClipboardCheck />
                    </div>
                    <div className="apply-option__content">
                      <p className="apply-option__title">
                        {lang === "ar" ? "سجّل الآن" : "Register Now"}
                      </p>
                      <p className="apply-option__desc">
                        {lang === "ar"
                          ? "أكمل تسجيلك عبر الإنترنت واحصل على خصم 10% حصري فوراً."
                          : "Complete your registration online and unlock an exclusive 10% discount instantly."}
                      </p>
                    </div>
                    <div className="apply-option__arrow">
                      <FaArrowRight />
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="apply-modal__separator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  {lang === "ar" ? "أو" : "OR"}
                </motion.div>

                <motion.div
                  className="apply-option apply-option--download"
                  onClick={handleDownloadApp}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <div className="apply-option__row">
                    <div className="apply-option__icon-box">
                      <HiOutlineDeviceMobile />
                    </div>
                    <div className="apply-option__content">
                      <p className="apply-option__title">
                        {lang === "ar" ? "تحميل التطبيق" : "Download App"}
                      </p>
                      <p className="apply-option__desc">
                        {lang === "ar"
                          ? "حمّل تطبيق SIU على iOS أو Android لأفضل تجربة تقديم."
                          : "Get the SIU mobile app on iOS or Android for the best application experience."}
                      </p>
                    </div>
                    <div className="apply-option__arrow">
                      <FaArrowRight />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      */}

      {/* ============================================================
          NEW: QR DOWNLOAD MODAL — iOS & Android
          ============================================================ */}
      <AnimatePresence>
        {showQRModal && (
          <motion.div
            className="qr-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQRModal(false)}
          >
            <motion.div
              className="qr-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.93, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Close */}
              <button className="qr-modal__close" onClick={() => setShowQRModal(false)}>
                <FaTimes />
              </button>

              {/* Header */}
              <h3 className="qr-modal__title">
                {lang === "ar" ? "تحميل تطبيق SIU" : "Download the SIU App"}
              </h3>
              <p className="qr-modal__subtitle">
                {lang === "ar"
                  ? "امسح رمز QR بكاميرا هاتفك لتحميل التطبيق على جهازك المفضل."
                  : "Scan the QR code with your phone camera to download the app on your preferred platform."}
              </p>

              {/* Platform Cards */}
              <div className="qr-modal__platforms">
                {/* iOS */}
                <motion.div
                  className="qr-platform"
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <FaApple className="qr-platform__icon" />
                  <span className="qr-platform__label">
                    {lang === "ar" ? "تطبيق iOS" : "iOS App"}
                  </span>
                  <div className="qr-platform__qr-wrap">
                    <img src="/assets/images/qr-code.png" alt="iOS QR" className="qr-platform__qr-img" />
                  </div>
                  <button
                    className="qr-platform__btn qr-platform__btn--ios"
                    onClick={() => window.open('https://apps.apple.com', '_blank')}
                  >
                    App Store
                  </button>
                </motion.div>

                {/* Android */}
                <motion.div
                  className="qr-platform qr-platform--android"
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <FaAndroid className="qr-platform__icon qr-platform__icon--android" />
                  <span className="qr-platform__label">
                    {lang === "ar" ? "تطبيق Android" : "Android App"}
                  </span>
                  <div className="qr-platform__qr-wrap">
                    <img src="/assets/images/qr-code.png" alt="Android QR" className="qr-platform__qr-img" />
                  </div>
                  <button
                    className="qr-platform__btn qr-platform__btn--android"
                    onClick={() => window.open('https://play.google.com', '_blank')}
                  >
                    Google Play
                  </button>
                </motion.div>
              </div>

              {/* Close text */}
              <button className="qr-modal__close-text" onClick={() => setShowQRModal(false)}>
                {lang === "ar" ? "إغلاق" : "Close window"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Original styles (kept as-is) ── */}
      <style jsx global>{`
        .siu-phone-wrapper .react-tel-input {
          font-family: inherit !important;
          border: none !important;
        }
        .siu-phone-wrapper .react-tel-input .form-control {
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 16px !important;
          color: #fff !important;
          width: 100% !important;
          height: 65px !important;
          font-size: 1.5rem !important;
          padding-left: 85px !important;
          transition: all 0.3s ease !important;
        }
        .siu-phone-wrapper .react-tel-input .form-control:focus {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: #3b82f6 !important;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.2) !important;
        }
        .siu-phone-wrapper .react-tel-input .flag-dropdown {
          background: transparent !important;
          border: none !important;
          border-radius: 16px 0 0 16px !important;
          padding: 0 !important;
          width: auto !important;
        }
        .siu-phone-wrapper .react-tel-input .selected-flag {
          background: transparent !important;
          width: 80px !important;
          height: 100% !important;
          padding: 0 0 0 20px !important;
          border-radius: 16px 0 0 16px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        .siu-phone-wrapper .react-tel-input .selected-flag:hover,
        .siu-phone-wrapper .react-tel-input .selected-flag:focus,
        .siu-phone-wrapper .react-tel-input .selected-flag.open {
          background: rgba(255, 255, 255, 0.05) !important;
        }
        .siu-phone-wrapper .react-tel-input .flag-dropdown.open .selected-flag {
          background: rgba(255, 255, 255, 0.1) !important;
        }
        .siu-phone-wrapper .react-tel-input .arrow {
          border-top-color: #94a3b8 !important;
          margin-left: 8px !important;
        }
        .siu-phone-wrapper .react-tel-input .arrow.up {
          border-bottom-color: #3b82f6 !important;
        }
        .siu-phone-wrapper .react-tel-input .country-list {
          background: #0f172a !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 18px !important;
          margin-top: 10px !important;
          width: 360px !important;
          padding: 10px 0 !important;
          box-shadow: 0 40px 80px rgba(0,0,0,0.7) !important;
          overflow-x: hidden !important;
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .siu-phone-wrapper .react-tel-input .country-list::-webkit-scrollbar {
          display: none !important;
        }
        .siu-phone-wrapper .react-tel-input .country-list .country {
          padding: 12px 20px !important;
          transition: all 0.2s ease !important;
        }
        .siu-phone-wrapper .react-tel-input .country-list .country:hover,
        .siu-phone-wrapper .react-tel-input .country-list .country.highlight {
          background: rgba(59, 130, 246, 0.15) !important;
        }
        .siu-phone-wrapper .react-tel-input .country-list .country .country-name {
          color: #f1f5f9 !important;
          font-size: 1.3rem !important;
        }
        .siu-phone-wrapper .react-tel-input .country-list .country .dial-code {
          color: #93c5fd !important;
          font-size: 1.2rem !important;
        }

        @media (max-width: 991px) {
          #universities {
            padding: 80px 0 !important;
          }
          
          #universities h2 {
            font-size: 3rem !important;
            letter-spacing: -1.5px !important;
            margin-bottom: 20px !important;
            line-height: 1.1 !important;
          }

          #universities p {
            font-size: 1.25rem !important;
            margin-bottom: 40px !important;
            line-height: 1.6 !important;
            padding: 0 15px !important;
          }

          .siu-glass-card {
            min-width: 320px !important;
            padding: 24px !important;
            border-radius: 20px !important;
            gap: 16px !important;
          }

          .siu-glass-card > div:first-child {
            width: 70px !important;
            height: 70px !important;
            border-radius: 12px !important;
            background: #ffffff !important;
          }

          .siu-glass-card h4 {
            font-size: 1.35rem !important;
            letter-spacing: -0.2px !important;
            font-weight: 800 !important;
          }

          .siu-glass-card span {
            font-size: 0.9rem !important;
          }

          .strategic-positioning-card {
            padding: 60px 24px !important;
            border-radius: 32px !important;
            margin-top: 80px !important;
            text-align: center !important;
            border: 1px solid rgba(255, 255, 255, 0.12) !important;
          }

          .strategic-title {
            font-size: 2.5rem !important;
            letter-spacing: -1.5px !important;
            margin-bottom: 24px !important;
            line-height:1.2 !important;
          }

          .strategic-quote {
            font-size: 1.6rem !important;
            line-height: 1.6 !important;
            max-width: 100% !important;
            font-weight: 500 !important;
          }
        }

        @media (max-width: 480px) {
          .strategic-title {
            font-size: 2rem !important;
          }
          .strategic-quote {
            font-size: 1.4rem !important;
          }
          .siu-glass-card {
             min-width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Universities;
