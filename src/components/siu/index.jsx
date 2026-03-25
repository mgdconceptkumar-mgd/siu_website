"use client";
import React from "react";
import "../../styles/siu-redesign.css";
import HeaderSIU from "../../layout/headers/header-siu";
import Hero from "./hero";
import Ecosystem from "./ecosystem";
import Features from "./features";
import Universities from "./universities";
import DownloadApp from "./download-app";
import Closing from "./closing";
import { Footer } from "../../layout";
import { motion } from "framer-motion";

const StudyInUAEMain = () => {
  return (
    <div className="siu-redesign">
      <HeaderSIU />
      <main>
        <Hero />
        <Ecosystem />
        <Features />
        <DownloadApp />
        <Universities />
        <Closing />
      </main>
      <Footer />
      
      <style jsx global>{`
        body {
          background: #ffffff !important;
          color: #0f172a !important;
          margin: 0;
          padding: 0 !important;
          overflow-x: hidden;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Hide default navbar if necessary (since we use HeaderSIU) */
        .edu-header:not(.siu-redesign-header) {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default StudyInUAEMain;