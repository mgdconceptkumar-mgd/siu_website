"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaUniversity, FaSearch, FaCheckCircle, FaTimes, FaTimesCircle } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const UNIVERSITY_LIST = [
  "ABU DHABI HOSPITALITY ACADEMY – LES ROCHES", "ABU DHABI POLYTECHNIC", "ABU DHABI SCHOOL OF MANAGEMENT",
  "Abu Dhabi University", "Ajman University", "AL AIN UNIVERSITY", "Al Qasimia University", "AL WASL UNIVERSITY",
  "ALEXANDRIA UNIVERSITY", "American University in Dubai", "American University In The Emirates",
  "AMERICAN UNIVERSITY OF RAS AL KHAIMAH", "Amity University Dubai", "BATTERJEE MEDICAL COLLEGE",
  "Birla Institute of Technology and Science, Pilani – Dubai Campus", "Birla Institute of Technology, Ras Al Khaimah",
  "British University in Dubai", "CANADIAN UNIVERSITY DUBAI", "City University Ajman", "City University of London",
  "Curtin University", "De Montfort University", "Dubai Institute of Design and Innovation", "Dubai Medical University",
  "DUBAI POLICE ACADEMY", "EM Normandie Business School", "EMIRATES ACADEMY FOR IDENTITY & CITIZENSHIP",
  "Emirates Aviation Academy", "EMIRATES COLLEGE FOR ADVANCED EDUCATION", "Emirates Diplomatic Academy",
  "ESCP BUSINESS SCHOOL", "Esmod French Fashion Institute", "EUROPEAN UNIVERSITY RAK CAMPUS",
  "Fatima College of Health Science", "Georgetown University", "GLOBAL STUDIES UNIVERSITY", "Gulf American University",
  "Gulf Medical University", "Hamdan Bin Mohammed Smart University", "Heriot-Watt University",
  "Higher Colleges of Technology", "Hult International Business School", "Institute of Management Technology",
  "Islamic Azad University (IAU)", "Istituto Marangoni Dubai", "Khalifa University", "London Business School",
  "LUISS Libera Universita Internazionale degli Studi Sociali Guido Carli (DWTCA Branch)", "Manipal University",
  "Middlesex University Dubai", "Moscow University for Industry and Finance (Synergy)", "Murdoch University Dubai",
  "New York University, Abu Dhabi", "Plekhanov University of Economics", "Rabdan Academy, Abu Dhabi",
  "Rochester Institute of Technology – Dubai", "S P Jain School of Global Management", "SAE Institute",
  "Saint Joseph University Dubai", "Shaheed Sulfikar Ali Bhutto Institute of Science and Technology",
  "SKEMA BUSINESS SCHOOL", "Sorbonne University, Abu Dhabi", "Strathclyde Business School UAE",
  "Symbiosis International University", "Umm Al Quwain University", "United Arab Emirates University",
  "University of Birmingham Dubai", "University of Bradford", "University of Dubai",
  "University of Europe for Applied Sciences", "University Of Fujairah", "University of Sharjah",
  "University of Stirling, Ras Al Khaimah", "University of West London, Ras Al Khaimah",
  "University of Wollongong in Dubai", "University Paris II Panthéon-Assas", "Zayed University",
  "Anwar Gargash Diplomatic Academy", "Batterjee Medical College Dubai", "Emirates Institute of Finance",
  "National Defence College", "Neohorizon School of Business", "Sharjah Maritime Academy",
  "Sharjah Police Sciences Academy", "Sharjah Performing Arts Academy", "University of Kalba",
  "University of Khorfakkan", "University of Al Dhaid", "Zayed Military University"
];

