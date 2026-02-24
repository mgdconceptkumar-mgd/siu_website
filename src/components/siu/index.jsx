"use client";
import React, { useState, useRef, useEffect } from "react";
import { Footer, Header } from "../../layout";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/siu-landing.scss";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */
const heroScreens = [
    { id: 1, title: "Login", img: "/assets/images/about/siu1.jpeg" },
    { id: 2, title: "Universities", img: "/assets/images/about/siu2.jpeg" },
    { id: 3, title: "Upload Documents", img: "/assets/images/about/siu3.jpeg" },
    { id: 4, title: "Track Application", img: "/assets/images/about/siu4.jpeg" },
    { id: 5, title: "Offer Received", img: "/assets/images/about/siu5.jpeg" },
];

const navSections = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "how-it-works", label: "How It Works" },
    { id: "universities", label: "Universities" },
    { id: "dashboard", label: "Dashboard" },
    { id: "security", label: "Security" },
];

const features = [
    {
        icon: "🎯",
        title: "Apply Once, Everywhere",
        desc: "Submit a single application to 10+ UAE universities. Upload your documents once and reuse them across all applications instantly.",
    },
    {
        icon: "📊",
        title: "Real-Time Dashboard",
        desc: "Track every application status, receive offer letters, and monitor deadlines — all from one intelligent dashboard.",
    },
    {
        icon: "🔐",
        title: "Bank-Grade Security",
        desc: "UAE Pass authentication, encrypted document handling, and secure payment processing protect your data at every step.",
    },
    {
        icon: "🎓",
        title: "Smart Program Matching",
        desc: "Our intelligent matching engine recommends the best programs based on your academic profile and career goals.",
    },
    {
        icon: "💳",
        title: "Secure Payments",
        desc: "Pay application fees safely through our trusted, encrypted payment gateway with full transaction transparency.",
    },
    {
        icon: "🔔",
        title: "Smart Notifications",
        desc: "Never miss a deadline again. Get timely alerts for application updates, offer decisions, and required actions.",
    },
];

const howItWorks = [
    { icon: "🇦🇪", title: "Sign Up via UAE Pass", desc: "Secure, verified authentication using your UAE Pass identity" },
    { icon: "🎓", title: "Shortlist Programs", desc: "Browse 500+ programs and shortlist the ones that match your goals" },
    { icon: "📄", title: "Upload & Apply", desc: "Upload documents once and submit applications to multiple universities" },
    { icon: "✅", title: "Track & Accept", desc: "Monitor progress in real-time and accept your dream offer" },
];

const stats = [
    { value: "100+", label: "Universities" },
    { value: "500+", label: "Programs" },
    { value: "3", label: "Intakes / Year" },
    { value: "10K+", label: "Students" },
];

const universities = [
    "University of Birmingham Dubai",
    "Middlesex University Dubai",
    "Heriot-Watt University Dubai",
    "University of Wollongong Dubai",
    "Curtin University Dubai",
    "Canadian University Dubai",
    "Amity University Dubai",
];

const trustBadges = [
    { icon: "🇦🇪", label: "UAE Pass Login" },
    { icon: "🔐", label: "Encrypted Documents" },
    { icon: "💳", label: "Secure Payments" },
    { icon: "🛡️", label: "Data Privacy" },
];

const dashboardHighlights = [
    { title: "Application Status Tracking", desc: "View current status for each university application in real time." },
    { title: "Offer Letters & Decisions", desc: "Receive and manage offer letters directly from your dashboard." },
    { title: "Smart Notifications", desc: "Never miss updates, deadlines, or required actions." },
    { title: "Timeline View", desc: "See your entire application journey clearly from start to finish." },
];

/* ─────────────────────────────────────────────
   FLOATING NAV
   ───────────────────────────────────────────── */
