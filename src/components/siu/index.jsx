"use client";
import React from "react";
import "../../styles/siu-redesign.css";
import HeaderSIU from "../../layout/headers/header-siu";
import dynamic from "next/dynamic";
import { LanguageProvider } from "../../contexts/LanguageContext";
import { Footer } from "../../layout";
import { VoiceAssistantProvider } from "./voice-assistant/VoiceAssistantProvider";

// Load Hero normally as it is Above-the-Fold (LCP)
import Hero from "./hero";

// Dynamically load below-the-fold sections
const Ecosystem = dynamic(() => import("./ecosystem"), { ssr: true });
const Process = dynamic(() => import("./process"), { ssr: true });
const ForParents = dynamic(() => import("./for-parents"), { ssr: true });
const DownloadApp = dynamic(() => import("./download-app"), { ssr: true });
const Universities = dynamic(() => import("./universities"), { ssr: true });
const Testimonials = dynamic(() => import("./testimonials"), { ssr: true });
const FAQ = dynamic(() => import("./faq"), { ssr: true });
const Closing = dynamic(() => import("./closing"), { ssr: true });
const VoiceAssistantWidget = dynamic(() => import("./voice-assistant/VoiceAssistantWidget"), { 
  ssr: false,
  loading: () => null 
});

const StudyInUAEMain = () => {
  return (
    <div className="siu-redesign">
      <HeaderSIU />
|      <VoiceAssistantProvider>
        <main>
          <Hero />
          <Ecosystem />
          <Process />
          <ForParents />
          <DownloadApp />
          <Universities />
          <Testimonials />
          <FAQ />
          <Closing />
        </main>
        <Footer />
        <VoiceAssistantWidget />
      </VoiceAssistantProvider>
      
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