const Universities = () => {
  const { lang, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ email: "", mobile: "" });

  const dubaiUnis = [
    { name: "Middlesex University Dubai", img: "/siu-assets/middlesex_logo.png", isIndividual: true, ranking: "QS Top 700" },
    { name: "University of Birmingham", img: "/siu-assets/birmingham_logo.png", isIndividual: true, ranking: "80 Global Rank" },
    { name: "University of Wollongong", img: "/siu-assets/wollongong_logo.png", isIndividual: true, ranking: "185 Global Rank" },
    { name: "University of Dubai", img: "/siu-assets/udubai_logo.png", isIndividual: true, ranking: "QS 601" },
    { name: "Zayed University", img: "/siu-assets/zayed_logo.png", isIndividual: true, ranking: "595 Global Rank" },
    { name: "American Univ. in Dubai", img: "/siu-assets/aud_logo.png", isIndividual: true, ranking: "QS Top 610" },
    { name: "Canadian Univ. Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: 0, y: 0 }, ranking: "#604 Global Rank" },
    { name: "Murdoch Univ. Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: -100, y: 0 }, ranking: "#436 Global Rank" },
    { name: "Amity Univ. Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: 0, y: -100 }, ranking: "Premier Global" },
    { name: "BITS Pilani Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: -100, y: -100 }, ranking: "Top 800 Global" },
    { name: "Heriot-Watt Dubai", img: "/siu-assets/final_logo_batch.png", pos: { x: 0, y: -200 }, ranking: "#235 Global Rank" },
  ];

  const filteredUnis = useMemo(() => {
    if (!searchTerm) return [];
    return UNIVERSITY_LIST.filter(uni => 
      uni.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5);
  }, [searchTerm]);

  const handleSearch = () => {
    if (!searchTerm) return;
    setShowModal(true);
  };

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
              {searchTerm && filteredUnis.length > 0 && !showModal && (
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
                        setShowModal(true);
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

        {/* Logo Section - Responsive Marquee */}
        <div style={{ position: "relative", width: "100%", overflow: "hidden", padding: "20px 0" }}>
          <motion.div
            animate={{ x: lang === "ar" ? [0, 2400] : [0, -2400] }}
            transition={{
              duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 25 : 45,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ display: "flex", gap: "24px", width: "max-content", alignItems: "center", flexDirection: lang === "ar" ? "row-reverse" : "row" }}
          >
            {[...dubaiUnis, ...dubaiUnis, ...dubaiUnis].map((uni, i) => (
              <div
                key={i}
                className="siu-glass-card"
                style={{
                  padding: "24px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "28px",
                  backdropFilter: "blur(20px)",
                  minWidth: "450px",
                  flexDirection: lang === "ar" ? "row-reverse" : "row",
                  textAlign: lang === "ar" ? "right" : "left"
                }}
              >
                <div style={{
                  width: "80px",
                  height: "80px",
                  overflow: "hidden",
                  borderRadius: "16px",
                  background: "#ffffff",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: uni.isIndividual ? "10px" : "0",
                  flexShrink: 0
                }}>
                  <img
                    src={uni.img}
                    alt={uni.name}
                    style={uni.isIndividual ? {
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain"
                    } : {
                      position: "absolute",
                      width: "200%",
                      height: "300%",
                      top: `${uni.pos.y}%`,
                      left: `${uni.pos.x}%`,
                      objectFit: "fill"
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: lang === "ar" ? "flex-end" : "flex-start" }}>
                  <div style={{
                    background: "rgba(96, 165, 250, 0.15)",
                    padding: "4px 12px",
                    borderRadius: "6px",
                    width: "fit-content",
                    border: "1px solid rgba(96, 165, 250, 0.3)"
                  }}>
                    <span style={{ fontSize: "1.1rem", color: "#60a5fa", fontWeight: 800, textTransform: "uppercase" }}>{uni.ranking}</span>
                  </div>
                  <h4 style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.5rem", margin: 0, lineHeight: 1.2 }}>{uni.name}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

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
      </div>

      {/* --- PREMIUM LEAD MODAL --- */}
      <AnimatePresence>
        {showModal && (
          <div style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitting && setShowModal(false)}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(2, 6, 23, 0.8)",
                backdropFilter: "blur(12px)"
              }}
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              style={{
                width: "100%",
                maxWidth: "640px",
                background: "#0f172a",
                borderRadius: "32px",
                padding: "50px",
                position: "relative",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 50px 100px -20px rgba(0, 0, 0, 0.8)",
                textAlign: "center"
              }}
            >
              <button 
                onClick={() => setShowModal(false)}
                style={{ position: "absolute", top: "30px", right: "30px", background: "none", border: "none", color: "#64748b", cursor: "pointer", fontSize: "1.5rem" }}
              >
                <FaTimes />
              </button>

              {!isSuccess ? (
                <>
                  <h3 style={{ color: "#ffffff", fontSize: "3.2rem", fontWeight: 800, marginBottom: "15px", letterSpacing: "-1px" }}>
                    {lang === "ar" ? "ابدأ رحلتك الجامعية" : "Start Your Journey"}
                  </h3>
                  <p style={{ color: "#94a3b8", fontSize: "1.5rem", marginBottom: "45px", fontWeight: 500 }}>
                    {lang === "ar" 
                      ? `احصل على مشورة الخبراء لـ ${searchTerm}`
                      : `Get expert guidance for ${searchTerm}`}
                  </p>
                  
                  <form onSubmit={handleEnquiry} style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                    <div style={{ textAlign: "left" }}>
                      <label style={{ color: "#f8fafc", fontSize: "1.2rem", display: "block", marginBottom: "12px", fontWeight: 600 }}>Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        style={{
                          width: "100%",
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          padding: "20px 24px",
                          borderRadius: "16px",
                          color: "white",
                          fontSize: "1.4rem",
                          outline: "none",
                          transition: "border-color 0.2s"
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
                        onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.12)"}
                      />
                    </div>
                    
                    <div style={{ textAlign: "left" }}>
                      <label style={{ color: "#f8fafc", fontSize: "1.2rem", display: "block", marginBottom: "12px", fontWeight: 600 }}>Mobile Number</label>
                      <div className="siu-phone-wrapper">
                        <PhoneInput
                          country={"ae"}
                          value={formData.mobile}
                          onChange={(phone) => setFormData({...formData, mobile: phone})}
                          containerStyle={{ width: "100%" }}
                          inputStyle={{
                            width: "100%",
                            height: "64px",
                            background: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            borderRadius: "16px",
                            color: "white",
                            fontSize: "1.5rem",
                            paddingLeft: "80px"
                          }}
                          buttonStyle={{
                            background: "rgba(255, 255, 255, 0.06)",
                            border: "none",
                            borderRadius: "16px 0 0 16px",
                            width: "70px",
                            borderRight: "1px solid rgba(255, 255, 255, 0.1)"
                          }}
                          dropdownStyle={{
                            background: "#1e293b",
                            color: "white",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "12px",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                            textAlign: "left",
                            width: "350px",
                            fontSize: "1.3rem"
                          }}
                        />
                      </div>
                    </div>
                    
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      style={{
                        marginTop: "10px",
                        background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                        color: "white",
                        padding: "22px",
                        borderRadius: "18px",
                        fontSize: "1.6rem",
                        fontWeight: 800,
                        border: "none",
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                        opacity: isSubmitting ? 0.7 : 1,
                        transition: "all 0.3s",
                        boxShadow: "0 15px 30px rgba(37, 99, 235, 0.4)"
                      }}
                      onMouseOver={(e) => !isSubmitting && (e.target.style.transform = "translateY(-2px)")}
                      onMouseOut={(e) => !isSubmitting && (e.target.style.transform = "translateY(0)")}
                    >
                      {isSubmitting ? (lang === "ar" ? "جاري الإرسال..." : "Submitting...") : (lang === "ar" ? "تقديم طلب اهتمام" : "Unlock Admissions Guide")}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <FaCheckCircle style={{ color: "#22c55e", fontSize: "7rem", marginBottom: "25px" }} />
                  <h3 style={{ color: "#ffffff", fontSize: "3.2rem", fontWeight: 800, marginBottom: "20px" }}>
                    {lang === "ar" ? "تم استلام طلبك بنجاح!" : "Access Granted!"}
                  </h3>
                  <p style={{ color: "#94a3b8", fontSize: "1.6rem", marginBottom: "40px", lineHeight: 1.5 }}>
                    {lang === "ar" 
                      ? "مسح رمز الاستجابة السريعة لتحميل التطبيق والبدء فوراً"
                      : "Scan your personalized QR code to download the SIU app and track your admission status."}
                  </p>
                  
                  {/* --- PREMIUM QR CODE SECTION --- */}
                  <div style={{
                    background: "#ffffff",
                    padding: "20px",
                    borderRadius: "28px",
                    width: "240px",
                    margin: "0 auto 40px",
                    boxShadow: "0 0 50px rgba(59, 130, 246, 0.4)",
                    border: "8px solid rgba(59, 130, 246, 0.1)"
                  }}>
                    <img
                      src="/assets/images/qr-code.png"
                      alt="SIU QR Code"
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                  
                  <button
                    onClick={() => window.open('https://studyinuae.moe.gov.ae', '_blank')}
                    style={{
                      width: "100%",
                      background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                      color: "white",
                      padding: "22px",
                      borderRadius: "18px",
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)"
                    }}
                  >
                    {lang === "ar" ? "تحميل التطبيق الآن" : "Download App Now"}
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
          /* Hide scrollbar */
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
