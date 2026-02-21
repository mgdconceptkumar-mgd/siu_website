"use client";
import React from "react";

const HeaderTopLeft = () => {
  return (
    <>
      <div
        className="topbar-marquee"
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          className="topbar-marquee__text"
          style={{
            display: "inline-block",
            paddingLeft: "100%",
            animation: "scroll-left 12s linear infinite",
            color: "#fff",
            fontSize: "14px",
            lineHeight: "1",
          }}
        >
          First 20 students get 50% discount.&nbsp;
          <a href="#" style={{ color: "#ffd700", fontWeight: "bold" }}>
            Hurry up!
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* ✅ Safari repaint helper for smooth marquee */
        .topbar-marquee__text {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>
    </>
  );
};

export default HeaderTopLeft;