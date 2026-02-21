"use client";
import React, { useState, useRef, useEffect } from "react";
import { Footer, Header } from "../../layout";
import useParallax from "@/hooks/use-parallax";
import { motion } from "framer-motion";

/* ---------------- Floating Navigation ---------------- */
const FloatingNav = () => {
    const sections = [
        { id: "overview", label: "Overview" },
        { id: "apply-once", label: "Apply Once, Multiple Universities" },
        { id: "universities", label: "Universities & Programs" },
        { id: "dashboard", label: "Student Dashboard" },
        { id: "security", label: "Security & Payments" },
        { id: "how-it-works", label: "How It Works" },
    ];

    const [active, setActive] = useState(sections[0].id);
    const navRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach(
                    (entry) => entry.isIntersecting && setActive(entry.target.id)
                ),
            { threshold: 0.2, rootMargin: "-150px 0px -30% 0px" }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const activeBtn = document.querySelector(`[data-id="${active}"]`);
        if (activeBtn && navRef.current) {
            activeBtn.scrollIntoView({ behavior: "smooth", inline: "center" });
        }
    }, [active]);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 160,
            behavior: "smooth",
        });
    };

    return (
        <div
            style={{
                position: "fixed",
                top: "75px",
                width: "100%",
                background: "rgba(255,255,255,0.95)",
                padding: "12px 0",
                zIndex: 9999,
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid rgba(200,200,200,0.4)",
            }}
        >
            <div
                ref={navRef}
                className="floating-nav-scroll"
                style={{
                    display: "flex",
                    gap: "10px",
                    padding: "0 4%",
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                }}
            >
                {sections.map((sec) => (
                    <motion.div
                        key={sec.id}
                        data-id={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        whileHover={{ scale: 1.06 }}
                        style={{
                            cursor: "pointer",
                            padding: "10px 20px",
                            borderRadius: "22px",
                            fontSize: "0.9rem",
                            fontWeight: active === sec.id ? "700" : "500",
                            background: active === sec.id ? "#6f8aff" : "#f6f7ff",
                            color: active === sec.id ? "#fff" : "#333",
                            transition: ".3s",
                            boxShadow:
                                active === sec.id
                                    ? "0 6px 16px rgba(110,120,255,0.35)"
                                    : "none",
                        }}
                    >
                        {sec.label}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};


const heroScreens = [
    {
        id: 1,
        title: "Login",
        img: "/assets/images/about/siu1.jpeg",
    },
    {
        id: 2,
        title: "Universities",
        img: "/assets/images/about/siu2.jpeg",
    },
    {
        id: 3,
        title: "Upload Documents",
        img: "/assets/images/about/siu3.jpeg",
    },
    {
        id: 4,
        title: "Track Application",
        img: "/assets/images/about/siu4.jpeg",
    },
    {
        id: 5,
        title: "Offer Received",
        img: "/assets/images/about/siu5.jpeg",
    },
];

/* ---------------- Page ---------------- */
const StudyInUAEPage = () => {
    useParallax();
    const [activeScreen, setActiveScreen] = useState(0);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveScreen((prev) =>
                prev === heroScreens.length - 1 ? 0 : prev + 1
            );
        }, 2500);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const steps = document.querySelectorAll(".how-step");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveStep(Number(entry.target.dataset.step));
                    }
                });
            },
            { threshold: 0.6 }
        );

        steps.forEach((step) => observer.observe(step));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="sticky-header netherlands-page">

            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <FloatingNav />
                <div style={{ height: "30px" }} />

                {/* Overview*/}
                <section
                    id="overview"
                    style={{
                        padding: "60px 0 120px",
                        background:
                            "linear-gradient(180deg, #f6f8ff 0%, #ffffff 65%)",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "1200px",
                            margin: "0 auto",
                            padding: "0 6%",
                            display: "grid",
                            gridTemplateColumns: "1.1fr 0.9fr",
                            alignItems: "flex-start",
                            gap: "70px",
                        }}
                    >
                        {/* ---------- LEFT CONTENT ---------- */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            {/* Tagline */}
                            <span
                                style={{
                                    display: "inline-block",
                                    background: "#eef1ff",
                                    color: "#5a6bff",
                                    padding: "6px 16px",
                                    borderRadius: "20px",
                                    fontSize: "1.5rem",
                                    fontWeight: 600,
                                    marginBottom: "18px",
                                }}
                            >
                                SIU App • Study in UAE Made Simple
                            </span>

                            {/* Headline */}
                            <h1
                                style={{
                                    fontSize: "clamp(2.3rem, 4.2vw, 3.5rem)",
                                    lineHeight: 1.15,
                                    fontWeight: 800,
                                    color: "#0f172a",
                                    marginBottom: "18px",
                                }}
                            >
                                One App. <br />
                                <span style={{ color: "#6f8aff" }}>
                                    All UAE Universities.
                                </span>
                            </h1>

                            {/* Why SIU Exists */}
                            <p
                                style={{
                                    fontSize: "1.5rem",
                                    lineHeight: 1.75,
                                    color: "#475569",
                                    maxWidth: "520px",
                                    marginBottom: "26px",
                                }}
                            >
                                SIU App was built to eliminate the complexity of applying to universities
                                in the UAE. With a single application, students can apply to multiple
                                universities, upload documents once, make secure payments, and track
                                their entire admission journey in one place.
                            </p>

                            {/* Who it's for */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    flexWrap: "wrap",
                                    marginBottom: "30px",
                                }}
                            >
                                {["Students", "Parents", "Counsellors"].map((item) => (
                                    <span
                                        key={item}
                                        style={{
                                            background: "#f1f3ff",
                                            color: "#4f5cff",
                                            padding: "6px 14px",
                                            borderRadius: "18px",
                                            fontSize: "1.75rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            {/* App Store Buttons */}
                            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                                <a
                                    href="#"
                                    style={{
                                        padding: "12px 22px",
                                        background: "#000",
                                        color: "#fff",
                                        borderRadius: "12px",
                                        fontSize: "1.85rem",
                                        fontWeight: 600,
                                        textDecoration: "none",
                                        minWidth: "140px",
                                    }}
                                >
                                    🍎 App Store
                                    <span
                                        style={{
                                            display: "block",
                                            fontSize: "1.7rem",
                                            opacity: 0.7,
                                            fontWeight: 400,
                                        }}
                                    >
                                        Coming Soon
                                    </span>
                                </a>

                                <a
                                    href="#"
                                    style={{
                                        padding: "12px 22px",
                                        background: "#1a1a1a",
                                        color: "#fff",
                                        borderRadius: "12px",
                                        fontSize: "1.85rem",
                                        fontWeight: 600,
                                        textDecoration: "none",
                                        minWidth: "140px",
                                    }}
                                >
                                    ▶ Play Store
                                    <span
                                        style={{
                                            display: "block",
                                            fontSize: "1.7rem",
                                            opacity: 0.7,
                                            fontWeight: 400,
                                        }}
                                    >
                                        Coming Soon
                                    </span>
                                </a>
                            </div>
                        </motion.div>

                        {/* ---------- RIGHT PHONE MOCKUP ---------- */}
                        {/* ---------- RIGHT IMAGE SLIDER (NO PHONE FRAME) ---------- */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                width: "100%",
                            }}
                        >
                            <motion.img
                                key={heroScreens[activeScreen].id}
                                src={heroScreens[activeScreen].img}
                                alt={heroScreens[activeScreen].title}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    width: "100%",
                                    maxWidth: "340px",
                                    maxHeight: "70vh",   // 🔥 KEY FIX
                                    objectFit: "contain",
                                    borderRadius: "22px",
                                    boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
                                    background: "#fff",
                                }}

                            />
                        </motion.div>

                    </div>
                </section>



                {/* ---------------- Apply Once, Multiple Universities ---------------- */}
                <section
                    id="apply-once"
                    style={{
                        padding: "60px 0",
                        background: "#ffffff",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "1200px",
                            margin: "0 auto",
                            padding: "0 6%",
                            display: "grid",
                            gridTemplateColumns: "0.9fr 1.1fr", // 🔥 VISUAL LEFT, CONTENT RIGHT
                            gap: "100px",
                            alignItems: "center",
                        }}
                    >
                        {/* ---------- LEFT VISUAL FLOW ---------- */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "280px",
                                    padding: "40px 0",
                                }}
                            >
                                {/* Vertical Line */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "0",
                                        bottom: "0",
                                        width: "2px",
                                        background: "linear-gradient(#6f8aff, #c7d2ff)",
                                        transform: "translateX(-50%)",
                                    }}
                                />

                                {/* Steps */}
                                {[
                                    "Single Application",
                                    "Documents Uploaded Once",
                                    "Applied to Multiple Universities",
                                ].map((step, i) => (
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.2 }}
                                        style={{
                                            position: "relative",
                                            marginBottom: i !== 2 ? "100px" : "0",
                                            textAlign: "center",
                                            zIndex: 2,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                margin: "0 auto 16px",
                                                borderRadius: "50%",
                                                background: "#6f8aff",
                                                color: "#fff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "1.3rem",
                                                fontWeight: 800,
                                                boxShadow: "0 20px 50px rgba(110,120,255,0.45)",
                                            }}
                                        >
                                            {i + 1}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "1.05rem",
                                                fontWeight: 600,
                                                color: "#334155",
                                            }}
                                        >
                                            {step}
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Flow Animation Dot */}
                                <motion.div
                                    animate={{ top: ["0%", "100%"] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    style={{
                                        position: "absolute",
                                        left: "50%",
                                        width: "10px",
                                        height: "10px",
                                        background: "#6f8aff",
                                        borderRadius: "50%",
                                        transform: "translateX(-50%)",
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* ---------- RIGHT CONTENT ---------- */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span
                                style={{
                                    display: "inline-block",
                                    background: "#eef1ff",
                                    color: "#5a6bff",
                                    padding: "8px 20px",
                                    borderRadius: "24px",
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    marginBottom: "22px",
                                }}
                            >
                                Smart Applications
                            </span>

                            <h2
                                style={{
                                    fontSize: "clamp(2.8rem, 4.8vw, 3.6rem)",
                                    fontWeight: 900,
                                    lineHeight: 1.15,
                                    color: "#0f172a",
                                    marginBottom: "26px",
                                }}
                            >
                                Apply Once.
                                <br />
                                <span style={{ color: "#6f8aff" }}>
                                    Multiple Universities.
                                </span>
                            </h2>

                            <p
                                style={{
                                    fontSize: "1.3rem",
                                    lineHeight: 1.8,
                                    color: "#475569",
                                    maxWidth: "560px",
                                    marginBottom: "36px",
                                }}
                            >
                                Why repeat the same application again and again? SIU App lets you
                                submit one application, reuse your documents, and apply to multiple
                                universities effortlessly with intelligent program matching.
                            </p>

                            {/* Highlights */}
                            <div style={{ display: "grid", gap: "24px" }}>
                                {[
                                    "Single application sent to 10+ universities",
                                    "Upload documents once — reuse everywhere",
                                    "Smart program matching saves time",
                                ].map((text, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: "flex",
                                            gap: "18px",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "46px",
                                                height: "46px",
                                                borderRadius: "50%",
                                                background: "#6f8aff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#fff",
                                                fontSize: "1.2rem",
                                                fontWeight: 800,
                                                flexShrink: 0,
                                            }}
                                        >
                                            ✓
                                        </div>
                                        <span
                                            style={{
                                                fontSize: "1.15rem",
                                                fontWeight: 600,
                                                color: "#334155",
                                            }}
                                        >
                                            {text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Micro Copy */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        style={{
                            textAlign: "center",
                            marginTop: "90px",
                            fontSize: "1.35rem",
                            fontWeight: 800,
                            color: "#6f8aff",
                        }}
                    >
                        Apply to 10+ universities with just one application
                    </motion.p>
                </section>




                {/* ---------------- Universities & Programs ---------------- */}
                <section
                    id="universities"
                    style={{
                        padding: "60px 0",
                        background: "#ffffff",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "1200px",
                            margin: "0 auto",
                            padding: "0 6%",
                        }}
                    >
                        {/* ---------- HEADER ---------- */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ textAlign: "center", marginBottom: "80px" }}
                        >
                            <span
                                style={{
                                    display: "inline-block",
                                    background: "#eef1ff",
                                    color: "#5a6bff",
                                    padding: "8px 22px",
                                    borderRadius: "24px",
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    marginBottom: "20px",
                                }}
                            >
                                Trusted Network
                            </span>

                            <h2
                                style={{
                                    fontSize: "clamp(2.8rem, 4.8vw, 3.6rem)",
                                    fontWeight: 900,
                                    lineHeight: 1.15,
                                    color: "#0f172a",
                                    marginBottom: "22px",
                                }}
                            >
                                Universities & Programs
                            </h2>

                            <p
                                style={{
                                    fontSize: "1.25rem",
                                    lineHeight: 1.8,
                                    color: "#475569",
                                    maxWidth: "700px",
                                    margin: "0 auto",
                                }}
                            >
                                Access accredited universities across the UAE offering Bachelor,
                                Master, and Diploma programs — all through one unified application
                                platform.
                            </p>
                        </motion.div>

                        {/* ---------- STATS ---------- */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "40px",
                                textAlign: "center",
                                marginBottom: "80px",
                            }}
                        >
                            {[
                                { value: "100+", label: "Universities" },
                                { value: "500+", label: "Programs" },
                                { value: "3", label: "Intakes / Year" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div
                                        style={{
                                            fontSize: "3rem",
                                            fontWeight: 900,
                                            color: "#6f8aff",
                                            marginBottom: "6px",
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.05rem",
                                            fontWeight: 600,
                                            color: "#475569",
                                        }}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* ---------- ANIMATED UNIVERSITY MARQUEE ---------- */}
                        <div
                            style={{
                                position: "relative",
                                overflow: "hidden",
                                padding: "20px 0",
                            }}
                        >
                            <motion.div
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    duration: 35,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{
                                    display: "flex",
                                    gap: "24px",
                                    width: "max-content",
                                }}
                            >
                                {[
                                    "University of Birmingham Dubai",
                                    "Middlesex University Dubai",
                                    "Heriot-Watt University Dubai",
                                    "University of Wollongong Dubai",
                                    "Curtin University Dubai",
                                    "University of Birmingham Dubai",
                                    "Middlesex University Dubai",
                                ].map((uni, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -12, scale: 1.03 }}
                                        transition={{ type: "spring", stiffness: 180 }}
                                        style={{
                                            minWidth: "300px",
                                            background: "linear-gradient(180deg, #ffffff, #f6f8ff)",
                                            padding: "30px",
                                            borderRadius: "26px",
                                            boxShadow: "0 30px 80px rgba(0,0,0,0.08)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "1.2rem",
                                                fontWeight: 800,
                                                color: "#0f172a",
                                                marginBottom: "14px",
                                            }}
                                        >
                                            {uni}
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "10px",
                                                flexWrap: "wrap",
                                                marginBottom: "16px",
                                            }}
                                        >
                                            {["Bachelor", "Master", "Diploma"].map((level) => (
                                                <span
                                                    key={level}
                                                    style={{
                                                        padding: "6px 14px",
                                                        background: "#ffffff",
                                                        borderRadius: "14px",
                                                        fontSize: "0.85rem",
                                                        fontWeight: 600,
                                                        color: "#475569",
                                                        border: "1px solid #e5e7eb",
                                                    }}
                                                >
                                                    {level}
                                                </span>
                                            ))}
                                        </div>

                                        <div
                                            style={{
                                                fontSize: "0.95rem",
                                                color: "#64748b",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            Multiple intakes • Accredited programs • UAE campus
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>




                {/* ---------------- Student Dashboard ---------------- */}
                <section
                    id="dashboard"
                    style={{
                        padding: "80px 0",
                        background: "linear-gradient(180deg, #f6f8ff 0%, #ffffff 100%)",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "1200px",
                            margin: "0 auto",
                            padding: "0 6%",
                            display: "grid",
                            gridTemplateColumns: "1.1fr 0.9fr",
                            gap: "90px",
                            alignItems: "center",
                        }}
                    >
                        {/* ---------- LEFT CONTENT ---------- */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span
                                style={{
                                    display: "inline-block",
                                    background: "#eef1ff",
                                    color: "#5a6bff",
                                    padding: "8px 20px",
                                    borderRadius: "24px",
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    marginBottom: "22px",
                                }}
                            >
                                Student Dashboard
                            </span>

                            <h2
                                style={{
                                    fontSize: "clamp(2.6rem, 4.5vw, 3.4rem)",
                                    fontWeight: 900,
                                    lineHeight: 1.15,
                                    color: "#0f172a",
                                    marginBottom: "24px",
                                }}
                            >
                                Track Every Step of <br />
                                <span style={{ color: "#6f8aff" }}>
                                    Your Application Journey
                                </span>
                            </h2>

                            <p
                                style={{
                                    fontSize: "1.25rem",
                                    lineHeight: 1.8,
                                    color: "#475569",
                                    maxWidth: "520px",
                                    marginBottom: "36px",
                                }}
                            >
                                Stay informed at every stage. The SIU student dashboard gives you
                                real-time updates on application status, offer letters, notifications,
                                and important milestones — all in one place.
                            </p>

                            {/* Key Highlights */}
                            <div style={{ display: "grid", gap: "22px" }}>
                                {[
                                    {
                                        title: "Application Status Tracking",
                                        desc: "View current status for each university application in real time.",
                                    },
                                    {
                                        title: "Offer Letters & Decisions",
                                        desc: "Receive and manage offer letters directly from your dashboard.",
                                    },
                                    {
                                        title: "Smart Notifications",
                                        desc: "Never miss updates, deadlines, or required actions.",
                                    },
                                    {
                                        title: "Timeline View",
                                        desc: "See your entire application journey clearly from start to finish.",
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: "flex",
                                            gap: "18px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "46px",
                                                height: "46px",
                                                borderRadius: "50%",
                                                background: "#6f8aff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#fff",
                                                fontSize: "1.2rem",
                                                fontWeight: 800,
                                                flexShrink: 0,
                                            }}
                                        >
                                            {i + 1}
                                        </div>

                                        <div>
                                            <div
                                                style={{
                                                    fontSize: "1.5rem",
                                                    fontWeight: 700,
                                                    color: "#0f172a",
                                                    marginBottom: "6px",
                                                }}
                                            >
                                                {item.title}
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "1.2rem",
                                                    color: "#475569",
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                {item.desc}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ---------- RIGHT DASHBOARD MOCKUP ---------- */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                style={{
                                    width: "100%",
                                    borderRadius: "18px",
                                    overflow: "hidden",
                                    boxShadow: "0 40px 90px rgba(0,0,0,0.12)",
                                    background: "#f8fafc",
                                }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
                                    alt="SIU Desktop Dashboard"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                    }}
                                />
                            </motion.div>





                        </motion.div>
                    </div>
                </section>

                {/* ---------------- Security & Payments ---------------- */}
                <section
                    id="security"
                    style={{
                        padding: "100px 0",
                        background: "radial-gradient(circle at top, #f6f8ff, #ffffff)",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "1200px",
                            margin: "0 auto",
                            padding: "0 6%",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "90px",
                            alignItems: "center",
                        }}
                    >
                        {/* LEFT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2
                                style={{
                                    fontSize: "clamp(2.6rem, 4.5vw, 3.4rem)",
                                    fontWeight: 900,
                                    color: "#0f172a",
                                    marginBottom: "24px",
                                }}
                            >
                                Security You Can Trust
                            </h2>

                            <p
                                style={{
                                    fontSize: "1.25rem",
                                    lineHeight: 1.8,
                                    color: "#475569",
                                    maxWidth: "520px",
                                }}
                            >
                                SIU App uses government-backed authentication, encrypted document
                                handling, and trusted payment systems to keep your data safe at every
                                step.
                            </p>
                        </motion.div>

                        {/* RIGHT FLOATING BUBBLES */}
                        <div
                            style={{
                                position: "relative",
                                height: "380px",
                            }}
                        >
                            {[
                                { label: "UAE Pass Login", icon: "🇦🇪", top: "10%", left: "35%" },
                                { label: "Encrypted Documents", icon: "🔐", top: "45%", left: "5%" },
                                { label: "Secure Payments", icon: "💳", top: "45%", left: "65%" },
                                { label: "Data Privacy", icon: "🛡️", top: "75%", left: "35%" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        position: "absolute",
                                        top: item.top,
                                        left: item.left,
                                        width: "140px",
                                        height: "140px",
                                        borderRadius: "50%",
                                        background: "#ffffff",
                                        boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textAlign: "center",
                                        fontWeight: 700,
                                    }}
                                >
                                    <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                                        {item.icon}
                                    </div>
                                    <div style={{ fontSize: "0.95rem", color: "#334155" }}>
                                        {item.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>






                {/* ---------------- How It Works ---------------- */}
                <section
                    id="how-it-works"
                    style={{
                        padding: "110px 0",
                        background: "#ffffff",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "1200px",
                            margin: "0 auto",
                            padding: "0 6%",
                            textAlign: "center",
                        }}
                    >
                        {/* HEADER */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{
                                fontSize: "clamp(2.6rem, 4.5vw, 3.4rem)",
                                fontWeight: 900,
                                marginBottom: "70px",
                                color: "#0f172a",
                            }}
                        >
                            How It Works
                        </motion.h2>

                        {/* PROGRESS LINE */}
                        <div
                            style={{
                                position: "relative",
                                marginBottom: "80px",
                            }}
                        >
                            <div
                                style={{
                                    height: "4px",
                                    background: "#e5e7eb",
                                    borderRadius: "2px",
                                }}
                            />

                            <motion.div
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5 }}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    height: "4px",
                                    background: "#6f8aff",
                                    borderRadius: "2px",
                                }}
                            />
                        </div>

                        {/* STEPS */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                gap: "40px",
                            }}
                        >
                            {[
                                {
                                    title: "Login with UAE Pass",
                                    icon: "🇦🇪",
                                    desc: "Secure authentication using UAE Pass",
                                },
                                {
                                    title: "Shortlist Universities",
                                    icon: "🎓",
                                    desc: "Choose programs that match your goals",
                                },
                                {
                                    title: "Upload Documents Once",
                                    icon: "📄",
                                    desc: "Reuse documents for all applications",
                                },
                                {
                                    title: "Track Offers & Accept",
                                    icon: "✅",
                                    desc: "Monitor progress and accept offers",
                                },
                            ].map((step, i) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    style={{
                                        background: "#f6f8ff",
                                        borderRadius: "24px",
                                        padding: "40px 26px",
                                    }}
                                >
                                    <div style={{ fontSize: "2rem", marginBottom: "16px" }}>
                                        {step.icon}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: 800,
                                            marginBottom: "12px",
                                            color: "#0f172a",
                                        }}
                                    >
                                        {step.title}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.05rem",
                                            color: "#475569",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {step.desc}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>




                <Footer />
                <style jsx global>{`
                /* ================= MOBILE OPTIMIZATION ================= */
@media (max-width: 768px) {

  /* ---------- GENERAL ---------- */
  section {
    padding: 60px 0 !important;
  }

  h1, h2 {
    text-align: center !important;
  }

  p {
    font-size: 1.05rem !important;
    line-height: 1.7 !important;
    text-align: center !important;
  }

  /* ---------- FLOATING NAV ---------- */
  /* Hide scrollbar but keep scroll functionality */
  .floating-nav-scroll {
    -ms-overflow-style: none;   /* IE & Edge */
    scrollbar-width: none;      /* Firefox */
  }

  .floating-nav-scroll::-webkit-scrollbar {
    display: none;              /* Chrome, Safari */
  }


  /* ---------- OVERVIEW / HERO ---------- */
  #overview > div {
    grid-template-columns: 1fr !important;
    gap: 40px !important;
  }

  #overview span {
    font-size: 1rem !important;
  }

  #overview h1 {
    font-size: 2.2rem !important;
  }

  #overview img {
    height: 520px !important;
  }

  /* ---------- APPLY ONCE ---------- */
  #apply-once > div {
    grid-template-columns: 1fr !important;
    gap: 50px !important;
  }

  #apply-once > div > div:first-child {
    order: 2;
  }

  #apply-once > div > div:last-child {
    order: 1;
  }

  #apply-once h2 {
    font-size: 2.2rem !important;
  }

  /* ---------- UNIVERSITIES ---------- */
  #universities h2 {
    font-size: 2.2rem !important;
  }

  #universities > div > div:nth-child(2) {
    grid-template-columns: 1fr !important;
  }

  /* ---------- DASHBOARD ---------- */
  #dashboard > div {
    grid-template-columns: 1fr !important;
    gap: 50px !important;
  }

  #dashboard > div > div:first-child {
    order: 2;
  }

  #dashboard > div > div:last-child {
    order: 1;
  }

  #dashboard h2 {
    font-size: 2.2rem !important;
  }

  #dashboard img {
    height: 520px !important;
  }

  /* ---------- SECURITY & PAYMENTS ---------- */
  #security > div {
    grid-template-columns: 1fr !important;
    gap: 50px !important;
  }

  #security h2 {
    font-size: 2.2rem !important;
    text-align: center !important;
  }

  #security > div > div:last-child {
    position: static !important;
    height: auto !important;
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  #security > div > div:last-child > div {
    position: static !important;
    width: 100% !important;
    height: auto !important;
    padding: 22px 12px !important;
    border-radius: 20px !important;
  }

  /* ---------- HOW IT WORKS ---------- */
  #how-it-works h2 {
    font-size: 2.2rem !important;
  }

  #how-it-works > div > div:last-child {
    grid-template-columns: 1fr !important;
    gap: 30px !important;
  }

  #how-it-works > div > div:last-child > div {
    padding: 30px 22px !important;
  }

  /* ---------- FOOTER ---------- */
  footer {
    text-align: center !important;
  }
    /* Center all section taglines / badges */
  #overview span,
  #apply-once span,
  #dashboard span {
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
    text-align: center !important;
  }
}
/* ================= END MOBILE ================= */

       `}</style>
            </div>
        </div>
    );
};

export default StudyInUAEPage;