const FloatingNav = () => {
    const [active, setActive] = useState(navSections[0].id);
    const navRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach(
                    (entry) => entry.isIntersecting && setActive(entry.target.id)
                ),
            { threshold: 0.15, rootMargin: "-150px 0px -30% 0px" }
        );
        navSections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const activeBtn = document.querySelector(`[data-nav-id="${active}"]`);
        if (activeBtn && navRef.current) {
            activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
    }, [active]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 160,
            behavior: "smooth",
        });
    };

    return (
        <div className="siu-floating-nav">
            <div ref={navRef} className="siu-floating-nav__inner">
                {navSections.map((sec) => (
                    <motion.button
                        key={sec.id}
                        data-nav-id={sec.id}
                        onClick={() => scrollTo(sec.id)}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className={`siu-nav-pill ${active === sec.id ? "active" : ""}`}
                    >
                        {sec.label}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

/* ─────────────────────────────────────────────
   ANIMATED COUNTER
   ───────────────────────────────────────────── */
const AnimatedCounter = ({ value }) => {
    const [displayed, setDisplayed] = useState("0");
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
                    const suffix = value.replace(/[0-9]/g, "");
                    const duration = 2000;
                    const steps = 60;
                    const increment = numericPart / steps;
                    let current = 0;
                    let step = 0;
                    const timer = setInterval(() => {
                        step++;
                        current = Math.min(Math.round(increment * step), numericPart);
                        setDisplayed(`${current}${suffix}`);
                        if (step >= steps) clearInterval(timer);
                    }, duration / steps);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return <span ref={ref}>{displayed}</span>;
};

/* ─────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ───────────────────────────────────────────── */
const StudyInUAEPage = () => {
    const [activeScreen, setActiveScreen] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveScreen((prev) => (prev === heroScreens.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const staggerChildren = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="sticky-header siu-landing">
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <FloatingNav />

                {/* ═══════════════════════════════════════════
                    HERO SECTION
                   ═══════════════════════════════════════════ */}
                <section id="overview" className="siu-hero">
                    <div className="siu-hero__glow-1" />
                    <div className="siu-hero__glow-2" />

                    <div className="siu-hero__grid">
                        {/* LEFT */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="siu-hero__tagline">
                                ✦ SIU App • Study in UAE Made Simple
                            </div>

                            <h1 className="siu-hero__title">
                                One App. <br />
                                <span>All UAE Universities.</span>
                            </h1>

                            <p className="siu-hero__desc">
                                SIU App eliminates the complexity of applying to universities in the UAE.
                                Apply to multiple universities with a single application, upload documents
                                once, make secure payments, and track your entire admission journey.
                            </p>

                            <div className="siu-hero__audience">
                                {["Students", "Parents", "Counsellors"].map((item) => (
                                    <span key={item} className="siu-audience-chip">{item}</span>
                                ))}
                            </div>

                            <div className="siu-hero__cta-row">
                                <a href="#" className="siu-store-btn">
                                    <span className="siu-store-btn__icon">🍎</span>
                                    <span className="siu-store-btn__text">
                                        <span className="siu-store-btn__sub">Coming soon on</span>
                                        <span className="siu-store-btn__main">App Store</span>
                                    </span>
                                </a>
                                <a href="#" className="siu-store-btn">
                                    <span className="siu-store-btn__icon">▶️</span>
                                    <span className="siu-store-btn__text">
                                        <span className="siu-store-btn__sub">Coming soon on</span>
                                        <span className="siu-store-btn__main">Google Play</span>
                                    </span>
                                </a>
                            </div>
                        </motion.div>

                        {/* RIGHT — Phone Mockup */}
                        <motion.div
                            className="siu-hero__phone-wrap"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="siu-phone-frame">
                                <div className="siu-phone-frame__glow" />
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={heroScreens[activeScreen].id}
                                        src={heroScreens[activeScreen].img}
                                        alt={heroScreens[activeScreen].title}
                                        className="siu-phone-frame__img"
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </AnimatePresence>
                            </div>
                            <div className="siu-hero__dots">
                                {heroScreens.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`siu-hero__dot ${i === activeScreen ? "active" : ""}`}
                                        onClick={() => setActiveScreen(i)}
                                        aria-label={`Screen ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    FEATURES
                   ═══════════════════════════════════════════ */}
                <section id="features" className="siu-section siu-features">
                    <div className="siu-section__inner">
                        <motion.div
                            className="siu-section-header"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <div className="siu-section-badge">✦ Why SIU App</div>
                            <h2 className="siu-section-title">
                                Everything You Need, <span>In One App</span>
                            </h2>
                            <p className="siu-section-desc">
                                Built for students who want a smarter, faster way to apply to UAE universities.
                            </p>
                        </motion.div>

                        <motion.div
                            className="siu-features__grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerChildren}
                        >
                            {features.map((f, i) => (
                                <motion.div key={i} className="siu-feature-card" variants={fadeUp}>
                                    <div className="siu-feature-card__icon">{f.icon}</div>
                                    <div className="siu-feature-card__title">{f.title}</div>
                                    <div className="siu-feature-card__desc">{f.desc}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    HOW IT WORKS
                   ═══════════════════════════════════════════ */}
                <section id="how-it-works" className="siu-section siu-how">
                    <div className="siu-section__inner">
                        <motion.div
                            className="siu-section-header"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <div className="siu-section-badge">✦ Simple Process</div>
                            <h2 className="siu-section-title">
                                How It <span>Works</span>
                            </h2>
                            <p className="siu-section-desc">
                                From sign-up to acceptance — your entire university journey in four simple steps.
                            </p>
                        </motion.div>

                        <motion.div
                            className="siu-how__steps"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerChildren}
                        >
                            {howItWorks.map((step, i) => (
                                <motion.div key={i} className="siu-step" variants={fadeUp}>
                                    <div className="siu-step__number">{step.icon}</div>
                                    <div className="siu-step__title">{step.title}</div>
                                    <div className="siu-step__desc">{step.desc}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    STATISTICS
                   ═══════════════════════════════════════════ */}
                <section className="siu-stats">
                    <div className="siu-section__inner">
                        <motion.div
                            className="siu-stats__grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerChildren}
                        >
                            {stats.map((s, i) => (
                                <motion.div key={i} className="siu-stat" variants={fadeUp}>
                                    <div className="siu-stat__value">
                                        <AnimatedCounter value={s.value} />
                                    </div>
                                    <div className="siu-stat__label">{s.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    UNIVERSITIES MARQUEE
                   ═══════════════════════════════════════════ */}
                <section id="universities" className="siu-section siu-universities">
                    <div className="siu-section__inner">
                        <motion.div
                            className="siu-section-header"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <div className="siu-section-badge">✦ Trusted Network</div>
                            <h2 className="siu-section-title">
                                Universities & <span>Programs</span>
                            </h2>
                            <p className="siu-section-desc">
                                Access accredited universities across the UAE offering Bachelor,
                                Master, and Diploma programs — all through one unified platform.
                            </p>
                        </motion.div>
                    </div>

                    <div className="siu-marquee-wrap">
                        <div className="siu-marquee-track">
                            {[...universities, ...universities].map((uni, i) => (
                                <div key={i} className="siu-uni-card">
                                    <div className="siu-uni-card__name">{uni}</div>
                                    <div className="siu-uni-card__tags">
                                        {["Bachelor", "Master", "Diploma"].map((t) => (
                                            <span key={t} className="siu-uni-card__tag">{t}</span>
                                        ))}
                                    </div>
                                    <div className="siu-uni-card__meta">
                                        Multiple intakes • Accredited programs • UAE campus
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    DASHBOARD / APP SCREENSHOTS
                   ═══════════════════════════════════════════ */}
                <section id="dashboard" className="siu-section siu-screenshots">
                    <div className="siu-section__inner">
                        <div className="siu-screenshots__layout">
                            {/* LEFT — Content */}
                            <motion.div
                                className="siu-screenshots__content"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerChildren}
                            >
                                <motion.div variants={fadeUp}>
                                    <div className="siu-section-badge">✦ Student Dashboard</div>
                                </motion.div>
                                <motion.h2 className="siu-section-title" variants={fadeUp} style={{ textAlign: "left" }}>
                                    Track Every Step of <br />
                                    <span>Your Application Journey</span>
                                </motion.h2>
                                <motion.p className="siu-section-desc" variants={fadeUp} style={{ textAlign: "left", margin: 0 }}>
                                    Stay informed at every stage. The SIU student dashboard gives you
                                    real-time updates on application status, offer letters, notifications,
                                    and important milestones.
                                </motion.p>

                                <motion.div className="siu-screenshots__highlights" variants={staggerChildren}>
                                    {dashboardHighlights.map((item, i) => (
                                        <motion.div key={i} className="siu-highlight" variants={fadeUp}>
                                            <div className="siu-highlight__num">{i + 1}</div>
                                            <div className="siu-highlight__text">
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* RIGHT — Screenshots Fan */}
                            <motion.div
                                className="siu-screenshots__visual"
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="siu-screenshots__fan">
                                    {heroScreens.slice(0, 3).map((s, i) => (
                                        <motion.img
                                            key={s.id}
                                            src={s.img}
                                            alt={s.title}
                                            className="siu-screenshots__fan-img"
                                            initial={{ opacity: 0, y: 20 + i * 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.15, duration: 0.5 }}
                                            style={{
                                                transform: `rotate(${(i - 1) * 5}deg)`,
                                                zIndex: 3 - Math.abs(i - 1),
                                            }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    SECURITY & TRUST
                   ═══════════════════════════════════════════ */}
                <section id="security" className="siu-section siu-security">
                    <div className="siu-section__inner">
                        <div className="siu-security__grid">
                            {/* LEFT — Content */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerChildren}
                            >
                                <motion.div variants={fadeUp}>
                                    <div className="siu-section-badge">✦ Built With Trust</div>
                                </motion.div>
                                <motion.h2 className="siu-section-title" variants={fadeUp} style={{ textAlign: "left" }}>
                                    Security You <span>Can Trust</span>
                                </motion.h2>
                                <motion.p className="siu-section-desc" variants={fadeUp} style={{ textAlign: "left", margin: 0 }}>
                                    SIU App uses government-backed authentication, encrypted document
                                    handling, and trusted payment systems to keep your data safe at every step.
                                </motion.p>
                            </motion.div>

                            {/* RIGHT — Trust Badges */}
                            <motion.div
                                className="siu-trust-badges"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerChildren}
                            >
                                {trustBadges.map((badge, i) => (
                                    <motion.div
                                        key={i}
                                        className="siu-trust-badge"
                                        variants={fadeUp}
                                        whileHover={{ y: -6, scale: 1.02 }}
                                    >
                                        <span className="siu-trust-badge__icon">{badge.icon}</span>
                                        <span className="siu-trust-badge__label">{badge.label}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    CTA SECTION
                   ═══════════════════════════════════════════ */}
                <section className="siu-cta">
                    <div className="siu-cta__glow" />
                    <motion.div
                        className="siu-cta__inner"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                    >
                        <motion.h2 className="siu-cta__title" variants={fadeUp}>
                            Ready to Start Your <span>UAE Education Journey?</span>
                        </motion.h2>
                        <motion.p className="siu-cta__desc" variants={fadeUp}>
                            Join thousands of students already using SIU App to simplify their
                            university applications. One app — all UAE universities.
                        </motion.p>
                        <motion.div className="siu-cta__buttons" variants={fadeUp}>
                            <a href="#" className="siu-store-btn">
                                <span className="siu-store-btn__icon">🍎</span>
                                <span className="siu-store-btn__text">
                                    <span className="siu-store-btn__sub">Coming soon on</span>
                                    <span className="siu-store-btn__main">App Store</span>
                                </span>
                            </a>
                            <a href="#" className="siu-store-btn">
                                <span className="siu-store-btn__icon">▶️</span>
                                <span className="siu-store-btn__text">
                                    <span className="siu-store-btn__sub">Coming soon on</span>
                                    <span className="siu-store-btn__main">Google Play</span>
                                </span>
                            </a>
                        </motion.div>
                    </motion.div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default StudyInUAEPage;