// header.jsx (Animated + Fixed + Top Bar Styled)
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeaderTopRight from "../headers/component/header-top-right";
import HeaderTopLeft from "../headers/component/header-top-left";
import MainMenu from "../headers/component/main-menu";
import useSticky from "../../hooks/use-sticky";
import OffCanvas from "../../components/common/sidebar/off-canvas";


const Header = ({ header_style, no_top_bar, disable_full_width, cls = "" }) => {
  const { sticky } = useSticky();
  const [animateStart, setAnimateStart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => setAnimateStart(true), 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <motion.header
        className={`edu-header header-style-${header_style || "1"} 
          ${disable_full_width ? "disable-header-fullwidth" : "header-fullwidth"} 
          ${cls}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 999999,
          background: "#fff",
          overflow: "visible",
        }}
      >
        {/* ⭐ TOP BAR (Now Styled Like Original) */}
        {!no_top_bar && (
          <div
            className="header-top-bar"
            style={{
              background: "#b2883b", // BLACK BAR
              padding: "4px 0",
              color: "#fff",
              fontSize: "12px",
            }}
          >
            <div className="container-fluid">
              {/* ✅ TOP BAR – Safari Safe */}
              <div
                className="header-top"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "nowrap",
                }}
              >
                <div
                  className="header-top-left"
                  style={{
                    flex: "1 1 auto",
                    minWidth: 0, // ✅ IMPORTANT: allows marquee to shrink inside flex
                    overflow: "hidden",
                  }}
                >
                  <HeaderTopLeft />
                </div>

                <div
                  className="header-top-right"
                  style={{
                    flex: "0 0 auto",
                    whiteSpace: "nowrap",
                    marginRight: "60px", // ✅ MATCHES MAIN MENU RIGHT
                  }}
                >
                  <HeaderTopRight />
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ⭐ Main Animated Header */}
        <div
          className={`header-mainmenu ${sticky ? "edu-sticky" : ""}`}
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            minHeight: "80px",
            overflow: "visible",
          }}
        >
          <div
            className="container-fluid relative"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "visible",
            }}
          >
            {/* ⭐ Logo Animation */}
            <motion.div
              className="header-logo-motion"
              initial={{
                position: "absolute",
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                scale: 1.3,
                opacity: 0,
              }}
              animate={
                animateStart
                  ? {
                    top: "50%",
                    left: "50px",
                    x: 0,
                    y: "-50%",
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 70,
                      damping: 12,
                      duration: 1,
                    },
                  }
                  : { opacity: 1 }
              }
              style={{ position: "absolute" }}
            >
              <Link href="/">
                <motion.img
                  src="/assets/images/about/21-01.png"
                  alt="logo"
                  style={{ width: "190px", height: "auto", cursor: "pointer" }}
                  whileHover={{ scale: 1.05 }}
                />
              </Link>
            </motion.div>

            {/* ⭐ Menu */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                animateStart
                  ? {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6, duration: 0.7 },
                  }
                  : {}
              }
              style={{
                position: "absolute",
                right: "60px",
                top: "25%",
                transform: "translateY(-60%)",
                overflow: "visible",
              }}
            >
              <MainMenu />
              {/* ⭐ Mobile Hamburger (ONLY mobile) */}
              <div
                className="mobile-menu-bar d-block d-xl-none"
                style={{
                  position: "absolute",
                  right: "-38px",   // 🔴 correct right margin
                  top: "8px",      // 🔴 higher – matches red arrow
                  zIndex: 1000000,
                }}
              >
                <button
                  className="hamberger-button"
                  onClick={() => {
                    document.body.classList.add("menu-open");
                    setIsOpen(true);
                  }}

                  style={{
                    background: "transparent",
                    border: "none",
                    fontSize: "26px",
                    cursor: "pointer",
                    color: "#000",
                    padding: 0,
                    lineHeight: 1,
                  }}
                >
                  <i className="icon-54"></i>
                </button>
              </div>


            </motion.div>
          </div>
        </div>

        <style jsx>{`
  .edu-sticky {
    backdrop-filter: blur(6px);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.06);
  }

  /* ⭐ Adjust Body Padding Based on Topbar */
  :global(body) {
    padding-top: ${no_top_bar ? "80px" : "110px"} !important;
  }

  /* ===============================
     ✅ MOBILE HEADER FIX
     =============================== */

  @media (max-width: 1199px) {
    /* Hide desktop menu */
    :global(.mainmenu-nav),
    :global(.mainmenu),
    :global(.mainmenu > li) {
      display: none !important;
    }

    /* Ensure header layout stays clean */
    .header-mainmenu {
      min-height: 70px;
    }
  }
   /* ===============================
     MOBILE LOGO + HAMBURGER SPACING
     =============================== */
  @media (max-width: 767px) {
  :global(.edu-header .logo),
  :global(.edu-header .header-brand) {
    margin-left: -24px;
  }
}
  /* ✅ FIX LOGO–HAMBURGER GAP ON MOBILE */
  @media (max-width: 767px) {
    :global(.header-logo-motion) {
      left: 16px !important;
    }
  }

`}</style>

      </motion.header>
      {/* ⭐ Mobile Sidebar */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />

    </>
  );
};
export default Header;