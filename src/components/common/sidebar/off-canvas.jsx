"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import menu_data from "../../../layout/headers/menu-data";

const OffCanvas = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  const closeMenu = () => {
  document.body.classList.remove("menu-open");
  setIsOpen(false);
};


  return (
    <>
      <div className={`popup-mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="inner">
          {/* HEADER */}
          <div className="header-top">
            <Link href="/" onClick={closeMenu}>
              <img
                src="/assets/images/about/21-01.png"
                alt="logo"
                style={{ width: "160px" }}
              />
            </Link>

            <button className="close-button" onClick={closeMenu}>
              <i className="icon-73"></i>
            </button>
          </div>

          {/* ✅ MOBILE MENU = ONLY DIRECT LINKS */}
          <nav className="mobile-menu-root">
            <ul className="mobile-menu">
              {menu_data.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.link || "/"}
                    onClick={closeMenu}
                    className={`mobile-link ${
                      pathname.startsWith(menu.link || "")
                        ? "active"
                        : ""
                    }`}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`body-overlay ${isOpen ? "apply" : ""}`}
        onClick={closeMenu}
      />

      {/* STYLES */}
      <style jsx>{`
  /* ===============================
     FORCE LEFT SPACING (FIX)
     =============================== */

  :global(.popup-mobile-menu .inner) {
    padding-left: 18px !important;
    padding-right: 18px !important;
  }

  :global(.popup-mobile-menu .mobile-menu-root) {
    margin-top: 10px;
  }

  .mobile-menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mobile-menu li {
    border-bottom: 1px solid #eee;
  }

  .mobile-link {
    display: flex;
    align-items: center;
    padding: 14px 0; /* vertical only */
    font-size: 16px;
    font-weight: 600;
    color: #222;
    text-decoration: none;
    line-height: 1.2;
  }

  .mobile-link.active {
    color: #6f4bff;
    font-weight: 700;
  }

  .mobile-menu li:last-child {
    border-bottom: none;
  }
`}</style>


    </>
  );
};

export default OffCanvas;
