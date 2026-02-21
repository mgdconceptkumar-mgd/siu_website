"use client";

import React, { useState } from "react";
import Link from "next/link";
import SearchPopup from "../../../components/common/popup-modal/search-popup";

const HeaderTopRight = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* ✅ RIGHT TOP BAR – SAFARI SAFE */}
      <div className="edu-topbar-right">
        <ul className="edu-topbar-links">
          {/* 🔍 Search */}
          <li className="edu-topbar-item">
            <button
              type="button"
              className="edu-topbar-search"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <i className="icon-2" />
            </button>
          </li>

          {/* 📌 Navigation Links */}
          <li className="edu-topbar-item">
            <Link href="/blog-details#scholarship">100% Scholarships</Link>
          </li>

          <li className="edu-topbar-item">
            <Link href="/blog-details#scholarship">Fully Funded</Link>
          </li>

          <li className="edu-topbar-item">
            <Link href="https://ieltsexpert.net/" target="_blank">
              IELTS Mock Test
            </Link>
          </li>

          <li className="edu-topbar-item">
            <Link href="/tofelmocktest">TOEFL Mock Test</Link>
          </li>

          <li className="edu-topbar-item">
            <Link href="/event-grid">Boarding School</Link>
          </li>

          <li className="edu-topbar-item">
            <Link href="/career-updates">Career</Link>
          </li>
        </ul>
      </div>

      {/* 🔎 Search Popup */}
      <SearchPopup
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
    </>
  );
};

export default HeaderTopRight;